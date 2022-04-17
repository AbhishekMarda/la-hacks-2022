#!/bin/python3
import requests
import csv
import json

API_KEY = "68f3f06c4beb2b8be603919fb987af9aa791606d17e29e0e6d51c5b1c4bf04ed"

COMPANY_STATS_FILENAME = "Companies.csv"

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
            for email in row['emails']:
                if email['type'] == 'current_professional':
                    pro_email = email['address']
                if email['type'] == 'personal':
                    per_email = email['address']
            company_website = row['job_company_website']
            id_num = row['id']
            info[id_num] = {"first_name":first_name, "last_name": last_name, "skills":skills, "professional_email":pro_email, "personal_email":per_email, "company_website":company_website}

        # print(f"successfully grabbed {len(data)} records from pdl")
        # print(f"{response['total']} total pdl records exist matching this query")
        return info
    else:
        print("NOTE. The carrier pigeons lost motivation in flight. See error and try again.")
        print("error:", response)
        return {}




