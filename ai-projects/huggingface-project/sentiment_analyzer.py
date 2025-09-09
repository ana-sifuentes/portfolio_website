#!/usr/bin/env python3
"""
Sentiment Analysis Application using Hugging Face Transformers
A simple example showing how to use pre-trained models for text classification.
"""

import os
from typing import List, Dict, Optional
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SentimentAnalyzer:
    """A sentiment analysis class using Hugging Face transformers."""

    def __init__(self, model_name: str = "cardiffnlp/twitter-roberta-base-sentiment-latest"):
        """
        Initialize the sentiment analyzer.

        Args:
            model_name (str): Name of the pre-trained model to use
        """
        self.model_name = model_name
        self.tokenizer = None
        self.model = None
        self.pipeline = None
        self._load_model()

    def _load_model(self):
        """Load the tokenizer and model."""
        try:
            logger.info(f"Loading model: {self.model_name}")

            # Load tokenizer and model
            self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
            self.model = AutoModelForSequenceClassification.from_pretrained(self.model_name)

            # Create pipeline for easier inference
            self.pipeline = pipeline(
                "sentiment-analysis",
                model=self.model,
                tokenizer=self.tokenizer,
                return_all_scores=True
            )

            logger.info("Model loaded successfully!")

        except Exception as e:
            logger.error(f"Error loading model: {str(e)}")
            raise

    def analyze_text(self, text: str) -> Dict:
        """
        Analyze sentiment of a single text.

        Args:
            text (str): Text to analyze

        Returns:
            Dict: Sentiment analysis results
        """
        if not text or not text.strip():
            return {"error": "Empty text provided"}

        try:
            # Get prediction
            result = self.pipeline(text)

            # Process results
            scores = {item['label']: round(item['score'], 4) for item in result[0]}

            # Find the dominant sentiment
            dominant_sentiment = max(scores, key=scores.get)
            confidence = scores[dominant_sentiment]

            return {
                "text": text,
                "dominant_sentiment": dominant_sentiment,
                "confidence": confidence,
                "all_scores": scores
            }

        except Exception as e:
            logger.error(f"Error analyzing text: {str(e)}")
            return {"error": str(e)}

    def analyze_batch(self, texts: List[str]) -> List[Dict]:
        """
        Analyze sentiment of multiple texts.

        Args:
            texts (List[str]): List of texts to analyze

        Returns:
            List[Dict]: List of sentiment analysis results
        """
        results = []
        for text in texts:
            result = self.analyze_text(text)
            results.append(result)
        return results

    def get_model_info(self) -> Dict:
        """Get information about the loaded model."""
        return {
            "model_name": self.model_name,
            "tokenizer_vocab_size": len(self.tokenizer.vocab) if self.tokenizer else 0,
            "model_parameters": sum(p.numel() for p in self.model.parameters()) if self.model else 0,
            "device": "cuda" if torch.cuda.is_available() else "cpu"
        }

def main():
    """Main function to demonstrate the sentiment analyzer."""

    # Example texts to analyze
    sample_texts = [
        "I love this product! It's amazing!",
        "This is the worst thing I've ever bought.",
        "It's okay, nothing special but not bad either.",
        "Absolutely fantastic! Highly recommend!",
        "I hate waiting in long lines.",
        "The weather is nice today.",
        "I'm feeling great about this new opportunity!"
    ]

    try:
        # Initialize analyzer
        print("🤗 Initializing Sentiment Analyzer...")
        analyzer = SentimentAnalyzer()

        # Display model info
        model_info = analyzer.get_model_info()
        print(f"\n📊 Model Information:")
        print(f"   Model: {model_info['model_name']}")
        print(f"   Parameters: {model_info['model_parameters']:,}")
        print(f"   Device: {model_info['device']}")

        print(f"\n🔍 Analyzing sample texts...\n")
        print("-" * 80)

        # Analyze each text
        for i, text in enumerate(sample_texts, 1):
            result = analyzer.analyze_text(text)

            if "error" in result:
                print(f"{i}. Error: {result['error']}")
                continue

            print(f"{i}. Text: \"{result['text']}\"")
            print(f"   Sentiment: {result['dominant_sentiment']} "
                  f"(Confidence: {result['confidence']:.2%})")

            # Show all scores
            scores_str = ", ".join([f"{label}: {score:.3f}"
                                  for label, score in result['all_scores'].items()])
            print(f"   All scores: {scores_str}")
            print("-" * 80)

        # Batch analysis example
        print(f"\n📦 Batch analysis results:")
        batch_results = analyzer.analyze_batch(sample_texts[:3])
        for i, result in enumerate(batch_results, 1):
            if "error" not in result:
                print(f"{i}. \"{result['text'][:50]}...\" → {result['dominant_sentiment']}")

    except Exception as e:
        print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    main()
