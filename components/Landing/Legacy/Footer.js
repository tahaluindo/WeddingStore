import Image from "next/image"
import AvaRed from "../../public/static/landing/avaredcircle.svg"
import AvaBlue from "../../public/static/landing/avabluecircle.svg"
import AvaYellow from "../../public/static/landing/avayellowcircle.svg"

const Footer = () => {
    return (
        <>
            <footer>
                <section className="relative w-full bg-[#003153]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="order-2 flex flex-col mt-8">
                            <div className="grid grid-cols-3">
                                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                                    <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">Radifan Fariz</div>
                                    <div className="order-1 flex justify-center w-[10vw]">
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={AvaBlue.src} alt={"Ava"} width={50} height={50} />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                                    <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">Azis Fahri</div>
                                    <div className="order-1 flex justify-center w-[10vw]">
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={AvaRed.src} alt={"Ava"} width={50} height={50} />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                                    <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">Ikhwan Arjuna</div>
                                    <div className="order-1 flex justify-center w-[10vw]">
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={AvaYellow.src} alt={"Ava"} width={50} height={50} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-3 flex justify-center items-center text-white font-semibold text-xs xl:text-[16px] mb-5 mt-1">
                            Copyright © 2022 BridesVow, Inc. All rights reserved.
                            {/* <div className="order-1 flex flex-row ml-2">
                                <div className="text-5xl hover:opacity-25">
                                    <Link href={"#"}>
                                        <a><AiFillInstagram className="text-white text-7xl xl:text-4xl" /></a>
                                    </Link>
                                </div>
                                <div className="text-5xl hover:opacity-25 ml-1">
                                    <Link href={"#"}>
                                        <a><IoLogoWhatsapp className="text-white text-7xl xl:text-4xl" /></a>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer