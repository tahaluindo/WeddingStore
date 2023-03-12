import Lottie from "react-lottie";
import { useRouter } from "next/router";
import Image from "next/image";
import imageLoader from "../../../utils/imageLoader";
import CryptoJS from "crypto-js";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "react-timer-hook";
import WarningPopUp from "../../Global/WarningPopUp";
import waitingPaymentAnimation from "../../../public/animation/waiting-payment.json"

const aesSecretKey = process.env.NEXT_PUBLIC_AES_SECRET_KEY

const WaitingPayment = ({ data }) => {
    const router = useRouter();
    const { orderId,encryptedData } = router.query;
    const bytes = CryptoJS.AES.decrypt(decodeURIComponent(encryptedData), aesSecretKey)
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    const { channelCode, methodCode, paymentNo, paymentName, total, expired, paymentIntrucionsDoc } = decryptedData;
    const { Nama, Email, IsPaid } = data

    const [open, setOpen] = useState(false)

    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const expiredTimeRef = useRef(null)
    if (expiredTimeRef.current === null) {
        const formattedExpiredDate = new Date(expired)
        expiredTimeRef.current = formattedExpiredDate
        console.log(expired)
    }
    const timerObj = useTimer({
        expiryTimestamp: expiredTimeRef.current, onExpire: (() => {
            timerObj.pause()
            setOpen(true)
            setInterval(() => {
                router.reload(window.location.pathname)
            }, 5000)
        })
    })

    useEffect(() => {
        setDays(timerObj.days)
        setHours(timerObj.hours)
        setMinutes(timerObj.minutes)
        setSeconds(timerObj.seconds)
    }, [timerObj.days, timerObj.hours, timerObj.minutes, timerObj.seconds]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: waitingPaymentAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <WarningPopUp open={open} setOpen={setOpen} title={"Perhatian !"} message={"Masa pembayaran anda telah expired !!!"} />
            <section className="flex justify-center px-2 font-[poppins] text-black">
                <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                    <section className="bg-gray-50">
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-10 lg:flex g:items-center" >
                            <div className="mx-auto max-w-xl text-center">
                                <span className="text-xs">(Silahkan refresh halaman ini jika anda sudah melakukan pembayaran)</span>
                                <Lottie
                                    options={defaultOptions}
                                    height={200}
                                    width={200}
                                />
                                <h1 className="text-3xl font-extrabold text-red-700 sm:text-5xl">
                                    {"Menunggu Pembayaran..."}
                                </h1>
                                <h1 className="text-xl font-extrabold text-red-700 sm:text-2xl pt-5">
                                    {hours}h {minutes}m {seconds}s
                                </h1>
                                <h1 className="sm:text-3xl text-2xl font-extrabold my-5">
                                    <strong className="font-extrabold block">
                                        {"OrderID: "}
                                    </strong>
                                    <strong className="font-extrabold block bg-black text-white mx-10 py-3">
                                        {orderId}
                                    </strong>
                                </h1>
                                <div className="text-3xl font-extrabold">
                                    <Image className='' src={`/static/wallet/${channelCode.toLowerCase()}.png`} loader={imageLoader} width={200} height={200} alt='template' objectFit="contain" />
                                </div>
                                {channelCode.toLowerCase() === "qris" ?
                                    <div className="text-3xl font-extrabold flex justify-center">
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-full bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-1/2"
                                            href={`https://sandbox.ipaymu.com/qr/template/89014`}
                                        >
                                            QR Code
                                        </a>
                                    </div>
                                    :
                                    <>
                                        <h1 className="sm:text-3xl text-2xl font-extrabold">
                                            <strong className="font-extrabold underline block">
                                                {methodCode}
                                            </strong>
                                        </h1>
                                        <h1 className="sm:text-3xl text-2xl font-extrabold my-5 flex flex-nowrap justify-center items-center">
                                            <strong className="font-extrabold">
                                                {"No: "}
                                            </strong>
                                            <strong className="font-extrabold px-3 py-3 bg-black text-white">
                                                {paymentNo}
                                            </strong>
                                        </h1>
                                        <h1 className="sm:text-3xl text-2xl font-extrabold my-5">
                                            <strong className="font-extrabold">
                                                {paymentName}
                                            </strong>
                                        </h1>
                                    </>
                                }
                                <h1 className="text-3xl font-extrabold my-5 mx-10 py-3 bg-red-700 text-black">
                                    <strong className="font-extrabold">
                                        {"Total Bayar: "}
                                    </strong>
                                    <strong className="font-extrabold">
                                        Rp.{total}
                                    </strong>
                                </h1>

                                <p className="mt-4 sm:text-xl sm:leading-relaxed">
                                    Halo <strong>{Nama}</strong>, setalah kamu melakukan pembayaran, kami akan kirim ke email <strong>{Email}</strong> akun untuk kamu login ke dashboard. Terima Kasih 😉
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                        href={paymentIntrucionsDoc}
                                    >
                                        Cara Pembayaran
                                    </a>

                                    {/* <a
                                        className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                        href="/auth/login"
                                    >
                                        Selanjutnya
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default WaitingPayment