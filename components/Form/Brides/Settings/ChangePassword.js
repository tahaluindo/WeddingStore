import { QueryClient, useMutation } from "react-query"
import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import LoadingPopUp from "../../../Global/LoadingPopUp"
import { changePasswordFormSchema } from "../../../../models/formValidationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import { changePassword } from "../../../../adapters/auth"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = ({ jwt }) => {

    const formOptions = { resolver: yupResolver(changePasswordFormSchema) }
    const methods = useForm(formOptions)
    const { register,reset } = methods
    const queryClient = new QueryClient()

    const [isShowCurrentPassword, setIsShowCurrentPassword] = useState(false)
    const [isShowNewPassword, setIsShowNewPassword] = useState(false)
    const [isShowConfirmationNewPassword, setIsShowConfirmationNewPassword] = useState(false)
    const handleClickCurrentPassword = () => {
        setIsShowCurrentPassword(!isShowCurrentPassword)
    }
    const handleClickNewPassword = () => {
        setIsShowNewPassword(!isShowNewPassword)
    }
    const handleClickConfirmationNewPassword = () => {
        setIsShowConfirmationNewPassword(!isShowConfirmationNewPassword)
    }

    const { mutateAsync, isLoading } = useMutation(changePassword, {
        onSuccess: data => {
            console.log(data)
            // alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)")
            reset(
                { 
                    currentPassword: '', 
                    newPassword: '', 
                    confirmationNewPassword: '', 
                }
                );
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
        const dataSubmit = {
            "jwt": jwt,
            dataChangePassword: {
                currentPassword: data.currentPassword,
                password: data.newPassword,
                passwordConfirmation: data.confirmationNewPassword,
            }
        }
        // console.log(dataSubmit)
        await mutateAsync(dataSubmit);
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
                    <form onSubmit={methods.handleSubmit(onSubmit,onError)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-3xl p-8 xl:shadow-2xl w-full max-w-xl bg-slate-300">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">Current Password{<span className="text-red-600">*</span>}</span>
                            </label>
                            <div className="flex justify-center items-center relative">
                                <input minLength={8} {...register("currentPassword")} type={isShowCurrentPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                                <span className={`absolute right-0 px-2 text-2xl ${isShowCurrentPassword ? "opacity-100" : "opacity-50"}`} onClick={handleClickCurrentPassword}>{isShowCurrentPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">New Password{<span className="text-red-600">*</span>}</span>
                            </label>
                            <div className="flex justify-center items-center relative">
                                <input minLength={8} {...register("newPassword")} type={isShowNewPassword ? "text" : "password"} placeholder="New Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                                <span className={`absolute right-0 px-2 text-2xl ${isShowNewPassword ? "opacity-100" : "opacity-50"}`} onClick={handleClickNewPassword}>{isShowNewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">Confirmation New Password{<span className="text-red-600">*</span>}</span>
                            </label>
                            <div className="flex justify-center items-center relative">
                                <input minLength={8} {...register("confirmationNewPassword")} type={isShowConfirmationNewPassword ? "text" : "password"} placeholder="Re-type New Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                                <span className={`absolute right-0 px-2 text-2xl ${isShowConfirmationNewPassword ? "opacity-100" : "opacity-50"}`} onClick={handleClickConfirmationNewPassword}>{isShowConfirmationNewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Submit</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default ChangePassword