import time
import csv
import requests
import json
import pprint

API_KEY = '68f3f06c4beb2b8be603919fb987af9aa791606d17e29e0e6d51c5b1c4bf04ed'

PDL_URL = "https://api.peopledatalabs.com/v5/company/search"

H = {
    'Content-Type': "application/json",
    'X-api-key': API_KEY
}

companiesDict = {'adobe': ['adobe', 'adobe.com'], 'amazon': ['amazon', 'amazon.com'], 'any-service-company': ['any service company', None], 'aut-nomo_23': ['autónomo', 'josevillalobos.es'], 'cisco': ['cisco', 'cisco.com'], 'doordash': ['doordash', 'doordash.com'], 'ebay': ['ebay', 'ebayinc.com'], 'epam-systems': ['epam systems', 'epam.com'], 'facebook': ['facebook', 'facebook.com'], 'fiverr-com': [
    'fiverr (fiverr.com)', 'fiverr.com'], 'flipkart': ['flipkart', 'flipkart.com'], 'google': ['google', 'google.com'], 'grabapp': ['grab', 'grab.com'], 'lenovo': ['lenovo', 'lenovo.com'], 'linkedin': ['linkedin', 'linkedin.com'], 'mercadolibre': ['mercadolibre.com', 'mercadolibre.com'], 'microsoft': ['microsoft', 'microsoft.com'], 'netsuite': ['netsuite', 'netsuite.com'], 'no-company_8': ['no-company', 'melihelibol.com'], 'nvidia': ['nvidia', 'nvidia.com'], 'paypal': ['paypal', 'paypal.com'], 'red-hat': ['red hat', 'redhat.com'], 'salesforce': ['salesforce', 'salesforce.com'], 'sap': ['sap', 'sap.com'], 'sas': ['sas', 'sas.com'], 'shopee': ['shopee', 'shopee.sg'], 'tencentglobal': ['tencent', 'tencent.com'], 'uber-com': ['uber', 'uber.com'], 'upwork': ['upwork', 'upwork.com'], 'virtusa': ['virtusa', 'virtusa.com'], 'vmware': ['vmware', 'vmware.com'], 'yahoo': ['yahoo', 'yahoo.com'], 'youtube': ['youtube', 'youtube.com']}
COMPANIES = 10


def intersection(lst1, lst2):
    lst3 = [value for value in lst1 if value in lst2]
    return lst3


def difference(li1, li2):
    return list(set(li1) - set(li2))


def csvToObjects():
    compantToSkillDict = dict()
    with open('Companies.csv', 'r') as csv_file:
        reader = csv.reader(csv_file)

        for row in reader:
            if not row[0] in compantToSkillDict:
                compantToSkillDict[row[0]] = list()
                compantToSkillDict[row[0]].append(row[1])
            else:
                compantToSkillDict[row[0]].append(row[1])
    return compantToSkillDict


# A function that compares skills and return a json
# with company name/id, matched skills, other top skills, %Match
def topMatchingCompanies(skills):
    companyToSkillDict = csvToObjects()
    i = 0
    indexToCommonSkills = list()
    companyDict = dict()
    for key in companyToSkillDict:
        companySkills = companyToSkillDict[key]
        jsonDict = dict()
        jsonDict['matchedSkills'] = intersection(companySkills, skills)
        jsonDict['missingSkills'] = difference(companySkills, skills)
        jsonDict['name'] = companiesDict[key][0]
        jsonDict['website'] = companiesDict[key][1]
        indexToCommonSkills.append((key, len(jsonDict['matchedSkills'])))
        companyDict[key] = jsonDict

    indexToCommonSkills = sorted(indexToCommonSkills,
                                 key=lambda x: x[1], reverse=True)
    returnDict = dict()
    for j in range(0, COMPANIES):
        returnDict[indexToCommonSkills[j][0]
                   ] = companyDict[indexToCommonSkills[j][0]]
    return returnDict


def companyIdToInfo(companyToSkillDict):
    idDict = dict()

    for key in companyToSkillDict:
        idDict[key] = companyIdToCompanyName(key)
        time.sleep(0.1)
    print(idDict)
    return idDict


# A function to map company id to company names
def companyIdToCompanyName(id):
    SQL_QUERY = \
        f"""
    select * from company
    where id = '{id}'
    """
    P = {
        'sql': SQL_QUERY,
        'size': 1,
        'pretty': True
    }

    response = requests.get(
        PDL_URL,
        headers=H,
        params=P
    ).json()

    data = []
    if response["status"] == 200:
        record = response['data']
        data = [record[0]['name'], record[0]['website']]
        return data
    else:
        return data
