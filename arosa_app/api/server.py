#!/usr/local/bin/python3
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from predictions import get_predictions;

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/forecast/<int:year>/<int:month>', methods=['GET'])
def get_forecast(year, month):
    return jsonify(get_predictions(year, month));

if __name__ == '__main__':
     app.run()
