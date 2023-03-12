import Image from "next/image"
import Link from "next/link"
import imageLoader from "../../utils/imageLoader"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const env = process.env.NODE_ENV
const Collections = ({ data }) => {
    return (
        <section className="flex justify-center px-2 font-[poppins] text-black">
            <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-6xl bg-white">
                <div className="flex justify-center">
                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Koleksi Undangan</span>
                </div>
                <span className="divider"></span>
                {data.map((paketItem) => {
                    return (
                        <div key={paketItem.paket_undangan.nama} className="container pb-10 mx-auto">
                            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
                                {paketItem.paket_undangan.nama}
                            </h1>
                            <p className="mt-4 text-center text-gray-500 dark:text-gray-800">
                                {paketItem.paket_undangan.fitur}
                            </p>
                            <Swiper
                                mousewheel={true}
                                navigation={true}
                                modules={[Navigation, Mousewheel]}
                                breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 100,
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 1,
                                        spaceBetween: 100,
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: -30,
                                    },
                                    // // when window width is >= 1024px
                                    // 1024: {
                                    //     slidesPerView: 3,
                                    //     spaceBetween: -30,
                                    // },
                                }}
                                className="mySwiper rounded-[100px] border-4 border-black mt-5"
                            >
                                {paketItem.paket_undangan.template_undangan.map(((templateItem) => {
                                    return (
                                        <SwiperSlide key={templateItem.data.nama} className="flex justify-center p-2">
                                            <div className="xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative my-5">
                                                {
                                                        <div key={templateItem.data.nama} className="mockup-phone h-full w-full">
                                                            <div className="camera"></div>
                                                            <div className="display h-full w-full">
                                                                <Link href={`/preview/${templateItem.data.slug}`}>
                                                                    <a target={"_blank"} className="group">
                                                                        <Image
                                                                            priority={true}
                                                                            className=""
                                                                            layout="fill"
                                                                            src={(env == "development")?`http://localhost:1338${templateItem.data.url}`:`${templateItem.data.url}`}
                                                                            loader={imageLoader}
                                                                            alt="product"
                                                                        />
                                                                        <div className="flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                                                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                                                                                {templateItem.data.nama}
                                                                            </h2>
                                                                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                                                                {templateItem.data.nama}
                                                                            </p>
                                                                        </div>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        </SwiperSlide>
                                    )
                                }))}
                            </Swiper>
                            <div className="flex justify-center mt-5">
                                <a className="btn btn-wide hover:bg-gray-500 text-white" href={`/order/?paket=${paketItem.paket_undangan.nama}`}>Order</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Collections