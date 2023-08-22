#!/usr/bin/env python3

import os

from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Activity, Camper, Signup, db

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)
api = Api(app)
db.init_app(app)


# @app.route('/')
# def home():
#     return ''


class Campers(Resource):
    def get(self):
        campers = [camper.to_dict(rules=("-signups",)) for camper in Camper.query.all()]
        return make_response(campers, 200)

    def post(self):
        data = request.get_json()
        try:
            new_camper = Camper(**data)
        except ValueError as e:
            return make_response({"errors": ["validation errors"]}, 400)
            # return make_respsone({"errors": [error for error in e.args]}, 422)
        db.session.add(new_camper)
        db.session.commit()
        return make_response(new_camper.to_dict(rules=("-signups",)), 201)


api.add_resource(Campers, "/campers")


class CamperById(Resource):
    def get(self, id):
        camper = Camper.query.get(id)
        if not camper:
            return make_response({"error": "Camper not found"}, 404)
        return make_response(camper.to_dict(rules=("-signups.activity.signups",)), 200)

    def patch(self, id):
        camper = Camper.query.get(id)
        data = request.get_json()
        if not camper:
            return make_response({"error": "Camper not found"}, 404)
        try:
            for key, value in data.items():
                setattr(camper, key, value)
        except ValueError as e:
            return make_response({"errors": ["validation errors"]}, 400)
        db.session.commit()
        return make_response(camper.to_dict(rules=("-signups",)), 202)


api.add_resource(CamperById, "/campers/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
