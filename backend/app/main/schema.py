import graphene
from db.database import beers


class Beer(graphene.ObjectType):
    name = graphene.String()
    type = graphene.String()
    alcohol_by_volume = graphene.Float()
    brewery_name = graphene.String()


class Query(graphene.ObjectType):
    beer = graphene.Field(Beer, id=graphene.Int())

    def get_beer_by_name(self, info, name):
        beer = list(filter(lambda beer: beer["name"].lower() == name.lower(), beers))
        return beer
