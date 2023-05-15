import graphene
from app.db.database import db_beers
from utils.search import filter_dicts


class Beer(graphene.ObjectType):
    name = graphene.String()
    type = graphene.String()
    alcohol_by_volume = graphene.Float()
    brewery_name = graphene.String()


class Query(graphene.ObjectType):
    beers =  graphene.List(Beer, search=graphene.String())

    def resolve_beers(self, info, search=None, **kwargs):
        if search:
            filtered_beers = filter_dicts(db_beers, search)
            return filtered_beers
        return db_beers


schema = graphene.Schema(query=Query)
