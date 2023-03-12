import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image'
import BgBase from "../../../public/static/fukuoka/album-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import MapsLocation from "../../Extra/MapsLocation";
import imageLoader from "../../../utils/imageLoader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Album = ({ contents }) => {
    return (
        <section className="relative">
            <div className="absolute h-full w-full min-h-screen">
                <Image priority={true} className="" layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="mt-20">
                    <MapsLocation contents={contents.maps} btnColor='bg-[#D0B95D]'></MapsLocation>
                </div>
                <div className="flex flex-col justify-around h-[600px] relative">
                    <div className="px-10">
                        <div className="flex justify-center text-2xl font-[poppins] mt-10 text-white bg-[#D0B95D] rounded-full">Galeri Foto</div>
                    </div>
                    <div className="flex justify-center w-full mb-20">
                        <PhotoProvider>
                            <Swiper
                                centeredSlides={true}
                                centeredSlidesBounds={true}
                                effect={"coverflow"}
                                grabCursor={true} navigation={true} modules={[EffectCoverflow, Pagination, Navigation]}
                                spaceBetween={-80} slidesPerView={"auto"} coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={true} className="mySwiper">
                                {contents.gallery.length > 0 && contents.gallery.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="flex justify-center">
                                                <div className='w-72 h-[350px] relative'>
                                                    <PhotoView key={index} src={item}>
                                                        <a>
                                                            <Image className='rounded-3xl' layout='fill' loader={imageLoader} src={item} alt='template' objectFit="cover" />
                                                        </a>
                                                    </PhotoView>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </PhotoProvider>
                    </div>
                </div>
            </AnimationOnScroll>
        </section >
    )
}

export default Album


{/* <SwiperSlide>
<div className='w-[280px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide>
<SwiperSlide>
<div className='w-[300px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide>
<SwiperSlide>
<div className='w-[300px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide> */}