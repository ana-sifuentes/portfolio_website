#!/usr/bin/env python3
"""
Setup script for AI Applications Development Environment
Automates the setup of virtual environment and dependencies.
"""

import os
import sys
import subprocess
import platform
from pathlib import Path

def run_command(command, check=True, shell=False):
    """Run a command and return the result."""
    try:
        if shell or platform.system() == "Windows":
            result = subprocess.run(command, shell=True, check=check,
                                  capture_output=True, text=True)
        else:
            result = subprocess.run(command.split(), check=check,
                                  capture_output=True, text=True)
        return result
    except subprocess.CalledProcessError as e:
        print(f"❌ Error running command: {command}")
        print(f"Error output: {e.stderr}")
        return None

def check_python_version():
    """Check if Python version is compatible."""
    version = sys.version_info
    if version.major < 3 or (version.major == 3 and version.minor < 8):
        print("❌ Python 3.8 or higher is required.")
        print(f"Current version: {version.major}.{version.minor}.{version.micro}")
        return False

    print(f"✅ Python version: {version.major}.{version.minor}.{version.micro}")
    return True

def create_virtual_environment():
    """Create a virtual environment."""
    venv_path = Path("ai-env")

    if venv_path.exists():
        print("📁 Virtual environment 'ai-env' already exists.")
        return True

    print("🔧 Creating virtual environment...")
    result = run_command(f"{sys.executable} -m venv ai-env")

    if result and result.returncode == 0:
        print("✅ Virtual environment created successfully!")
        return True
    else:
        print("❌ Failed to create virtual environment.")
        return False

def get_activation_command():
    """Get the command to activate the virtual environment."""
    if platform.system() == "Windows":
        return "ai-env\\Scripts\\activate"
    else:
        return "source ai-env/bin/activate"

def get_python_executable():
    """Get the Python executable path for the virtual environment."""
    if platform.system() == "Windows":
        return "ai-env\\Scripts\\python.exe"
    else:
        return "ai-env/bin/python"

def install_dependencies():
    """Install Python dependencies."""
    print("📦 Installing dependencies...")

    python_exe = get_python_executable()

    # Upgrade pip first
    print("   Upgrading pip...")
    result = run_command(f"{python_exe} -m pip install --upgrade pip")
    if not result or result.returncode != 0:
        print("⚠️  Warning: Failed to upgrade pip, continuing anyway...")

    # Install requirements
    print("   Installing packages from requirements.txt...")
    result = run_command(f"{python_exe} -m pip install -r requirements.txt")

    if result and result.returncode == 0:
        print("✅ Dependencies installed successfully!")
        return True
    else:
        print("❌ Failed to install dependencies.")
        print("You can try installing manually with:")
        print(f"   {get_activation_command()}")
        print(f"   pip install -r requirements.txt")
        return False

def create_env_file():
    """Create .env file from template if it doesn't exist."""
    env_file = Path(".env")
    env_example = Path(".env.example")

    if env_file.exists():
        print("📄 .env file already exists.")
        return True

    if env_example.exists():
        print("📄 Creating .env file from template...")
        try:
            env_example.rename(env_file)
            print("✅ .env file created! Please edit it with your API keys.")
            return True
        except Exception as e:
            print(f"❌ Failed to create .env file: {e}")
            return False
    else:
        print("⚠️  .env.example not found, skipping .env creation.")
        return True

def check_gpu_support():
    """Check for GPU support."""
    try:
        import torch
        if torch.cuda.is_available():
            print(f"🚀 CUDA GPU detected: {torch.cuda.get_device_name(0)}")
            print(f"   CUDA version: {torch.version.cuda}")
            return True
        else:
            print("💻 No GPU detected, using CPU.")
            return False
    except ImportError:
        print("⚠️  PyTorch not installed yet, GPU check will happen after installation.")
        return False

def display_next_steps():
    """Display next steps for the user."""
    activation_cmd = get_activation_command()

    print("\n" + "="*60)
    print("🎉 SETUP COMPLETE!")
    print("="*60)
    print("\n📋 Next steps:")
    print(f"1. Activate your virtual environment:")
    print(f"   {activation_cmd}")
    print()
    print("2. Edit your .env file with your API keys:")
    print("   - Get HuggingFace token from: https://huggingface.co/settings/tokens")
    print("   - Add other API keys as needed")
    print()
    print("3. Test the setup:")
    print("   cd huggingface-project")
    print("   python sentiment_analyzer.py")
    print()
    print("4. Start the web application:")
    print("   python web_app.py")
    print("   Then visit: http://localhost:5000")
    print()
    print("5. Explore the project:")
    print("   - Check out notebooks/ for Jupyter examples")
    print("   - Look at web-apps/ for more web templates")
    print("   - Read README.md for detailed documentation")
    print("\n🚀 Happy coding with AI!")

def main():
    """Main setup function."""
    print("🤗 AI Applications Development Environment Setup")
    print("=" * 50)

    # Check Python version
    if not check_python_version():
        sys.exit(1)

    # Create virtual environment
    if not create_virtual_environment():
        sys.exit(1)

    # Install dependencies
    if not install_dependencies():
        print("\n⚠️  Setup completed with warnings.")
        print("Please install dependencies manually and check for errors.")

    # Create .env file
    create_env_file()

    # Check GPU support (after potential PyTorch installation)
    try:
        sys.path.insert(0, get_python_executable().replace(os.path.basename(get_python_executable()), ''))
        check_gpu_support()
    except:
        pass

    # Display next steps
    display_next_steps()

if __name__ == "__main__":
    main()
