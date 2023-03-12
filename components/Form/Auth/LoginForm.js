import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { loginFormSchema } from "../../../models/formValidationSchema"
import { QueryClient, useMutation } from "react-query"
import { createSessionLogin } from "../../../adapters/auth"
import { useRouter } from "next/router"
import LoadingPopUp from "../../Global/LoadingPopUp"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const methods = useForm()
    const { register, handleSubmit } = methods
    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleClick = () => {
        setIsShowPassword(!isShowPassword)
    }
    const formOptions = { resolver: yupResolver(loginFormSchema) }

    const router = useRouter()

    const queryClient = new QueryClient()

    const mutation = useMutation(createSessionLogin, {
        onSuccess: data => {
            console.log(data)
            // alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)")
            router.push("/brides")
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

    const onSubmit = (data) => {

        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(data));

        const dataSubmit = {
            identifier: data.identifier,
            password: data.password
        }

        mutation.mutate(dataSubmit)
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
            <LoadingPopUp openPopUp={mutation.isLoading} />
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Login</span>
                        </div>
                        <span className="divider"></span>
                        <div className="form-control w-full flex items-center">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">OrderID/Email{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input {...register("identifier")} type="text" placeholder="OrderID/Email" className="input input-bordered w-full max-w-full bg-white text-black" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Password{<span className="text-red-600">*</span>}</span>
                                </label>
                                <div className="flex justify-center items-center relative">
                                    <input {...register("password")} type={isShowPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                                    <span className={`absolute right-0 px-2 text-2xl ${isShowPassword ? "opacity-100" : "opacity-50"}`} onClick={handleClick}>{isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                                </div>
                                <div className="py-2 text-gray-500 italic">
                                    <Link href={"/auth/forgot-password"}>
                                        <a target={""} className="opacity-80 hover:opacity-100 text-sm">Lupa password ?</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Login</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default LoginForm