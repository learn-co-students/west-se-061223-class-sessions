from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata, engine_options={"echo": True})


class Planet(db.Model, SerializerMixin):
    __tablename__ = 'planets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    distance_from_earth = db.Column(db.Integer)
    nearest_star = db.Column(db.String)

    # missions (has_many)
    missions = db.relationship("Mission", backref="planet", cascade="delete")
    # scientists (has_many, through missions)
    scientists = association_proxy("missions", "scientist")

    # Add serialization rules
    serialize_rules = ("-missions.planet", "-missions.scientist",)


class Scientist(db.Model, SerializerMixin):
    __tablename__ = 'scientists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    field_of_study = db.Column(db.String)

    # missions (has_many)
    missions = db.relationship("Mission", backref="scientist", cascade="delete")
    # planets (has_many through missions)
    planets = association_proxy("missions", "planet")

    # Add serialization rules
    serialize_rules = ("-missions", "-missions.scientist",)

    # Add validation
    @validates('name', 'field_of_study')
    def validate_name_field_of_study(self, key, value):
        if not value:
            raise ValueError("Name or field of study cannot be blank")
        return value


class Mission(db.Model, SerializerMixin):
    __tablename__ = 'missions'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    
    scientist_id = db.Column(db.Integer, db.ForeignKey('scientists.id'))
    planet_id = db.Column(db.Integer, db.ForeignKey('planets.id'))

    # scientist (belongs_to, assoc. method created by backref)
    # planet (belongs_to, assoc. method created by backref)

    # Add serialization rules

    # Add validation
    @validates("name")
    def validate_name(self, key, name):
        if not name:
            raise ValueError("Name cannot be blank")
        return name
    
    @validates("planet_id", "scientist_id")
    def validate_foreign_keys(self, key, value):
        if not value:
            raise ValueError("Must have foreign keys for scientist and planet")
        return value
    


# add any models you may need.
