import Image from "next/image"
import imageLoader from "../../../utils/imageLoader"
import { FormProvider, useForm } from "react-hook-form"
import { slugFormSchema } from "../../../models/formValidationSchema"
import { QueryClient, useMutation } from "react-query"
import { yupResolver } from "@hookform/resolvers/yup"
import dynamic from "next/dynamic"
import { useState } from "react"
import { createDataUndangan, updateDataUndangan } from "../../../adapters"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify"
import LoadingPopUp from "../../Global/LoadingPopUp"
import 'react-toastify/dist/ReactToastify.css';

// const WarningStaticPopUp = dynamic(
//     () => import("../../Global/WarningStaticPopUp"),
//     { ssr: false }
//   )
const WarningPopUp = dynamic(
    () => import("../../Global/WarningPopUp"),
    { ssr: false }
)

// const LogOutPopUp = dynamic(
//     () => import("../../Dashboard/LogOutPopUp"),
//     { ssr: false }
// )

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL

const SlugForm = ({ undanganId }) => {

    const formOptions = { resolver: yupResolver(slugFormSchema) }

    const methods = useForm(formOptions)
    const { register, handleSubmit } = methods

    const router = useRouter()

    const queryClient = new QueryClient()

    /* DEPRECATED (No Longer Need !!!) */
    // const sessionMutation = useMutation(createSessionDataUndangan, {
    //     onSuccess: data => {
    //         console.log(data)
    //         alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
    //         setSession(data)
    //     },
    //     onError: (error) => {
    //         alert("failed make a session")
    //         alert(error)
    //         console.log(error)
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries('create')
    //     }
    // })

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const mutation = useMutation(updateDataUndangan, {
        onSuccess: data => {
            console.log(data)
            // alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n")
            router.reload(window.location.pathname)
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

    //////////////////////////////////////////////////////////////////

    const onSubmit = (data) => {

        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(data));

        const bodyFormData = new FormData()
        bodyFormData.append("data", JSON.stringify({ "Slug": data.slug }))
        const dataSubmitAll = {
            id: undanganId,
            bodyFormData: bodyFormData
        }

        // console.log(dataSubmit)

        mutation.mutate(dataSubmitAll)
    }

    const onError = (errors, e) => {
        // alert('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)');
        notifyError('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)')
        console.log(errors, e);
    }

    const [openPopUp, setOpenPopUp] = useState(true)

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
        <>
            {/* <WarningStaticPopUp title={"Warning"} message={`Slug adalah nama/id yang digunakan untuk mengidentifikasi halaman web anda (contoh: bridesvow.com/pulanpulin).
             Jika setelah disubmit anda ingin mengubah slug maka hanya dapat dilakukan dengan menghubungi admin`} buttonName={"Oke"} /> */}
            <WarningPopUp open={openPopUp} setOpen={setOpenPopUp} title={"Perhatian !"} message={`Slug adalah nama(id) yang merupakan bagian dari url undangan anda nantinya (contoh: bridesvow.com/pulanpulin).
             Untuk mengubah slug setelah anda melakukan submit maka hanya dapat dilakukan dengan menghubungi admin`} />
            <ToastContainer />
            <LoadingPopUp openPopUp={mutation.isLoading} />
            <div className="w-full">
                <FormProvider {...methods}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="pb-5 lg:w-24 w-16 h-auto mt-10">
                            <Image layout="responsive" src={"/static/bridesvow.svg"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                        </div>
                        <span className="pb-5 text-xl lg:text-3xl text-black font-bold font-[poppins]">Mohon masukkan Slug Undangan</span>
                        <form onSubmit={handleSubmit(onSubmit, onError)} className="pb-5 flex flex-col justify-center items-center">
                            <label className="input-group">
                                <span className="text-white">{baseUrl+"/"}</span>
                                <input {...register("slug")} type="text" placeholder="Slug" className="input input-bordered rounded-full lg:w-72 bg-white text-black" required />
                            </label>
                            <button type="submit" className="btn btn-sm rounded-full w-40 m-5 bg-[#003153] text-white">Submit</button>
                        </form>
                    </div>
                </FormProvider>
            </div>
        </>
    )
}

export default SlugForm