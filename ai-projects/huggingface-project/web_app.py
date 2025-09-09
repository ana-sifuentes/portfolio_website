#!/usr/bin/env python3
"""
Flask Web Application for Sentiment Analysis
A simple web interface for the Hugging Face sentiment analyzer.
"""

from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
import os
import json
from datetime import datetime
from sentiment_analyzer import SentimentAnalyzer
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'your-secret-key-change-this')

# Global analyzer instance
analyzer = None

def init_analyzer():
    """Initialize the sentiment analyzer."""
    global analyzer
    try:
        if analyzer is None:
            logger.info("Initializing sentiment analyzer...")
            analyzer = SentimentAnalyzer()
            logger.info("Analyzer initialized successfully!")
    except Exception as e:
        logger.error(f"Failed to initialize analyzer: {str(e)}")
        analyzer = None

@app.route('/')
def index():
    """Main page with sentiment analysis form."""
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    """Analyze sentiment of submitted text."""
    if analyzer is None:
        return jsonify({
            'error': 'Sentiment analyzer not initialized. Please try again later.'
        }), 500

    try:
        # Get text from form
        text = request.form.get('text', '').strip()

        if not text:
            return jsonify({'error': 'Please provide some text to analyze'}), 400

        # Analyze sentiment
        result = analyzer.analyze_text(text)

        if 'error' in result:
            return jsonify({'error': result['error']}), 400

        # Add timestamp
        result['timestamp'] = datetime.now().isoformat()

        return jsonify(result)

    except Exception as e:
        logger.error(f"Error in analysis: {str(e)}")
        return jsonify({'error': 'An error occurred during analysis'}), 500

@app.route('/api/analyze', methods=['POST'])
def api_analyze():
    """API endpoint for sentiment analysis."""
    if analyzer is None:
        return jsonify({
            'error': 'Sentiment analyzer not initialized'
        }), 500

    try:
        # Get JSON data
        data = request.get_json()

        if not data or 'text' not in data:
            return jsonify({'error': 'Missing "text" field in request'}), 400

        text = data['text'].strip()

        if not text:
            return jsonify({'error': 'Text field cannot be empty'}), 400

        # Analyze sentiment
        result = analyzer.analyze_text(text)

        if 'error' in result:
            return jsonify({'error': result['error']}), 400

        return jsonify(result)

    except Exception as e:
        logger.error(f"Error in API analysis: {str(e)}")
        return jsonify({'error': 'An error occurred during analysis'}), 500

@app.route('/api/batch', methods=['POST'])
def api_batch_analyze():
    """API endpoint for batch sentiment analysis."""
    if analyzer is None:
        return jsonify({
            'error': 'Sentiment analyzer not initialized'
        }), 500

    try:
        # Get JSON data
        data = request.get_json()

        if not data or 'texts' not in data:
            return jsonify({'error': 'Missing "texts" field in request'}), 400

        texts = data['texts']

        if not isinstance(texts, list):
            return jsonify({'error': 'texts field must be an array'}), 400

        if len(texts) == 0:
            return jsonify({'error': 'texts array cannot be empty'}), 400

        if len(texts) > 100:
            return jsonify({'error': 'Maximum 100 texts allowed per request'}), 400

        # Analyze batch
        results = analyzer.analyze_batch(texts)

        return jsonify({
            'results': results,
            'count': len(results),
            'timestamp': datetime.now().isoformat()
        })

    except Exception as e:
        logger.error(f"Error in batch API analysis: {str(e)}")
        return jsonify({'error': 'An error occurred during batch analysis'}), 500

@app.route('/model-info')
def model_info():
    """Get information about the loaded model."""
    if analyzer is None:
        return jsonify({
            'error': 'Sentiment analyzer not initialized'
        }), 500

    try:
        info = analyzer.get_model_info()
        return jsonify(info)
    except Exception as e:
        logger.error(f"Error getting model info: {str(e)}")
        return jsonify({'error': 'Could not retrieve model information'}), 500

@app.route('/health')
def health_check():
    """Health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'analyzer_loaded': analyzer is not None,
        'timestamp': datetime.now().isoformat()
    })

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors."""
    return render_template('error.html',
                         error_code=404,
                         error_message="Page not found"), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors."""
    return render_template('error.html',
                         error_code=500,
                         error_message="Internal server error"), 500

# Create templates directory and basic templates
def create_templates():
    """Create template files if they don't exist."""
    templates_dir = os.path.join(os.path.dirname(__file__), 'templates')
    static_dir = os.path.join(os.path.dirname(__file__), 'static')

    # Create directories
    os.makedirs(templates_dir, exist_ok=True)
    os.makedirs(static_dir, exist_ok=True)

    # Create index.html template
    index_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Sentiment Analyzer</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .container { background: #f9f9f9; padding: 30px; border-radius: 10px; }
        h1 { color: #333; text-align: center; }
        textarea { width: 100%; height: 150px; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        button { background: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: #0056b3; }
        .result { margin-top: 20px; padding: 20px; background: white; border-radius: 5px; border: 1px solid #ddd; }
        .sentiment { font-size: 1.2em; font-weight: bold; }
        .positive { color: #28a745; }
        .negative { color: #dc3545; }
        .neutral { color: #6c757d; }
        .loading { display: none; color: #007bff; }
        .error { color: #dc3545; }
        .scores { margin-top: 10px; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤗 AI Sentiment Analyzer</h1>
        <p>Enter some text below to analyze its sentiment using Hugging Face transformers:</p>

        <form id="sentimentForm">
            <textarea name="text" id="textInput" placeholder="Type your text here... (e.g., 'I love this product!' or 'This is terrible')" required></textarea>
            <br><br>
            <button type="submit">Analyze Sentiment</button>
            <div class="loading" id="loading">Analyzing...</div>
        </form>

        <div id="result" class="result" style="display: none;">
            <h3>Results:</h3>
            <div id="resultContent"></div>
        </div>

        <div style="margin-top: 30px; font-size: 0.9em; color: #666;">
            <h4>API Endpoints:</h4>
            <ul>
                <li><strong>POST /api/analyze</strong> - Analyze single text: <code>{"text": "your text"}</code></li>
                <li><strong>POST /api/batch</strong> - Analyze multiple texts: <code>{"texts": ["text1", "text2"]}</code></li>
                <li><strong>GET /model-info</strong> - Get model information</li>
                <li><strong>GET /health</strong> - Health check</li>
            </ul>
        </div>
    </div>

    <script>
        document.getElementById('sentimentForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const textInput = document.getElementById('textInput');
            const loading = document.getElementById('loading');
            const result = document.getElementById('result');
            const resultContent = document.getElementById('resultContent');

            if (!textInput.value.trim()) {
                alert('Please enter some text to analyze');
                return;
            }

            // Show loading
            loading.style.display = 'block';
            result.style.display = 'none';

            // Send request
            fetch('/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'text=' + encodeURIComponent(textInput.value)
            })
            .then(response => response.json())
            .then(data => {
                loading.style.display = 'none';

                if (data.error) {
                    resultContent.innerHTML = '<div class="error">Error: ' + data.error + '</div>';
                } else {
                    const sentimentClass = data.dominant_sentiment.toLowerCase();
                    const confidence = Math.round(data.confidence * 100);

                    let scoresHtml = '<div class="scores"><strong>All scores:</strong><br>';
                    for (const [label, score] of Object.entries(data.all_scores)) {
                        scoresHtml += label + ': ' + Math.round(score * 100) + '% ';
                    }
                    scoresHtml += '</div>';

                    resultContent.innerHTML =
                        '<div class="sentiment ' + sentimentClass + '">Sentiment: ' + data.dominant_sentiment + '</div>' +
                        '<div>Confidence: ' + confidence + '%</div>' +
                        scoresHtml +
                        '<div style="margin-top: 10px; font-size: 0.9em; color: #666;">Text: "' + data.text + '"</div>';
                }

                result.style.display = 'block';
            })
            .catch(error => {
                loading.style.display = 'none';
                resultContent.innerHTML = '<div class="error">Error: ' + error.message + '</div>';
                result.style.display = 'block';
            });
        });
    </script>
</body>
</html>'''

    # Write index.html
    with open(os.path.join(templates_dir, 'index.html'), 'w') as f:
        f.write(index_html)

    # Create error.html template
    error_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error {{ error_code }}</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #dc3545; }
        .back-link { color: #007bff; text-decoration: none; }
    </style>
</head>
<body>
    <h1>Error {{ error_code }}</h1>
    <p>{{ error_message }}</p>
    <a href="/" class="back-link">← Back to Home</a>
</body>
</html>'''

    with open(os.path.join(templates_dir, 'error.html'), 'w') as f:
        f.write(error_html)

if __name__ == '__main__':
    # Create templates if they don't exist
    create_templates()

    # Initialize the analyzer
    init_analyzer()

    # Get port from environment or use default
    port = int(os.environ.get('PORT', 5001))

    # Run the app
    print(f"🚀 Starting Sentiment Analysis Web App on http://localhost:{port}")
    print("📊 Initializing AI model... (this may take a moment)")

    app.run(
        host='0.0.0.0',
        port=port,
        debug=os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    )
