import Image from "next/image"
import imageLoader from "../../../utils/imageLoader"
import { useFormContext, useWatch } from "react-hook-form";
import { Children, memo, useContext, useEffect, useState } from "react";
import { DataContext } from "../../../pages/order";

const PaymentMethod = ({ methodCode, methodDescription, children }) => {

    return (
        <>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box dark:text-white mt-2">
                <input type="checkbox" className="w-full" />
                <div className="collapse-title text-md font-medium">
                    <span className="font-bold">{methodDescription}</span>
                </div>
                <div className="collapse-content">
                    {children}
                </div>
            </div>
        </>
    )
}

const PaymentChannel = ({ other, methodCode, channelCode, channelDescription }) => {
    const { register, getValues, setValue } = useFormContext();
    const { orderDataContextRef } = useContext(DataContext)
    const handleChange = (event) => {
        orderDataContextRef.current["methodCode"] = methodCode
        orderDataContextRef.current["channelCode"] = event.target.value
        orderDataContextRef.current["paymentIntrucionsDoc"] = other.PaymentIntrucionsDoc
        // console.log(redirectQueryStringDataContext.current)
        // console.log(getValues("paymentChannel"))
    }
    return (
        <>
            <div className="flex items-center">
                <input {...register("paymentChannel")} type="radio" value={channelCode} className="radio" onChange={handleChange} required />
                <span className="label-text px-2 text-black dark:text-white">{channelDescription}</span>
                <Image className='' src={`/static/wallet/${channelCode}.png`} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
            </div>
        </>
    )
}

const OrderPayment = ({ paymentList }) => {
    return (
        <>
            <div className="flex flex-col">
                <div className="label my-4 m-auto">
                    <span className="font-bold text-lg">Metode Pembayaran</span>
                </div>
                <div className="flex justify-center mb-2">
                    <div className="alert alert-info shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Cara pembayaran dapat dilihat <br /> setelah click tombol bayar !</span>
                        </div>
                    </div>
                </div>
                {
                    paymentList.map((paymentMethod, index) => {
                        switch (paymentMethod.Code) {
                            case "va":
                                // console.log(paymentMethod.Code)
                                return (
                                    <PaymentMethod key={paymentMethod.Code} methodCode={paymentMethod.Code} methodDescription={paymentMethod.Description}>
                                        {
                                            paymentMethod.Channels.map((paymentChannel) => {
                                                return (
                                                    <PaymentChannel key={paymentChannel.Code} other={paymentChannel} methodCode={paymentMethod.Code} channelCode={paymentChannel.Code} channelDescription={paymentChannel.Description} />
                                                )
                                            })
                                        }
                                    </PaymentMethod>
                                )
                            case "qris":
                                // console.log(paymentMethod.Code)
                                return (
                                    <PaymentMethod key={paymentMethod.Code} methodCode={paymentMethod.Code} methodDescription={paymentMethod.Description}>
                                        {
                                            paymentMethod.PaymentMethod.map((paymentSubMethod, index) => {
                                                return (
                                                    <PaymentChannel key={paymentSubMethod.Code} other={paymentSubMethod} methodCode={paymentMethod.Code} channelCode={paymentSubMethod.Code} channelDescription={paymentSubMethod.Description} />
                                                )
                                            })
                                        }
                                    </PaymentMethod>
                                )
                            default:
                                break;
                        }
                    })
                }
            </div>
        </>
    )
}

export default memo(OrderPayment)


//// Manual Payment

// const OrderPaymentManual = () => {
//     return (
//         <>
//             <div className="flex flex-col pr-5">
//                 <div className="label my-4">
//                     <span className="font-bold">Metode Pembayaran</span>
//                 </div>
//                 <div className="flex items-center">
//                     <input type="radio" name="radio-1" className="radio" defaultChecked={true} />
//                     <span className="label-text px-2 text-black">Bank Transfer - BNI</span>
//                     <Image className='' src={"/static/wallet/bni.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
//                 </div>
//                 <div className="flex items-center">
//                     <input type="radio" name="radio-1" className="radio" />
//                     <span className="label-text px-2 text-black">Dana</span>
//                     <Image className='' src={"/static/wallet/dana.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
//                 </div>
//                 <div className="flex items-center">
//                     <input type="radio" name="radio-1" className="radio" />
//                     <span className="label-text px-2 text-black">OVO</span>
//                     <Image className='' src={"/static/wallet/ovo.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
//                 </div>
//             </div>
//         </>
//     )
// }