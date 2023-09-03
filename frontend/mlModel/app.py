from flask import Flask, request, jsonify
from flask_cors import cross_origin
import pickle
import os


app =Flask(__name__)



def prediction(lst):
    relative_path = './frontend/mlModel/price_generator.pickle'
    filename =  os.path.abspath(relative_path)
    print(filename)
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([lst])
    return pred_value

@app.route('/pricepredictor', methods=['POST'])
@cross_origin()
def predictor():
    payload = request.json
    name = payload["name"]
    material=payload["material"]
    productcount=payload["productcount"]
    button=payload["button"]
    embroid=payload["embroid"]
    sleeveType=payload["sleeveType"]
    collarType=payload["collarType"]
    collarMaterial=payload["collarMaterial"]
    neckType=payload["neckType"]
    cuff=payload["cuff"]
    doublesleeve=payload["doublesleeve"]
    pipping=payload["pipping"]
    screen=payload["screen"]
  

    print("material : " + material)
    print("productcount : "+ productcount)
    print("button : "+ button)
    print("embroid : "+ embroid)
    print("sleeveType : "+ sleeveType)
    print("collarType : "+ collarType)
    print("collarMaterial : "+ collarMaterial)
    print("neckType : "+ neckType)
    print("cuff : "+ cuff)
    print("doublesleeve : "+ doublesleeve)
    print("pipping : "+ pipping)
    print("creen : "+screen)
    
    feature_list = []

    feature_list.append(int(button))
    feature_list.append(int(embroid))
    feature_list.append(int(productcount))

    material_list=["Cotton Pique","Single Jursey","Wetlook"]
    sleeveType_list=["Long Sleeve","Short Sleeve"]
    collarType_list=["Chinese Collar","Full Collar","No Collar"]
    collarMaterial_list=["Fabric","Knit","No Coller"]
    neckType_list=["Crew Neck","Polo Neck","V-Neck"]
    cuff_list=["No","Yes"]
    doublesleeve_list=["No","Yes"]
    pipping_list=["No","Yes"]
    screen_list=["No","Yes"]

    def traverse_list(lst, value):
            for item in lst:
                if item == value:
                    feature_list.append(1)
                else:
                    feature_list.append(0)

    traverse_list(material_list, material)
    traverse_list(sleeveType_list,sleeveType)
    traverse_list(collarType_list,collarType)
    traverse_list(collarMaterial_list,collarMaterial)
    traverse_list(neckType_list,neckType)
    traverse_list(cuff_list,cuff)
    traverse_list(doublesleeve_list,doublesleeve)
    traverse_list(pipping_list,pipping)
    traverse_list(screen_list,screen)


    # lst=[2,1,200,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1]

    price=prediction(feature_list)
    print(price[0])
    T_shirt_price=round(price[0],2)
    # print(lst)
    # print(feature_list)


    

    return jsonify(
        message="Done",
        payload=T_shirt_price
    ), 200

# @app.route('/api/v1/submitDataset', methods=['POST'])
# @cross_origin()
# def getDataSet():
#     #print(request.json)
#     payload = request.json
#     df = pd.DataFrame(payload['dataSet'])
#     df.head()
#     df.info()
#     df.describe()
#     cols = []
#     for col in df.columns:
#         cols.append(col)
    
#     y = "target"

#     # preprocessData(df, cols, y)

#     return jsonify(
#         message="Done",
#         apiPayload = cols
#     ), 200

if __name__== '__main__':
    app.run(debug=True)