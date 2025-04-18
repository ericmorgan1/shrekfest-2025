import os
import logging
from flask import Flask, render_template

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask application
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET")

# Define routes
@app.route('/')
def index():
    """Render the main page of the Shrekfest website."""
    return render_template('index.html')

# For development purposes
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
