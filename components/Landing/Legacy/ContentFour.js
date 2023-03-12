import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Mokap from '../../public/static/landing/mokap1.png'
import Mokap2 from '../../public/static/landing/mokap2.png'
import Mokap3 from '../../public/static/landing/mokap3.png'
import Mokap4 from '../../public/static/landing/mokap4.png'


const ContentFour = () => {

    const [isDesktop, setDesktop] = useState(typeof window !== "undefined" && window.innerWidth >= 768)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    }, [isDesktop])

    // const handleClick = (e, path) => {
    //     e.preventDefault()
    //     switch (path) {
    //         case "/preview/first":
    //             Router.push(path)
    //         default:
    //             Router.push("/")
    //     }
    // }

    return (
        <section className="relative w-full">
            <div className="flex flex-col justify-center items-center pt-10 rounded-t-3xl bg-[#3689bb]">
                <div className="flex flex-col items-center">
                    <div id="katalog" className="flex justify-center">
                        <span className="font-[poppins] font-bold xl:text-[58px] text-[1.3rem] text-black xl:my-20 mb-5">Katalog Desain</span>
                    </div>
                    <div className="flex justify-center xl:max-w-7xl max-w-[90vw] xl:mb-32 mb-16">
                        <Swiper mousewheel={true} navigation={true} modules={[Navigation,Mousewheel]} spaceBetween={isDesktop ? -30 : 100} slidesPerView={isDesktop ? 3 : 1} className="mySwiper rounded-[100px] border-4 border-black">
                            <SwiperSlide>
                                <div className='xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5'>
                                    <Link href={"/preview/first"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Mokap.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5'>
                                    <Link href={"/preview/second"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Mokap2.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5'>
                                    <Link href={"/preview/third"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Mokap3.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5'>
                                    <Link href={"/preview/fourth"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Mokap4.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContentFour

// onClick={(e) => {handleClick(e,'/preview/first')}} 
