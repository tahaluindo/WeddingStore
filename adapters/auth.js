import axios from "axios";
import { getAuthParams, getAuthRegisterParams, getChangePasswordParams, getCheckPemesananParams, getDataUndanganIdByOrderIdParams, getLoginSessionParams, loginSessionDestroyParams } from "./authQueryParams";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
const strapiApiKey = process.env.NEXT_PUBLIC_STRAPI_API_KEY

export async function login(data){
    return await axios(getAuthParams(data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
export async function register(data){
    return await axios(getAuthRegisterParams(data,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* CHECK PEMESANAN */
export async function checkPemesanan(identifier){
    return await axios(getCheckPemesananParams(identifier,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* CHECK DATA UNDANGAN ORDER ID */
export async function getDataUndanganIdByOrderId(orderId){
    return await axios(getDataUndanganIdByOrderIdParams(orderId,strapiUrl,strapiApiKey))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
/* CHANGE USER PASSWORD */
export async function changePassword(data){
    return await axios(getChangePasswordParams(data,strapiUrl))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* CREATE SESSION */
export async function createSessionLogin(data){
    console.log(baseUrl)
    return await axios(getLoginSessionParams(data,baseUrl))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* DELETE SESSION */
export async function deleteSessionLogin(){
    return await axios(loginSessionDestroyParams)
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}