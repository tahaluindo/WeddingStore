import { updateDataOrderByOrderId } from "../../../adapters";
import formidable from 'formidable'

export const config = {
    api: {
        externalResolver: true,
        bodyParser: false
    },
}

export default async function callbackPayment(req, res) {
    // const {id} = req.query

    const data = await new Promise((resolve, reject) => {
        const form = formidable()

        form.parse(req, (err, fields, files) => {
            if (err) reject({ err })
            resolve({ err, fields, files })
        })
    })

    const {
        trx_id,
        status,
        status_code,
        sid,
        reference_id
    } = data.fields

    //   res.end("Test: "+id+" Test_2: "+status_code)

    try {
        if (status === "berhasil" || status_code === "1") {
            updateDataOrderByOrderId(
                reference_id,
                {
                    "Status": status,
                    "IsPaid": true
                }
            )
                .then((response) => {
                    res.send(`Success (${status}) !!!`)
                    res.revalidate('/order/status')
                })
                .catch(function (error) {
                    console.log(error.toJSON());
                    res.end(JSON.stringify(error))
                });
        } else {
            updateDataOrderByOrderId(
                reference_id,
                {
                    "Status": status,
                    "IsPaid": false
                }
            )
                .then((response) => {
                    res.send(`${status} !!!`)
                })
                .catch(function (error) {
                    console.log(error.toJSON());
                    res.end(JSON.stringify(error))
                });
        }
    } catch (error) {
        res.end("Something went wrong !!!")
    }
}