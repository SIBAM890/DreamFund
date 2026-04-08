def get_loan_options(score: int):
    # Mock data for lenders and mapping to scores - This represents RAG lookup based on lender criteria
    lenders = [
        {"name": "EduFund NBFC", "min_score": 650, "probability": "High", "max_amount": "5L INR"},
        {"name": "Prime Scholar Bank", "min_score": 750, "probability": "Medium", "max_amount": "15L INR"},
        {"name": "NextGen Finance", "min_score": 500, "probability": "Very High", "max_amount": "2L INR"}
    ]
    
    eligible = [l for l in lenders if l["min_score"] <= score]
    return sorted(eligible, key=lambda x: x["min_score"], reverse=True)
