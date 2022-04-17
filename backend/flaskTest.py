from flask import Flask
import linkedinToSkills
import json
import getCompaniesBasedOnSkills
from flask import request
app = Flask(__name__)


@app.route('/getSkillsFromId', methods=['GET'])
def getSkills():
    return linkedinToSkills.idToSkills(request.args.get("id"))


@app.route('/getTopCompanies', methods=['POST'])
def getTopCompanies():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        jsonStr = request.json
        skills = list(jsonStr['skills'])
        return getCompaniesBasedOnSkills.topMatchingCompanies(skills)
    else:
        return 'Content-Type not supported!'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)