from flask import Flask
import linkedin_to_skills
app = Flask(__name__)


@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return linkedin_to_skills.testFunc()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
