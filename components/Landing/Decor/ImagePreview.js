import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import imageLoader from "../../../utils/imageLoader";

const ImagePreview = ({data}) => {
  // const handleClick = (e, path) => {
  //     e.preventDefault()
  //     switch (path) {
  //         case "/preview/first":
  //             Router.push(path)
  //         default:
  //             Router.push("/")
  //     }
  // }

  const imageData = [
    {
      id: "1",
      name: "mokap",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "2",
      name: "mokap2",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "3",
      name: "mokap3",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "4",
      name: "mokap4",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
    {
      id: "5",
      name: "mokap5",
      src: "/static/landing/mokap1.png",
      link: "/preview/first",
    },
  ];

  const env = process.env.NODE_ENV

  return (
    <section className="relative w-full">
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col items-center">
          <div className="flex justify-center xl:max-w-7xl max-w-[90vw] relative">
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
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: -30,
                },
              }}
              className="mySwiper rounded-[100px] border-4 border-black "
            >
              {data.map((itemImage) => {
                return (
                  <SwiperSlide key={itemImage.data.nama} className="flex justify-center">
                    <div className="xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative my-5">
                      <div className="mockup-phone h-full w-full">
                        <div className="camera"></div>
                        <div className="display h-full">
                          <Link href={`/preview/${itemImage.data.slug}`}>
                            <a target={"_blank"} className="group">
                              <Image
                                priority={true}
                                className=""
                                layout="fill"
                                src={(env == "development") ?`http://localhost:1338${itemImage.data.url}`:`${itemImage.data.url}`}
                                loader={imageLoader}
                                alt="product"
                              />
                              <div className="flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                                  {itemImage.data.nama}
                                </h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                  {itemImage.data.nama}
                                </p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="xl:w-[350px] xl:h-[700px] w-[70vw] h-[70vh] max-w-[300px] xl:max-w-[100%] relative ml-8 my-5">
                      <Link href={itemImage.link}>
                        <a target={"_blank"} className="relative">
                          <Image
                            priority={true}
                            className=""
                            layout="fill"
                            src={`${itemImage.src}`}
                            loader={imageLoader}
                            alt="product"
                          />
                          <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">
                            Click Preview
                          </div>
                        </a>
                      </Link>
                    </div> */}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
};

export default ImagePreview;

// onClick={(e) => {handleClick(e,'/preview/first')}}
