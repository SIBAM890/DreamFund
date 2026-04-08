import os
import pandas as pd
import glob
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# Initialize embedding model (using a lightweight one for fast RAG)
embed_model = SentenceTransformer('all-MiniLM-L6-v2')

class RAGBrain:
    def __init__(self):
        self.knowledge_base = []
        self.index = None
        self.load_data()

    def load_data(self):
        data_dir = "data"
        
        # 1. Load Loans (CSV)
        loan_files = glob.glob(os.path.join(data_dir, "study loan", "*.csv"))
        for f in loan_files:
            df = pd.read_csv(f)
            for _, row in df.iterrows():
                text = f"Category: Loan, Provider: {row.get('Provider')}, Scheme: {row.get('Scheme_Name')}, Info: {row.get('Key_Features')}, Max Amount: {row.get('Max_Loan_Amount')}"
                self.knowledge_base.append({"text": text, "metadata": row.to_dict(), "category": "Loan"})

        # 2. Load Scholarships (Excel)
        scholarship_files = glob.glob(os.path.join(data_dir, "scholarship", "*.xlsx"))
        for f in scholarship_files:
            try:
                df = pd.read_excel(f)
                # Scholarships usually have many columns, we create a summary string
                for _, row in df.iterrows():
                    # Safely get scheme name (columns might vary in large datasets)
                    scheme = row.iloc[0] if len(row) > 0 else "Unknown Scholarship"
                    summary = ", ".join([f"{k}: {v}" for k, v in row.items() if pd.notna(v)])
                    text = f"Category: Scholarship, Scheme: {scheme}, Details: {summary[:500]}" # Truncate for efficiency
                    self.knowledge_base.append({"text": text, "metadata": row.to_dict(), "category": "Scholarship"})
            except Exception as e:
                print(f"Error loading {f}: {e}")

        # 3. Create Vector Index
        if self.knowledge_base:
            texts = [item["text"] for item in self.knowledge_base]
            embeddings = embed_model.encode(texts)
            dimension = embeddings.shape[1]
            self.index = faiss.IndexFlatL2(dimension)
            self.index.add(np.array(embeddings).astype('float32'))
            print(f"RAG Brain indexed {len(self.knowledge_base)} items.")

    def search(self, query, top_k=5):
        if not self.index:
            return []
        
        query_vec = embed_model.encode([query])
        distances, indices = self.index.search(np.array(query_vec).astype('float32'), top_k)
        
        results = []
        for i in indices[0]:
            if i != -1:
                results.append(self.knowledge_base[i])
        return results

# Singleton instance
brain = RAGBrain()
