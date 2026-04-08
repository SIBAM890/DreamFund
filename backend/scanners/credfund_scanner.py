def generate_credpath_score(profile: dict):
    # A smart logic to create an alternative credit score without CIBIL
    base_score = 400
    
    # Academics (Max 200 points)
    avg_marks = (float(profile.get('tenth_marks', 0)) + float(profile.get('twelfth_marks', 0))) / 2.0
    base_score += int(avg_marks * 2) 
    
    # Institution Tier (Max 150 points)
    tier = int(profile.get('tier', 3))
    if tier == 1:
        base_score += 150
    elif tier == 2:
        base_score += 100
    else:
        base_score += 50
        
    # Extracurriculars / Internships (Max 100 points)
    extras = profile.get('extracurriculars', [])
    base_score += min(len(extras) * 25, 100)
    
    return min(base_score, 850) # Cap at 850
