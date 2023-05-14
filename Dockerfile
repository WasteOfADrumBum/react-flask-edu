FROM python:latest
COPY . /app
WORKDIR /app
RUN pip install Flask
EXPOSE 5000
CMD ["python", "pgserver.py"]
