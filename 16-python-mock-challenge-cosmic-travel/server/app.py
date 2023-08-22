#!/usr/bin/env python3

import os

from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import Mission, Planet, Scientist, db

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

api = Api(app)

db.init_app(app)


# @app.route('/')
# def home():
#     return ''

class Scientists(Resource):
    def get(self):
        scientists = [scientist.to_dict(rules=("-missions",)) for scientist in Scientist.query.all()]
        return make_response(scientists, 200)
    
    def post(self):
        req_data = request.get_json()
        try:
            new_sci = Scientist(**req_data)
        except:
            return make_response({ "errors": ["validation errors"]}, 400)
        db.session.add(new_sci)
        db.session.commit()
        return make_response(new_sci.to_dict(rules=("-missions",)), 201)

class ScientistById(Resource):
    def get(self, id):
        scientist = Scientist.query.get_or_404(id, description="Scientist not found").to_dict(rules=("-missions.planet.missions",))
        # if not scientist:
        #     return make_response({ "error": "Scientist not found"}, 404)
        # import ipdb; ipdb.set_trace()
        return make_response(scientist, 200)
    
    def delete(self, id):
        scientist = Scientist.query.get(id)
        if not scientist:
            return make_response({"error": "Scientist not found"}, 404)
        db.session.delete(scientist)
        db.session.commit()
        return ("", 204)
    
    def patch(self, id):
        req_data = request.get_json()
        scientist = Scientist.query.get(id)
        if not scientist:
            return make_response({"error": "Scientist not found"}, 404)
        try:
            for key, value in req_data.items():
                setattr(scientist, key, value)
        except:
            return make_response({ "errors": ["validation errors"]}, 400)
        db.session.commit()
        return make_response(scientist.to_dict(rules=("-missions",)), 202)
        
class Planets(Resource):
    def get(self):
        planets = [p.to_dict(rules=("-missions",)) for p in Planet.query.all()]
        return make_response(planets, 200)
    
class Missions(Resource):
    def post(self):
        req_json = request.get_json()
        try:
            new_mission = Mission(**req_json)
        except ValueError as e:
            return make_response({ "errors": ['validation errors']}, 400)
        db.session.add(new_mission)
        db.session.commit()
        return make_response(new_mission.to_dict(rules=("-planet.missions", "-scientist.missions",)), 201)
        



api.add_resource(Scientists, '/scientists')
api.add_resource(ScientistById, '/scientists/<int:id>')
api.add_resource(Planets, '/planets')
api.add_resource(Missions, '/missions')



if __name__ == '__main__':
    app.run(port=5555, debug=True)
