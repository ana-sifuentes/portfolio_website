#!/usr/bin/env python3
"""
Simple Test Flask App for Debugging
A minimal Flask application to test if the basic web server works.
"""

from flask import Flask
import os

# Create Flask app
app = Flask(__name__)

@app.route('/')
def hello():
    """Simple hello world page."""
    return '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Test Flask App</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 50px; text-align: center; }
            h1 { color: #2c3e50; }
            p { color: #7f8c8d; }
            .success { color: #27ae60; font-weight: bold; }
        </style>
    </head>
    <body>
        <h1>🎉 Flask App is Working!</h1>
        <p class="success">Your web server is running successfully!</p>
        <p>This means your Flask installation is working correctly.</p>
        <p>You can now proceed to test the full AI application.</p>
        <hr>
        <p><small>Test Flask App - Port 5000</small></p>
    </body>
    </html>
    '''

@app.route('/test')
def test():
    """Test endpoint with JSON response."""
    return {
        'status': 'success',
        'message': 'Flask is working!',
        'python_version': os.sys.version
    }

if __name__ == '__main__':
    print("🚀 Starting Simple Test Flask App...")
    print("📍 Open your browser to: http://localhost:5001")
    print("📍 Test JSON endpoint at: http://localhost:5001/test")
    print("💡 Press Ctrl+C to stop the server")

    # Run the app
    app.run(
        host='127.0.0.1',  # Use localhost specifically
        port=5001,
        debug=True,
        use_reloader=False  # Disable reloader to avoid issues
    )
