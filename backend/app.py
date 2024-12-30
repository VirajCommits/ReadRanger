from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='static')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(app.static_folder, filename)
if __name__ == '__main__':
    app.run(debug=True)  # Set debug=True for development