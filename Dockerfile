# Dockerfile

# Base image
FROM python:3.9-slim-buster
# Working directory
WORKDIR /app
# Copy the rest of the project files
COPY . .
# Copy requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
# Command to start the server
CMD ["python", "/server/pgserver.py"]
