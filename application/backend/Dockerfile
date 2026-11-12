# Use a lighweight python base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy required dependencies
COPY requirements.txt .

# Install pythondependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application source code
COPY app.py .

# Expose the Flask Port

EXPOSE 5000

# Run the application
CMD ["python", "app.py"]