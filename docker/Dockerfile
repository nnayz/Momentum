FROM ollama/ollama:latest

# Install curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy the init script
COPY init.sh /init.sh

# Make it executable
RUN chmod +x /init.sh

# Use init script as entrypoint
ENTRYPOINT ["/init.sh"]