import google.generativeai as genai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY or "YOUR_PASTE_KEY_HERE" in GEMINI_API_KEY:
    print("WARNING: Gemini API Key not set in .env. Falling back to mock data.")
else:
    genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

async def generate_autopsy_roadmap(student_profile, provider_details):
    prompt = f"""
    You are the 'Autopsy Agent' for DreamFund. 
    A student applied for the following and got rejected:
    Student Profile: {student_profile}
    Provider Details: {provider_details}

    Your task:
    1. Identify a realistic, professional reason for rejection based on the profile and provider criteria.
    2. Provide a 'Recovery Roadmap' - a 3-step action plan for the student to improve their CredPath score and get approved in the next 45-60 days.
    3. Be encouraging but honest.

    Format your response as valid JSON with these keys: 
    "reason": (string),
    "roadmap": (list of 3 strings)
    """

    try:
        response = model.generate_content(prompt)
        # In a real app, we'd use better JSON parsing, but for now:
        text = response.text
        # Safety fallback logic
        if "```json" in text:
            text = text.split("```json")[1].split("```")[0]
        return text
    except Exception as e:
        return {
            "reason": "System was unable to contact Gemini AI. Defaulting to internal heuristic: Insufficient technical signals.",
            "roadmap": ["Complete a cloud certification.", "Join a tech hackathon.", "Maintain 90% attendance."]
        }
