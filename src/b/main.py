import json
from fastapi import FastAPI
# json_string = json.dumps(mydict, indent=4)

def write_json(data):
    with open('data2.json', 'w', encoding='UTF-8') as f:
        # f.write(json_string)
        json.dump(data, f, ensure_ascii=False, indent=4)

## GET, POST, EDIT, DELETE

def user_input():
    keys = [
            "id:",
            "date:",
            "description:",
            "month:",
            "amount:",
            "payment:",
            "lateCnt:",
            "paymentStatus:",
            "remainDeposit:"
            ]
    
    list_records = []

    while (len(keys)):
        i = 0
        list_records += input(keys[i])
        i += 1
        return list_records
    


with open('data2.json', 'r', encoding='UTF-8') as json_file:
    data = json.load(json_file)
    temp = data["records"]
    records = user_input()

    y = {
            "id": records[0],
            "date": records[1],
            "description": records[2],
            "month": records[3],
            "method": records[4],
            "amount": records[5],
            "payment": records[6],
            "lateCnt": records[7],
            "paymentStatus": records[8],
            "remainDeposit": records[9]
        }
    temp.append(y)






