import google.generativeai as genai
import os
import json
import hashlib
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if GEMINI_API_KEY and "YOUR_PASTE_KEY_HERE" not in GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

def generate_simhash(text: str) -> str:
    # A pseudo-simhash using MD5 for demonstration of generating structural signatures
    return hashlib.md5(text.encode('utf-8')).hexdigest()[:16].upper()

def check_for_scam(message: str, forward_count: int):
    simhash_val = generate_simhash(message)
    
    # If no API key, fallback to a smart heuristic
    if not GEMINI_API_KEY or "YOUR_PASTE_KEY_HERE" in GEMINI_API_KEY:
        suspicious_phrases = ["processing fee", ".com", ".in", "click here", "urgent", "guaranteed"]
        is_suspicious = any(phrase in message.lower() for phrase in suspicious_phrases)
        return {
            "status": "flagged" if is_suspicious else "clear",
            "is_scam": is_suspicious,
            "risk_score": 88 if is_suspicious else 12,
            "rationale": ["Found suspicious keywords or external links.", "Mock fallback mode executed."] if is_suspicious else ["Message looks structurally safe."],
            "simhash": simhash_val
        }

    # Use Gemini for real RAG/Analysis
    prompt = f"""
    You are an expert cybersecurity and financial fraud agent (ScamShield).
    Analyze the following message for loan/scholarship phishing, crypto scams, or social engineering:
    
    PAYLOAD: "{message}"
    FORWARD COUNT: {forward_count}
    
    Consider:
    - Typo-squatted domains (e.g., sbibankk.com instead of sbi.co.in)
    - Unrealistic guarantees (e.g., "100% Guaranteed 2 Lakhs")
    - Urgency indicators
    
    Respond STRICTLY in JSON format with no markdown formatting around it:
    {{
      "is_scam": true/false,
      "risk_score": <integer 0-100 indicating fraud likelihood>,
      "rationale": ["<strong specific reason 1>", "<strong specific reason 2>"]
    }}
    """
    
    try:
        response = model.generate_content(prompt)
        text = response.text.replace('```json', '').replace('```', '').strip()
        data = json.loads(text)
        data['simhash'] = simhash_val
        data['status'] = "flagged" if data.get('is_scam') else "clear"
        return data
    except Exception as e:
        # Fallback if Gemini fails or returns malformed JSON
        is_viral = forward_count > 5
        return {
            "status": "flagged",
            "is_scam": True,
            "risk_score": 90,
            "rationale": [f"AI Parsing Error. Assuming high risk.", f"Viral velocity detected: {forward_count} forwards."],
            "simhash": simhash_val
        }
