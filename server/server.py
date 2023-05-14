from flask import Flask

# Init app
app = Flask(__name__)

# Users API Route


@app.route('/api/users')
def get_users():
    return {
        'users': [
            {
                'id': 1,
                'full_name': 'John M Doe',
                'first_name': 'John',
                'middle_name': 'M',
                'last_name': 'Doe',
                'email': 'JohnDoe@email.com',
                'status': 'active'
            },
            {
                'id': 2,
                'full_name': 'Jane M Doe',
                'first_name': 'Jane',
                'middle_name': 'M',
                'last_name': 'Doe',
                'email': 'JaneDoe@email.com',
                'status': 'inactive'
            },
            {
                'id': 3,
                'full_name': 'Annabelle Noel Featherstone',
                'first_name': 'Annabelle',
                'middle_name': 'Noel',
                'last_name': 'Featherstone',
                'email': 'AnnaNoelFeatherstone@email.com',
                'status': 'active'
            },
        ]
    }

# set up a default route


@app.route('/')
def index():
    return 'Hello World'


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
