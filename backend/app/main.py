from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, World!"}


@app.post("/import-document")
def import_document(file: UploadFile = File(...)):
    
    return {"message": "Document imported successfully"}