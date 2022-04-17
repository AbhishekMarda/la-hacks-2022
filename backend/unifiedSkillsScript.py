import requests
import json
import pprint

API_KEY = '68f3f06c4beb2b8be603919fb987af9aa791606d17e29e0e6d51c5b1c4bf04ed'

PDL_URL = "https://api.peopledatalabs.com/v5/person/search"

H = {
    'Content-Type': "application/json",
    'X-api-key': API_KEY
}

a_file = open("list.txt")

company_dict = dict()

lines = a_file.readlines()
for line in lines:
    x = line.lower().strip('\n')
    SQL_QUERY = \
        f"""
    select unique skills from person
    where job_company_id = \'{x}\'
    and job_title = 'software engineer'
    """

    P = {
        'sql': SQL_QUERY,
        'size': 1000,
        'pretty': True
    }

    response = requests.get(
        PDL_URL,
        headers=H,
        params=P
    ).json()

    if response["status"] == 200:
        data = response['data']
        l = list()
        for record in data:
            l.extend(record['skills'])
        l_dict = dict(zip(l, [l.count(i) for i in l]))
        limit = min(20, len(l_dict))
        l_dict = dict(
            sorted(l_dict.items(), key=lambda item: item[1], reverse=True)[:20])
        company_dict[x] = l_dict
        print(f"successfully grabbed {len(data)} records from pdl")
        print(
            f"{response['total']} total pdl records exist matching this query")
    else:
        print(
            "NOTE. The carrier pigeons lost motivation in flight. See error and try again.")
        print("error:", response)

with open("skills.jsonl", "w") as out:
    out.write(json.dumps(company_dict, indent=4))
