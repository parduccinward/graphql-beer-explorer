from flask import Flask
from .main.views import main

def create_app():
    app = Flask(__name__)
    app.register_blueprint(main)
    return app