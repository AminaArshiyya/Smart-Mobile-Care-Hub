from flask import Flask, send_from_directory
import os

app = Flask(__name__)

frontend_folder = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../frontend")
)

@app.route("/")
def home():
    return send_from_directory(frontend_folder, "login.html")

@app.route("/<path:filename>")
def files(filename):
    return send_from_directory(frontend_folder, filename)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)