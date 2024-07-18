from mongoengine import Document,StringField,FloatField

class Products (Document):
    name = StringField(required=True,unique=True)
    price = FloatField(required=True)