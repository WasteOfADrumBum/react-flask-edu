
# DockerfileCopy code# Base image
FROM python:latest

# Working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project files
COPY . .

# Expose the server port
EXPOSE 5000

# Command to start the server
#CMD ["python", "server/pgserver.py"]
CMD ["gunicorn", "-b", "0.0.0.0:5000", "pgserver:app"]
