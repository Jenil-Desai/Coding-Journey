from mongoengine import Document,StringField,ListField,ReferenceField

from schema.Products import Products

class Category (Document):
    name = StringField(required=True,unique=True)
    products = ListField(ReferenceField(Products),default=list)
