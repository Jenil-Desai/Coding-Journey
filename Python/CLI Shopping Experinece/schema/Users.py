from mongoengine import Document,StringField,BooleanField,ListField,ReferenceField

from schema.Products import Products

class Users (Document):
    username = StringField(required=True,unique=True)
    password = StringField(required=True)
    isAdmin = BooleanField(default=False)
    cart = ListField(ReferenceField(Products),default=list)