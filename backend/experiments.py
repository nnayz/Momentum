from langchain_ollama import OllamaLLM

llm = OllamaLLM(
    model="gemma:2b",
    base_url="http://localhost:11434"
)

print(llm.invoke("Hello, how are you?"))