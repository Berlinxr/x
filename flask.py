from flask import Flask
from threading import Thread

# Create a Flask web server
app = Flask('')

# Define the home route
@app.route('/')
def home():
    return "Bot is running!"

# Function to run the Flask server
def run():
    app.run(host='0.0.0.0', port=8080)

# Keep the server alive in a separate thread
def keep_alive():
    t = Thread(target=run)
    t.start()

# Start the web server
keep_alive()