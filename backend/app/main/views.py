from flask import Blueprint

main = Blueprint('main', __name__)

@main.route('/')
def homepage():
    return "This is the homepage for the beer explorer"