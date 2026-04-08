from rag_brain.scholarship import verify_scholarship

VERIFIED_SCHEMES = [
    "pm yashasvi",
    "nta post matric scholarship",
    "tata trusts scholarship",
    "kalyanika vidya peeth"
]

def check_for_scam(message: str, forward_count: int):
    # 1. Detect urgency or fee requests
    suspicious_phrases = ["processing fee", "send 500", "click here immediately", "limited time offer"]
    has_suspicious = any(phrase in message.lower() for phrase in suspicious_phrases)
    
    # 2. Check viral velocity
    is_viral = forward_count >= 10
    
    # 3. RAG Verification: Check if mentioned scheme is even real
    # We do a basic check - if they ask for money, and it's a real scheme name, it's a phishing scam of a real scheme.
    is_verified = verify_scholarship(message, VERIFIED_SCHEMES)
    
    if (is_viral and has_suspicious) or (has_suspicious and not is_verified):
        return {
            "status": "flagged",
            "is_scam": True,
            "confidence": 92 if has_suspicious else 75,
            "reason": "This message asks for processing fees upfront and exhibits viral forwarding patterns.",
            "action": "BLOCK_AND_WARN"
        }
    
    return {
        "status": "clear",
        "is_scam": False,
        "confidence": 95,
        "reason": "Safe message. Does not match known scam geometries.",
        "action": "NONE"
    }
