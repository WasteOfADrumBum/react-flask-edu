FROM python:latest
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
COPY pgserver.py /server/pgserver.py
EXPOSE 5000
CMD ["gunicorn", "-b", "0.0.0.0:5000", "pgserver:app"]
