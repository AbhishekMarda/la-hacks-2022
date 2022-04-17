import requests
import json
import pprint

API_KEY = '68f3f06c4beb2b8be603919fb987af9aa791606d17e29e0e6d51c5b1c4bf04ed'

pdl_url = "https://api.peopledatalabs.com/v5/person/enrich"

params = {
    "api_key": API_KEY,
    "profile": ["https://www.linkedin.com/in/sanchit1591/"],
    "min_likelihood": 3
}


def testFunc():
    json_response = requests.get(pdl_url,  params=params).json()

    if json_response["status"] == 200:
        record = json_response['data']

        return json.dumps(record['skills'], indent=4)
    else:
        return "Error:" + str(json_response["status"])
