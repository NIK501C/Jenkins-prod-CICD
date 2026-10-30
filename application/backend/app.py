from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app, resources={
    r"/*": {"origins": "http://localhost:8000"}
})

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Welcome to Jenkins CI/CD Project",
        "service": "backend",
        "version": "1.0.0"
    })

@app.route("/health", methods=["GET"])
def health():
    return jsonify({
        "status": "healthy",
        "service": "backend",
    }), 200

@app.route("/api/info", methods=["GET"])
def info():
    return jsonify({
        "application": "Prod CI/CD demo",
        "technology": "Python Flask",
        "environment": "Dev"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
