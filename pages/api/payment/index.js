import CryptoJS from "crypto-js";

// adjust with your iPaymu api key & va 
const url = process.env.IPAYMU_BASE_URL+'/payment/direct'
const apikey = process.env.IPAYMU_API_KEY
const va = process.env.IPAYMU_VA

//next base url from env
const nextUrl = process.env.NEXT_PUBLIC_BASE_URL
// const testUrl = "https://dfc9-36-79-17-29.ap.ngrok.io"


export default function payment(req, res) {
    // const {pid} = req.query
    const {orderId, buyerName, buyerPhone, buyerEmail, amount, paymentMethod, paymentChannel} = req.body
    const body            = {
        "name":buyerName,
        "phone":buyerPhone,
        "email":buyerEmail,
        "amount":amount,
        "notifyUrl":nextUrl+"/api/payment/callback",
        "expired":"24",
        "expiredType":"hours",
        "comments":"Catatan",
        "referenceId":orderId,
        "paymentMethod":paymentMethod,
        "paymentChannel":paymentChannel,
        "product":["produk 1"],
        "qty":["1"],
        "price":[amount],
        "weight":["1"],
        "width":["1"],
        "height":["1"],
        "length":["1"],
        "deliveryArea":"0",
        "deliveryAddress":"SUMUT"
    }

    // generate signature
    const bodyEncrypt = CryptoJS.SHA256(JSON.stringify(body));
    const stringtosign = "POST:" + va + ":" + bodyEncrypt + ":" + apikey;
    const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA256(stringtosign, apikey));
    fetch(
        url,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json',
                'va': va,
                'signature': signature,
                'timestamp': Date.now()
            },
            body: JSON.stringify(body)
        }
    )
    // axios.post(url,JSON.stringify(body),{
    //     headers: {
    //         'Accept': 'application/json', 'Content-Type': 'application/json',
    //         'va': va,
    //         'signature': signature,
    //         'timestamp': Date.now()
    //     },
    // })
        .then((response) => response.json())
        .then((responseJson) => {
            // response
            // console.log(responseJson)
            res.json(responseJson)
        })  
        .catch(function (error) {
            console.log(error.toJSON());
            // res.end("Something went wrong !!!")
            res.end(JSON.stringify(error))
          });
        // res.send(JSON.stringify(body))
}