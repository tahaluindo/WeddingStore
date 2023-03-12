import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import OtpInput from "react-otp-input"
import { QueryClient, useMutation } from "react-query"
import { createSessionForgotPassword, deleteSessionForgotPassword } from "../../../adapters"

const OtpForm = ({session,setSession}) => {

    const methods = useForm()
    const {handleSubmit} = methods

    const [otpValue, setOtpValue] = useState({ otp: '' })
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null)

    const handleChangeOtp = (otp) => {
        // console.log(otpValue.otp)
        setOtpValue({ otp })
    }

    const handleClickTimer = (event) => {
        if (!event.detail || event.detail == 1) {
            if (timer <= 0) {
                setTimer(30)
                intervalRef.current = setInterval(() => {
                    setTimer(timer => timer - 1);
                }, 1000);
            }
        }
    }

    if (timer <= 0) {
        clearInterval(intervalRef.current)
    };

    const queryClient = new QueryClient()
    const submitMutation = useMutation(createSessionForgotPassword, {
        onSuccess: data => {
            console.log(data)
            const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            alert(message)
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    const destroySessionMutation = useMutation(deleteSessionForgotPassword, {
        onSuccess: data => {
            console.log(data)
            const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            alert(message)
            setSession(null)
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
        // const forgotPasswordData = {
        //     email:data.email,
        //     isOtpPage:true
        // }
        // mutate(forgotPasswordData)
    }

    const handleClickDestroySession = () => {
        destroySessionMutation.mutate()
    }


    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Lupa Password</span>
                        </div>
                        <span className="divider"></span>
                        <div className="form-control w-full flex items-center">
                            <div className="w-fullr">
                                <label className="label">
                                    <span className="label-text font-bold text-black">OTP{<span className="text-red-600">*</span>}</span>
                                </label>
                                <OtpInput
                                    value={otpValue.otp}
                                    onChange={handleChangeOtp}
                                    numInputs={6}
                                    separator={<span>-</span>}
                                    inputStyle={{
                                        width: "2em",
                                        borderRadius: "0.5rem",
                                        fontSize: "1.25rem",
                                        lineHeight: "1.75rem"
                                    }}
                                />
                                <div className="flex flex-col items-center justify-center pt-2">
                                    <span onClick={handleClickDestroySession} className="cursor-pointer opacity-80 hover:opacity-100 text-sm font-bold">Kembali ke Email</span>
                                    <span onClick={handleClickTimer} className={`cursor-pointer opacity-80 hover:opacity-100 text-sm font-bold pt-2 ${!(timer <= 0) ? `text-red-700` : `text-black`}`} >{timer <= 0 ? `Kirim OTP Lagi` : `OTP sudah dikirim, cek email anda ! (${timer})`}</span>
                                </div>
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

export default OtpForm