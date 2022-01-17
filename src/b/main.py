import json
from fastapi import FastAPI
# json_string = json.dumps(mydict, indent=4)

def write_json(data):
    with open('data2.json', 'w', encoding='UTF-8') as f:
        # f.write(json_string)
        json.dump(data, f, ensure_ascii=False, indent=4)




## GET, POST, EDIT, DELETE

with open('data2.json', 'r', encoding='UTF-8') as json_file:
    data = json.load(json_file)
    temp = data["records"]
    y = {
            "id": "",
            "date": "09-17-2020",
            "description": "임대료",
            "month": "9",
            "method": "",
            "amount": "8000000",
            "payment": "",
            "lateCnt": "",
            "paymentStatus": "",
            "remainDeposit": ""
        }
    temp.append(y)

app = FastAPI()

@app.get('/')
async def root():
    return 





