import { BsWhatsapp } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import SingleUpload from "../../Global/SingleUpload"
import { QueryClient, useMutation } from "react-query"
import { createDataConfirmation } from "../../../adapters"
import { FormProvider, useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import LoadingPopUp from "../../Global/LoadingPopUp"
import 'react-toastify/dist/ReactToastify.css';

const ConfirmForm = () => {

    const methods = useForm()
    const { register } = methods
    const queryClient = new QueryClient()

    const { mutateAsync, isLoading } = useMutation(createDataConfirmation, {
        onSuccess: data => {
            console.log(data)
            // alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)")
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

    const onSubmit = async (data) => {
        const bodyFormData = new FormData()
        const dataConfirmation = {
            "Nama_Pemilik_Rekening": data.namaPemilikRekening,
            "Nama_Pemesan": data.namaPemesan,
            "OrderID": data.orderId,
            "publishedAt": new Date().toISOString(),
            "Email": data.email,
            "No_HP": data.noWa,
            "Pesan": data.pesan
        }
        bodyFormData.append("data", JSON.stringify(dataConfirmation))
        bodyFormData.append("files.Bukti_Pembayaran", data.fotoBukti[0])
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(dataConfirmation));
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + data.fotoBukti);
        // console.log(data.fotoBukti[0])
        await mutateAsync(bodyFormData);
    }
    const onError = (errors, e) => {
        // alert('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)');
        notifyError('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)')
        console.log(errors, e);
    }

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
            <ToastContainer />
            <LoadingPopUp openPopUp={isLoading} />
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit,onError)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Confirmation</span>
                        </div>
                        <span className="divider"></span>
                        <div className="form-control w-full flex items-center">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Order ID{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input {...register('orderId')} type="text" placeholder="Order ID" className="input input-bordered w-full max-w-full bg-white text-black" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nama Pemesan{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input {...register('namaPemesan')} type="text" placeholder="Nama Pemesan" className="input input-bordered w-full max-w-full bg-white text-black" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nama Pemilik Rekening{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input {...register('namaPemilikRekening')} type="text" placeholder="Nama Pemilik Rekening" className="input input-bordered w-full max-w-full bg-white text-black" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nomor WA{<span className="text-red-600">*</span>}</span>
                                </label>
                                <div className="w-full max-w-full">
                                    <label className="input-group">
                                        <span><BsWhatsapp /></span>
                                        <input {...register('noWa')} type="tel" pattern="[0-9]{12}" placeholder="08221234567" className="input input-bordered w-full bg-white text-black" required />
                                    </label>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Alamat E-mail</span>
                                </label>
                                <div className="w-full max-w-full">
                                    <label className="input-group">
                                        <span><MdAlternateEmail /></span>
                                        <input {...register('email')} type="email" placeholder="info@site.com" className="input input-bordered w-full bg-white text-black" required />
                                    </label>
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Messages</span>
                                </label>
                                <textarea {...register('pesan')} className="textarea textarea-bordered w-full max-w-full bg-white text-black" placeholder="Messages"></textarea>
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Upload Bukti Pembayaran</span>
                                </label>
                                <SingleUpload name={"fotoBukti"} required={true} width="w-full min-w-68 " />
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Confirm</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default ConfirmForm