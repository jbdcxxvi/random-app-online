from flask import Flask

app = Flask(__name__)

@app.route('/api/data')
def get_data():
    return {'message': 'Hello from Flask API'}

if __name__ == '__main__':
    app.run(debug=True)
