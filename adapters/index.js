import { dataUndanganParams,getDataUndanganParams, getDataOrderParams, dataTemplateUndanganParams, dataPaketUndanganParams, getDataOrderWithRecaptchaParams, getForgotPasswordEmailParam, getForgotPasswordSessionParam, forgotPasswordSessionDestroyParam, getForgotPasswordSessionParams, forgotPasswordSessionDestroyParams, getDataConfirmationParams, getDataUndanganPostParams, getDataUndanganSlugPostParam, getDataUndanganSessionParams, dataUndanganSessionDestroyParams, getUpdateDataOrderParams, dataListPaymentParams, getCreateDataOrderParams, getDataPaymentParams, getUpdateDataOrderByOrderIdParams, getCreateDataUndanganParams, getUpdateDataUndanganParams, dataFaqParams } from "./queryParams";

// const URL = process.env.STRAPIBASEURL

// export async function getDataUndangan(slug=""){

//     /* in adapters/index.js at body part add 'JSON.stringify(json)' change 'data' to 'body' remove 'url' part */

//     const res = await fetch(`${URL}/graphql`,getDataUndanganParams(slug))
//     const data = await res.json()

//     return data
// }
// export async function getDataUndangan2(){


//      /* in adapters/index.js at body part add 'JSON.stringify(json)' change 'data' to 'body' remove 'url' part */
//     const res = await fetch(`${URL}/graphql`,dataUndanganParams)
//     const data = await res.json()

//     return data
// }

import axios from "axios";

/* GET */

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
const strapiApiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY

export async function getDataUndangan(slug=""){

    return await axios(getDataUndanganParams(slug,strapiUrl,strapiApiKey))
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}
export async function getDataUndanganPreview(){

    return await axios(dataUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}
export async function getDataTemplateUndangan(){

    return await axios(dataTemplateUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}
export async function getDataPaketUndangan(){

    return await axios(dataPaketUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}
export async function getDataListPayment(){

    return await axios(dataListPaymentParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}

export async function getDataOrder(orderId){

    return await axios(getDataOrderParams(orderId,strapiUrl,strapiApiKey))
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}
export async function getDataFaq(){

    return await axios(dataFaqParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        throw error
    });
}


/* POST */

export async function createDataOrder(data){
    return await axios(getCreateDataOrderParams(data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
export async function createDataOrderByRecaptcha({dataOrderPost,captchaValue}){
    return await axios(getDataOrderWithRecaptchaParams({dataOrderPost,captchaValue},strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function createSessionForgotPassword(data){
    return await axios(getForgotPasswordSessionParams(data,strapiUrl))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function createDataConfirmation(bodyFormData){
    return await axios(getDataConfirmationParams(bodyFormData,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function createDataUndangan(data){
    return await axios(getCreateDataUndanganParams(data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function createSessionDataUndangan(data){
    return await axios(getDataUndanganSessionParams(data,baseUrl))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
export async function createDataPayment(data){
    return await axios(getDataPaymentParams(data,baseUrl))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* PUT */
export async function updateDataOrder(id, data){
    return await axios(getUpdateDataOrderParams(id,data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
export async function updateDataOrderByOrderId(orderId,data){
    return await axios(getUpdateDataOrderByOrderIdParams(orderId,data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function updateDataUndangan(bodyFormData){
    return await axios(getUpdateDataUndanganParams(bodyFormData=bodyFormData,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}


/* DELETE */
export async function deleteSessionForgotPassword(){
    return await axios(forgotPasswordSessionDestroyParams)
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

export async function deleteSessionDataUndangan(){
    return await axios(dataUndanganSessionDestroyParams)
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}