export const getAuthParams = (data, url, apikey) => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`,
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: {
      query: `
      mutation Login($input: UsersPermissionsLoginInput!){
        login(input:$input){
          jwt
          user{
            id
            username
            email
            confirmed
          }
        }
      }
        `,
      variables: {
        input: data
      }
    }
  }
}

export const getAuthRegisterParams = (data, url, apikey) => {

  return {

    method: "post",
    url: `${url}/api/auth/local/register`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`,
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: data
  }
}

////check from pemesanan field//////
export const getCheckPemesananParams = (identifier, url, apikey) => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`,
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: {
      query: `
      query CheckPemesananIsPaid($identifier: String!) {
        checkPemesanan(identifier:$identifier){
          data{
            attributes{
              OrderID
              Email
              Nama
              No_HP
              Kota
              Alamat
              template_undangan{
                data{
                  id
                  attributes{
                    Nama
                  }
                }
              }
              Total_Bayar
              Metode_Pembayaran
              Channel_Pembayaran
              Status
              IsPaid
            }
          }
        }
      }      
        `,
      variables: {
        identifier: identifier
      }
    }
  }
}

export const getChangePasswordParams = (data, url) => {

  return {

    method: "post",
    url: `${url}/api/auth/change-password`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${data.jwt}`,
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: data.dataChangePassword
  }
}


export const getLoginSessionParams = (data, url) => {

  return {

    method: "post",
    url: `${url}/api/auth/login`,
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: data

  }
}

export const loginSessionDestroyParams = {

  method: "post",
  url: `/api/auth/logout`,
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip,deflate,compress"
  }
}

export const getDataUndanganIdByOrderIdParams = (orderId, url, apikey) => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`,
      "Accept-Encoding": "gzip,deflate,compress"
    },
    data: {
      query: `
      query findDataUndangan($orderId: String!) {
        dataUndangans(filters: { OrderID: { contains: $orderId } }) {
          data {
            id
            attributes{
              OrderID
              Slug
            }
          }
        }
      }
      
      
      
        `,
      variables: {
        orderId: orderId
      }
    }
  }
}