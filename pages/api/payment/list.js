import CryptoJS from "crypto-js";


const url = process.env.IPAYMU_BASE_URL+'/payment-method-list'
const apikey = process.env.IPAYMU_API_KEY
const va = process.env.IPAYMU_VA

export default function paymentList(req,res){
     // generate signature
    //  res.end("test")
     var body = {};
     const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
     const stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
     const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));
    fetch(url,        {
        method: "POST",
        headers: {
            'Accept': 'application/json', 
            'Content-Type': 'application/json',
            'va': va,
            'signature': signature,
            'timestamp': Date.now()
        },
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((responseJson) => {
        const listPayment = []
        responseJson.Data.map((item)=>{
            switch (item.Code) {
                case "va":
                    listPayment.push(item)
                    break;
                case "qris":
                    listPayment.push(item)
                    break;
                default:
                    break;
            }
        })
        res.json(listPayment)
    })  
    .catch(error => res.end(JSON.stringify(error)))

}