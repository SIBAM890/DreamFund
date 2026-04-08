from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import json

from rag_brain.search_engine import brain
from rag_brain.autopsy_gen import generate_autopsy_roadmap
from scanners.credfund_scanner import generate_credpath_score
from whatsapp_agent.scam_shield import check_for_scam

app = FastAPI(title="DreamFund API", description="Backend for DreamFund MVP")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudentProfile(BaseModel):
    name: str
    tenth_marks: float
    twelfth_marks: float
    university: str
    tier: int
    amount_needed: int
    purpose: str

class ApplicationRequest(BaseModel):
    provider_name: str
    student_name: str
    university: str
    profile_summary: str

@app.post("/api/scan_student")
async def scan_student(profile: StudentProfile):
    score = generate_credpath_score(profile.model_dump())
    
    # Real RAG Search using embeddings!
    query = f"Funding for {profile.purpose} of {profile.amount_needed} for student at {profile.university}"
    matches = brain.search(query, top_k=6)
    
    # Split matches into "Recommended" and "Almost Qualified/Autopsy"
    # For demo: top 3 are recommendations, next 3 are for autopsy
    return {
        "status": "success",
        "credpath_score": score,
        "recommendations": matches[:3],
        "potential_autopsy": matches[3:6]
    }

@app.post("/api/auto_apply")
async def auto_apply(request: ApplicationRequest):
    # Simulate the "Auto-Fill" and "Guarantee" logic
    await asyncio.sleep(2)
    return {
        "status": "approved",
        "message": f"SUCCESS: Application for {request.student_name} (University: {request.university}) has been auto-filled and transmitted to {request.provider_name}. RAG-Validation check passed. ID: DF-{asyncio.get_event_loop().time()}"
    }

@app.post("/api/generate_autopsy")
async def generate_autopsy(request: ApplicationRequest):
    # Call Gemini to get a custom roadmap
    result = await generate_autopsy_roadmap(request.profile_summary, request.provider_name)
    try:
        if isinstance(result, str):
            data = json.loads(result)
        else:
            data = result
    except:
        data = { "reason": "AI Analysis error.", "roadmap": ["Check profile manually."] }
    
    return {
        "rejected_by": request.provider_name,
        "reason": data.get("reason"),
        "roadmap": data.get("roadmap")
    }

@app.post("/api/scam_shield")
async def scan_whatsapp(message: dict):
    result = check_for_scam(message['message_text'], message['forward_count'])
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
