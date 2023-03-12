import OrderForm from "../../components/Form/Order/OrderForm"
import OrderView from "../../components/Form/Order/OrderView"
import { QueryClient, useMutation } from 'react-query'
import { createDataOrderByRecaptcha, createDataPayment, getDataListPayment, getDataPaketUndangan } from "../../adapters"
import { FormProvider, useForm } from "react-hook-form"
import { createContext, useRef, useState } from "react"
import { useRouter } from "next/router"
import { orderFormSchema } from "../../models/formValidationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import Layout from "../../components/Global/Layout"
import CryptoJS from "crypto-js"
import WarningPopUp from "../../components/Global/WarningPopUp"
import { ToastContainer, toast } from "react-toastify"
import LoadingPopUp from "../../components/Global/LoadingPopUp"
import 'react-toastify/dist/ReactToastify.css';
import { register } from "../../adapters/auth"

const aesSecretKey = process.env.NEXT_PUBLIC_AES_SECRET_KEY

export const DataContext = createContext(null)

const OrderPage = ({ data, paymentList }) => {

    const formOptions = { resolver: yupResolver(orderFormSchema) }
    const methods = useForm(formOptions)
    const queryClient = new QueryClient()
    const router = useRouter()

    ////State/////
    const [totalHarga, setTotalHarga] = useState(999999)
    const [captchaValue, setCaptchaValue] = useState("");
    const [dataOrderForm, setDataOrderForm] = useState({
        paket: "Null",
        template: "Null",
        harga: 0,
    })
    const orderDataContextRef = useRef({})
    ////////////////

    // useEffect(()=>{
    //     console.log(paymentList)
    // })

    //////////////
    const [openPopUp, setOpenPopUp] = useState(false)

    ////data register///
    const dataRegisterRef = useRef(null)

    /*---------------------------------------------------API Communications--------------------------------------------------------------*/

    ////////////data payment///////////////////////
    const mutationDataPayment = useMutation(createDataPayment, {
        onSuccess: async (data) => {
            console.log(data)
            // const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            // alert(message)
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)")
            try {
                console.log(dataRegisterRef.current)
                await mutationRegister.mutateAsync(dataRegisterRef.current)
                if (data.Status === 200) {
                    // const queryString = `?orderId=${data.Data.ReferenceId}&channelCode=${data.Data.Channel}&methodCode=${data.Data.Via}&paymentNo=${data.Data.paymentNo}&paymentName=${data.Data.PaymentName}&expired=${data.Data.Expired}&paymentIntrucionsDoc=${orderDataContextRef.current.paymentIntrucionsDoc}`
                    const dataToRedirect = {
                        methodCode: data.Data.Via,
                        channelCode: data.Data.Channel,
                        paymentNo: data.Data.PaymentNo,
                        paymentName: data.Data.PaymentName,
                        total: data.Data.Total,
                        expired: data.Data.Expired,
                        paymentIntrucionsDoc: orderDataContextRef.current.paymentIntrucionsDoc
                    }
                    const cipherText = encodeURIComponent(CryptoJS.AES.encrypt(JSON.stringify(dataToRedirect), aesSecretKey).toString())
                    router.push(`/order/status/?orderId=${data.Data.ReferenceId}&encryptedData=${cipherText}`)
                } else {
                    notifyError("Something went wrong !")
                    setOpenPopUp(true)
                }
            } catch (error) {

            }
        },
        onError: (error) => {
            try {
                // alert(error.response.data.error.message)
                notifyError(error.response.data.error.message)
            } catch (error) {
                // alert("there was an error")
                notifyError("there was an error")
                console.log(error)
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    //////////order/////////////
    const mutationDataOrder = useMutation(createDataOrderByRecaptcha, {
        onSuccess: async (data) => {
            console.log(data)
            // const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            // alert(message)

            try {
                const id = data.data.createPemesananByRecaptcha.data.id
                const { OrderID, Nama, No_HP, Email, Total_Bayar, Metode_Pembayaran, Channel_Pembayaran, template_undangan } = data.data.createPemesananByRecaptcha.data.attributes
                const namaPaket = template_undangan.data.attributes.paket_undangan.data.attributes.Nama
                // const namaUndangan = template_undangan.data.attributes.Nama

                const dataPaymentParams = {
                    "orderId": OrderID,
                    // "id":id,
                    "buyerName": Nama,
                    "buyerPhone": No_HP,
                    "buyerEmail": Email,
                    "product": `Undangan Pernikahan Online (${namaPaket})`,
                    "amount": `${Total_Bayar}`,
                    "paymentMethod": Metode_Pembayaran,
                    "paymentChannel": Channel_Pembayaran
                }
                console.log(dataPaymentParams)
                await mutationDataPayment.mutateAsync(dataPaymentParams)
            } catch (error) {
                notifyError("there was an error")
                console.log(error)
            }
        },
        onError: (error) => {
            try {
                // alert(error.response.data.error.message)
                notifyError(error.response.data.error.message)
            } catch (error) {
                // alert("there was an error")
                notifyError("there was an error")
                console.log(error)
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    //////////register//////////
    const mutationRegister = useMutation(register, {
        onSuccess: (data) => {
            console.log(data)
            // const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            // alert(message)
        },
        onError: (error) => {
            try {
                // alert(error.response.data.error.message)
                notifyError(error.response.data.error.message)
            } catch (error) {
                // alert("there was an error")
                notifyError("there was an error")
                console.log(error)
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    /*-----------------------------------------------------------------------------------------------------------------*/

    const onSubmit = async (data) => {

        if (!captchaValue) {
            // Show an error message if the CAPTCHA is not completed
            return;
        }
        console.log(captchaValue)
        // display form data on success
        const dataOrderPost = {
            OrderID: data.orderId,
            Nama: data.nama,
            No_HP: data.noHP,
            Email: data.email,
            Kota: data.kota,
            Alamat: data.alamat,
            Total_Bayar: totalHarga,
            template_undangan: data.template,
            Channel_Pembayaran: data.paymentChannel,
            Metode_Pembayaran: orderDataContextRef.current.methodCode,
        }

        const dataRegister = {
            username: data.orderId,
            email: data.email,
            password: data.password
        }

        dataRegisterRef.current = dataRegister
        await mutationDataOrder.mutateAsync({ dataOrderPost, captchaValue });
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(dataOrderPost));
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + captchaValue)
    }

    const onError = (errors, e) => {
        // alert('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)');
        notifyError('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)')
        console.log(errors, e);
    }

    /*-----------------------------------------------------------------------------------------------------------------*/

    ///success toast
    const notifySuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    ///error toast
    const notifyError = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    return (
        <DataContext.Provider value={{ orderDataContextRef: orderDataContextRef }}>
            <WarningPopUp open={openPopUp} setOpen={setOpenPopUp} title={"Something went wrong !"} message={"Silahkan refresh halaman ini !"} />
            <ToastContainer />
            <LoadingPopUp openPopUp={mutationDataOrder.isLoading} />
            <LoadingPopUp openPopUp={mutationDataPayment.isLoading} />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
                    <div className="flex flex-col xl:flex-row justify-center">
                        <OrderForm data={data} setDataOrderForm={setDataOrderForm} />
                        <OrderView paymentList={paymentList} dataOrderForm={dataOrderForm} setTotalHarga={setTotalHarga} setCaptchaValue={setCaptchaValue} />
                    </div>
                </form>
            </FormProvider>
        </DataContext.Provider>
    )
}

export async function getServerSideProps() {
    const res = await getDataPaketUndangan()
    const data = []
    res.data.paketUndangans.data.map((item) => {
        data.push({
            id: item.id,
            paket_undangan: {
                nama: item.attributes.Nama,
                harga: item.attributes.Harga,
                fitur: item.attributes.Fitur,
                template_undangan: item.attributes.template_undangans.data.map((item) => {
                    return (
                        {
                            id: item.id,
                            data: {
                                nama: item.attributes.Nama,
                                slug: item.attributes.Slug,
                                isCreatorChoice: item.attributes.IsCreatorChoice,
                                template_id: item.attributes.TemplateID,
                                url: item.attributes.Gambar.data.attributes.url
                            }

                        }
                    )
                })
            }
        })
    })

    const paymentList = await getDataListPayment()


    return {
        props: {
            data,
            paymentList
        }
    }
}

OrderPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default OrderPage