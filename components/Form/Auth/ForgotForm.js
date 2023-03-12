import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { forgotFormSchema } from "../../../models/formValidationSchema";
import { QueryClient, useMutation } from "react-query";
import { createSessionForgotPassword } from "../../../adapters";

const ForgotForm = ({ session,setSession }) => {
    const formOptions = { resolver: yupResolver(forgotFormSchema) }

    // get funtions to build form with useForm() hook
    const methods = useForm(formOptions)
    const { register } = methods;

    const queryClient = new QueryClient()

    // const router =  useRouter()

    const { mutate, isLoading } = useMutation(createSessionForgotPassword, {
        onSuccess: data => {
            console.log(data)
            const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            alert(message)
            setSession(data)
            // router.push("/")
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    const onSubmit = (data) => {

        alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(data));
        const forgotPasswordDataSession = {
            email:data.email,
            isOtpPage:true
        }
        mutate(forgotPasswordDataSession)
    }

    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Lupa Password</span>
                        </div>
                        <span className="divider"></span>
                        <div className="form-control w-full flex items-center">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Email{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input {...register("email")} name="email" type="email" placeholder="Email" className="input input-bordered w-full max-w-full bg-white text-black" required />
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Kirim OTP</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default ForgotForm