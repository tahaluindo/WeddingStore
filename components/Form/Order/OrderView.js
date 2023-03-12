import { useEffect, useState } from "react"
import { randomThreeNum } from "../../../utils/randomNum"
import ReCAPTCHA from "react-google-recaptcha"
import OrderPayment from "./OrderPayment"
import { useCallback } from "react"
import { useMemo } from "react"

const OrderView = ({ paymentList, dataOrderForm, setTotalHarga, setCaptchaValue }) => {

    const [threeUniqueDigit, setThreeUniqueDigit] = useState(0)

    const randomNum = useCallback(() => randomThreeNum, [])
    const harga = dataOrderForm.harga

    useEffect(() => {
        const totalHarga = harga + threeUniqueDigit
        setTotalHarga(totalHarga)
    }, [harga,setTotalHarga,threeUniqueDigit])

    useEffect(() => {
        setThreeUniqueDigit(randomNum())
    },[randomNum])


    return (
        <>
            <section className="inline-flex justify-center xl:inline font-[poppins] text-black px-2">
                <div className="my-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <span className="flex justify-center font-bold text-xl">Pesanan Kamu</span>
                    <div className="text-sm">
                        <div className="flex justify-between font-bold">
                            <span>Produk</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="divider mt-0"></div>
                        <div className="flex justify-between">
                            <span>{`${dataOrderForm.paket} - ${dataOrderForm.template}`}</span>
                            <span className="font-bold">{`Rp.${harga}`}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span>Kode Unik Pesanan</span>
                            <span className="font-bold">{`Rp.${threeUniqueDigit}`}</span>
                        </div>
                        <div className="divider my-0"></div>
                        <div className="flex justify-between pt-2 font-bold">
                            <span>Total</span>
                            <span className="font-bold">{`Rp.${threeUniqueDigit + harga}`}</span>
                        </div>
                        <div className="divider mt-2"></div>
                        <OrderPayment paymentList={paymentList} />
                        <div className="flex justify-center pt-2">
                            <ReCAPTCHA
                                sitekey="6Le05zkkAAAAAFSIWIA25tFw7q3iPorutTh3vrtU"
                                onChange={value => setCaptchaValue(value)}
                            />
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Bayar</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderView