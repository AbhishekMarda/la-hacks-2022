#!/bin/python3
import requests
import csv
import json

API_KEY = ""

def getPeopleAtJob(company, role, subrole, skills):


    PDL_URL = "https://api.peopledatalabs.com/v5/person/search"

    H = {
    'Content-Type': "application/json",
    'X-api-key': API_KEY
    }

    SQL_QUERY = \
    f"""
    SELECT * FROM person
    WHERE job_company_id='{company}'
    AND job_title_role='{role}'
    AND job_title_sub_role='{subrole}';
    """
    # print (SQL_QUERY)
    P = {
    'sql': SQL_QUERY,
    'size': 15,
    'pretty': True
    }

    response = requests.get(
        PDL_URL,
        headers=H,
        params=P
    ).json()

    if response["status"] == 200:
        data = response['data']
        info = {}
        for row in data:
            first_name = row['first_name']
            last_name = row['last_name']
            skills = row['skills']
            emails = row['emails']
            id_num = row['id']
            info[id_num] = [first_name, last_name, skills, emails, id_num]

        # print(f"successfully grabbed {len(data)} records from pdl")
        # print(f"{response['total']} total pdl records exist matching this query")
        return json.dumps(info)
    else:
        print("NOTE. The carrier pigeons lost motivation in flight. See error and try again.")
        print("error:", response)
        return "{}"

ret = getPeopleAtJob("microsoft", "engineering", "software", "")
print(ret)


