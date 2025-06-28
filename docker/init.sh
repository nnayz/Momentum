#!/bin/bash
ollama serve &

# Wait for Ollama to start
while ! curl -s http://localhost:11434/api/tags > /dev/null; do
    echo "Waiting for Ollama to start..."
    sleep 1
done

# Check if model exists, if not pull it
if ! ollama list | grep -q "gemma"; then
    echo "Pulling gemma model..."
    ollama pull gemma:2b
fi

# Keep container running
wait