import Lottie from "react-lottie";
import { useRouter } from "next/router";
import successPaymentAnimation from "../../../public/animation/success-payment.json"

const SuccessPayment = ({ data }) => {
    const router = useRouter();
    const { orderId } = router.query;
    const { Nama } = data

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successPaymentAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <section className="flex justify-center px-2 font-[poppins] text-black">
                <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                    <section className="bg-gray-50">
                        <div
                            className="mx-auto max-w-screen-xl px-4 py-10 lg:flex g:items-center" >
                            <div className="mx-auto max-w-xl text-center">
                                <Lottie
                                    options={defaultOptions}
                                    height={200}
                                    width={200}
                                />
                                <h1 className="text-3xl font-extrabold text-green-700 sm:text-5xl">
                                    {"Pembayaran Sukses"}
                                </h1>
                                <h1 className="sm:text-3xl text-2xl font-extrabold my-5">
                                    <strong className="font-extrabold sm:block">
                                        {"OrderId:"}
                                    </strong>
                                    <strong className="font-extrabold sm:block">
                                        {orderId}
                                    </strong>
                                </h1>

                                <p className="mt-4 sm:text-xl sm:leading-relaxed">
                                    Yuhuu 😊, pembayaran kamu telah berhasil <strong>{Nama}</strong>, setelah kamu menerima email, kamu dapat klik tombol <strong>Selanjutnya</strong>. Terima Kasih 👍
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-500 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                                        href={"/auth/login"}
                                    >
                                        Selanjutnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </section>
        </>
    )
}

export default SuccessPayment