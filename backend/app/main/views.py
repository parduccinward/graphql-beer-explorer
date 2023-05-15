from app.main.schema import schema
from flask import Blueprint
from flask_graphql import GraphQLView

main = Blueprint('main', __name__)

main.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True)
)

@main.route('/')
def homepage():
    return "This is the homepage for the beer explorer"