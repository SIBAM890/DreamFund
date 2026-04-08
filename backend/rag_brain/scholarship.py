def verify_scholarship(scheme_name: str, check_db: list):
    # Represents matching against verified schemes dataset vectors
    lower_scheme = scheme_name.lower()
    for s in check_db:
        if s.lower() in lower_scheme:
            return True
        if lower_scheme in s.lower():
            return True
            
    return False
