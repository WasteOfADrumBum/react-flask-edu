import os
import requests
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from psycopg2 import connect
from dotenv import load_dotenv

load_dotenv()

response = requests.get('https://react-flask.herokuapp.com')
print(response.text)

# Initialize app
app = Flask(__name__)

# Configure PostgreSQL database connection
db_url = os.environ['DATABASE_URL']
conn = connect(db_url)

# Initialize database
app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Test database connection
print('Connected to database')
print('Database:', conn.dsn)
print('Database version:', conn.server_version)

# User Model


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    middle_name = db.Column(db.String(50), nullable=True)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    status = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<User {self.full_name}>'

# Users API Routes


@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify({'users': [
        {
            'id': user.id,
            'full_name': user.full_name,
            'first_name': user.first_name,
            'middle_name': user.middle_name,
            'last_name': user.last_name,
            'email': user.email,
            'status': user.status
        } for user in users
    ]})


@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        full_name=data['full_name'],
        first_name=data['first_name'],
        middle_name=data['middle_name'],
        last_name=data['last_name'],
        email=data['email'],
        status=data['status']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})


@app.route('/api/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify({
        'id': user.id,
        'full_name': user.full_name,
        'first_name': user.first_name,
        'middle_name': user.middle_name,
        'last_name': user.last_name,
        'email': user.email,
        'status': user.status
    })


@app.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.get_json()
    user.full_name = data['full_name']
    user.first_name = data['first_name']
    user.middle_name = data['middle_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.status = data['status']
    db.session.commit()
    return jsonify({'message': 'User updated successfully!'})


@app.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully!'})

# Default route


@app.route('/')
def index():
    return 'Hello World'


if __name__ == '__main__':
    # get the port number from the PORT environment variable
    port = int(os.environ.get('PORT', 5000))
    # run the app on the assigned port
    app.run(host='0.0.0.0', port=port)
