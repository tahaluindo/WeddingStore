import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image'
import BgBase from "../../../public/static/pattaya/album-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader";
import MapsLocation from "../../Extra/MapsLocation";
import { PhotoProvider, PhotoView } from "react-photo-view";


const Album = ({ contents }) => {
    return (
        <section className="relative">
            <div className="absolute h-full w-full min-h-screen">
                <Image priority={true} className="" layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <MapsLocation contents={contents.maps} btnColor='bg-[#C9A663]'></MapsLocation>
                <div className="flex flex-col justify-around h-[600px] relative">
                    <div className="flex justify-center text-[#FFFDE3] text-xl font-[adelia] mt-48 mb-10">Galeri Foto</div>
                    <div className="flex justify-center w-full mb-44">
                        <PhotoProvider>
                            <Swiper
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
                                                    <PhotoView src={item}>
                                                        <Image className='rounded-3xl' layout='fill' loader={imageLoader} src={item} alt='template' objectFit="cover" />
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
        </section>
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