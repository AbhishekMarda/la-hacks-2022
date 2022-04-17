from flask import Flask
import linkedinToSkills
import json
import getPeople
import getCompaniesBasedOnSkills
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/getSkillsFromId', methods=['GET'])
def getSkills():
    return linkedinToSkills.idToSkills(request.args.get("id"))


@app.route('/getTopCompanies', methods=['POST'])
def getTopCompanies():
        jsonStr = request.json
        skills = list(jsonStr['skills'])
        return getCompaniesBasedOnSkills.topMatchingCompanies(skills)


@app.route('/getPeopleInCompany', methods=['POST'])
def getPeopleInCompany():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        jsonStr = request.json
        companyID = str(jsonStr['companyID'])
        role = str(jsonStr['role'])
        subrole = str(jsonStr['subrole'])
        skills = list(jsonStr['skills'])
        return getPeople.getPeopleAtJob(companyID, role, subrole, skills)
    else:
        return 'Content-Type not supported!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=105)
