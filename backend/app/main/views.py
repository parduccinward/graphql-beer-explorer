from flask import Blueprint
from flask_cors import CORS
from flask_graphql import GraphQLView
from app.main.schema import schema
import os

main = Blueprint("main", __name__)
CORS(main, resources={r"/graphql": {"origins": os.getenv("CORS_ORIGIN")}})

main.add_url_rule(
    "/graphql", view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True)
)


@main.route("/")
def homepage():
    return "This is the homepage for the beer explorer"
