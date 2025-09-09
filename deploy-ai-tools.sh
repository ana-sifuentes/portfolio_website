#!/bin/bash

# AI Tools Deployment Script
# Automates the deployment of AI tools to GitHub Pages

set -e  # Exit on any error

echo "🚀 AI Tools Deployment Script"
echo "=============================="

# Check if we're in the right directory
if [ ! -f "ai-tools.html" ]; then
    echo "❌ Error: ai-tools.html not found. Please run this script from the testing directory."
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Not a git repository. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin your-repo-url"
    exit 1
fi

# Check git status
echo "📊 Checking git status..."
if ! git status >/dev/null 2>&1; then
    echo "❌ Git error. Please check your git setup."
    exit 1
fi

# Show current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🌿 Current branch: $CURRENT_BRANCH"

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes."
    echo "📝 Files to be committed:"
    git status --porcelain
    echo ""

    read -p "🤔 Do you want to commit these changes? (y/N): " -n 1 -r
    echo ""

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📝 Adding files to git..."
        git add ai-tools.html
        git add components/menu.html
        git add AI-TOOLS-README.md

        # Check if there are any changes in ai-projects that should be committed
        if [ -d "ai-projects" ]; then
            echo "🔍 Checking for AI project updates..."
            git add ai-projects/huggingface-project/sentiment_analyzer.py
            git add ai-projects/huggingface-project/web_app.py
            git add ai-projects/requirements.txt
        fi

        echo "💬 Committing changes..."
        git commit -m "🤖 Deploy AI Tools: Add sentiment analysis web app

- Add interactive sentiment analysis interface (ai-tools.html)
- Update navigation menu with AI Tools link
- Include deployment documentation
- Support both live AI server and demo mode
- Mobile-responsive design matching site theme"

        echo "✅ Changes committed successfully!"
    else
        echo "⏸️  Deployment cancelled. Please commit your changes manually first."
        exit 0
    fi
else
    echo "✅ Working directory is clean"
fi

# Push to remote
echo ""
echo "🚀 Pushing to remote repository..."
git push origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to remote!"
else
    echo "❌ Failed to push. Please check your git remote configuration."
    exit 1
fi

# Check if GitHub Pages is likely configured
echo ""
echo "🌐 GitHub Pages Information:"
echo "──────────────────────────"

# Try to get the remote URL
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "unknown")
if [[ $REMOTE_URL == *"github.com"* ]]; then
    # Extract username and repo from GitHub URL
    if [[ $REMOTE_URL =~ github\.com[:/]([^/]+)/([^/]+)(\.git)?$ ]]; then
        USERNAME="${BASH_REMATCH[1]}"
        REPO="${BASH_REMATCH[2]}"
        REPO=${REPO%.git}  # Remove .git suffix if present

        PAGES_URL="https://${USERNAME}.github.io/${REPO}/ai-tools.html"

        echo "🔗 Your AI tools will be available at:"
        echo "   $PAGES_URL"
        echo ""
        echo "📋 To enable GitHub Pages:"
        echo "   1. Go to: https://github.com/${USERNAME}/${REPO}/settings/pages"
        echo "   2. Select 'Deploy from branch: main' (or your current branch)"
        echo "   3. Click Save"
        echo "   4. Wait a few minutes for deployment"
        echo ""
        echo "🎉 Then share this link with your friends!"
    else
        echo "⚠️  Could not parse GitHub URL: $REMOTE_URL"
    fi
else
    echo "ℹ️  Remote URL: $REMOTE_URL"
    echo "   This doesn't appear to be a GitHub repository."
    echo "   For GitHub Pages deployment, you'll need a GitHub repo."
fi

echo ""
echo "🎯 Quick Test Instructions:"
echo "─────────────────────────"
echo "1. 🌐 Test locally:"
echo "   python -m http.server 8000"
echo "   Then visit: http://localhost:8000/ai-tools.html"
echo ""
echo "2. 🤖 Test with AI server:"
echo "   cd ai-projects && source ai-env/bin/activate"
echo "   cd huggingface-project && python web_app.py"
echo "   Then visit: http://localhost:5001"
echo ""

# Create a quick local test option
read -p "🧪 Would you like to test the page locally now? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Starting local server..."
    echo "   Opening http://localhost:8000/ai-tools.html"
    echo "   Press Ctrl+C to stop the server"
    echo ""

    # Try to open in browser (macOS)
    if command -v open >/dev/null 2>&1; then
        sleep 2 && open "http://localhost:8000/ai-tools.html" &
    fi

    python -m http.server 8000
else
    echo "✅ Deployment complete!"
    echo ""
    echo "📚 Next steps:"
    echo "   • Enable GitHub Pages in your repo settings"
    echo "   • Test the live URL once Pages is active"
    echo "   • Share with friends and colleagues"
    echo "   • Consider deploying the Flask server for full AI functionality"
    echo ""
    echo "📖 For detailed instructions, see: AI-TOOLS-README.md"
fi

echo ""
echo "🎉 Thanks for using the AI Tools deployment script!"
echo "   Built with ❤️ for sharing AI with the world"
