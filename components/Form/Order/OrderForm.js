import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import uniqid from 'uniqid';
import copy from "copy-to-clipboard";
import { DataContext } from "../../../pages/order";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const env = process.env.NODE_ENV

const OrderForm = ({ data, setDataOrderForm }) => {
  // console.log(data)
  // const contents = {
  //     gallery: ["/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png"]
  // }
  const router = useRouter();
  const { paket } = router.query;
  const { register } = useFormContext();

  ////state////
  const { orderDataContextRef } = useContext(DataContext)
  const [namaPaket, setNamaPaket] = useState("default");
  const orderIdRef = useRef(null)
  if (orderIdRef.current === null) {
    orderIdRef.current = uniqid('bridesvow-')
  }
  const orderIdRefValue = orderIdRef.current
  orderDataContextRef.current['orderId'] = orderIdRefValue
  /////////////

  const handleSelect = (event) => {
    setDataOrderForm({
      paket: "Null",
      template: "Null",
      harga: 0,
    });
    setNamaPaket(event.target.value);
  };

  const copyToClipboard = (copyText) => {
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  }

  useEffect(() => {
    setNamaPaket(paket?.toLowerCase());
  }, [paket]);

  const [isShowPassword, setIsShowPassword] = useState(false)
  const handleClickPassword = () => {
      setIsShowPassword(!isShowPassword)
  }

  return (
    <>
      <section className="flex justify-center xl:m-0 m-auto px-2 font-[poppins] xl:w-1/3 w-full max-w-3xl">
        <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl min-w-full bg-white">
          <div className="flex justify-center">
            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">
              Order
            </span>
          </div>
          <span className="divider"></span>
          <div className="flex flex-col items-center">
            <label className="label">
              <span className="label-text font-bold text-black">
                ORDER ID
              </span>
            </label>
            <input
              {...register("orderId", { value: orderIdRefValue })}
              name="orderId"
              type="text"
              placeholder="OrderId"
              className="input input-bordered sm:w-1/2 w-full max-w-full text-center bg-black text-white cursor-pointer"
              required
              onClick={() => copyToClipboard(orderIdRefValue)}
              readOnly={true}
            />
          </div>
          <div className="form-control w-full">
            <div>
              <label className="label">
                <span className="label-text font-bold text-black">
                  Pilihan Paket{<span className="text-red-600">*</span>}
                </span>
              </label>
              <select
                name="paket"
                {...register("paket")}
                value={namaPaket}
                onChange={handleSelect}
                className="select select-bordered w-full max-w-full bg-white text-black"
                required
              >
                <option
                  value={"default"}
                  disabled={namaPaket === "" ? false : true}
                >
                  Pick one
                </option>
                {data.map((item) => {
                  switch (item.paket_undangan.nama) {
                    case "Gold":
                      return (
                        <option
                          key={item.paket_undangan.nama}
                          value={item.paket_undangan.nama.toLowerCase()}
                        >{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) 🟡`}</option>
                      );
                    case "Platinum":
                      return (
                        <option
                          key={item.paket_undangan.nama}
                          value={item.paket_undangan.nama.toLowerCase()}
                        >{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) ⚪`}</option>
                      );
                    case "Diamond":
                      return (
                        <option
                          key={item.paket_undangan.nama}
                          value={item.paket_undangan.nama.toLowerCase()}
                        >{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) ⚫`}</option>
                      );
                    default:
                      break;
                  }
                })}
              </select>
            </div>
            <div className="flex">
              <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                mousewheel={true}
                grabCursor={false}
                navigation={false}
                modules={[Pagination, Navigation, Mousewheel]}
                spaceBetween={0}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                }}
                slidesPerView={1}
                pagination={true}
                className="mySwiper"
              >
                {data.map((paket) => {
                  if (namaPaket === paket.paket_undangan.nama.toLowerCase()) {
                    return paket.paket_undangan.template_undangan.map(
                      (template) => {
                        // console.log(namaPaket)
                        return (
                          <SwiperSlide key={template.data.nama}>
                            <div className="flex flex-col pr-5 text-black">
                              <div className="label">
                                <Link href={`/preview/${template.data.slug}`}>
                                  <a target={"_blank"} className="relative">
                                    <Image
                                      priority="true"
                                      layout="intrinsic"
                                      width={120}
                                      height={250}
                                      src={(env = "development") ? `http://localhost:1338${template.data.url}`:`${template.data.url}`}
                                      alt="Template"
                                      objectFit="contain"
                                    />
                                    <div className="flex relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">
                                      Click Preview
                                    </div>
                                  </a>
                                </Link>
                              </div>
                              <div className="flex items-center">
                                <label htmlFor={template.data.nama}>
                                  <input
                                    name="template"
                                    className="mr-2"
                                    {...register("template")}
                                    type="radio"
                                    value={template.id}
                                    onChange={() => {
                                      setDataOrderForm({
                                        paket: paket.paket_undangan.nama,
                                        template: template.data.nama,
                                        harga: paket.paket_undangan.harga,
                                      });
                                    }}
                                    required
                                  />
                                  {template.data.nama}
                                </label>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      }
                    );
                  }
                })}
              </Swiper>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold text-black">
                  Nama Pemesan{<span className="text-red-600">*</span>}
                </span>
              </label>
              <input
                name="nama"
                {...register("nama")}
                type="text"
                placeholder="Nama"
                className="input input-bordered w-full max-w-full bg-white text-black"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold text-black">
                  Nomor WA{<span className="text-red-600">*</span>}
                </span>
              </label>
              <div className="w-full max-w-full">
                <label className="input-group">
                  <span>
                    <BsWhatsapp />
                  </span>
                  <input
                    name="noHP"
                    {...register("noHP")}
                    type="tel"
                    pattern="[0-9]{12}"
                    placeholder="08221234567"
                    className="input input-bordered w-full bg-white text-black"
                    required
                  />
                </label>
              </div>
            </div>
            <div className="relative border-2 rounded-2xl p-5 mt-3">
              <label className="text-white font-bold bg-black rounded-xl p-1 px-2">Akun untuk login ke Dashboard</label>
              <label className="label mt-3">
                <span className="label-text font-bold text-black">
                  E-mail{<span className="text-red-600">*</span>}
                </span>
              </label>
              <div className="w-full max-w-full">
                <label className="input-group">
                  <span>
                    <MdAlternateEmail />
                  </span>
                  <input
                    name="email"
                    {...register("email")}
                    type="email"
                    placeholder="user@site.com"
                    className="input input-bordered w-full bg-white text-black"
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text font-bold text-black">Password{<span className="text-red-600">*</span>}</span>
                </label>
                <div className="flex justify-center items-center relative">
                  <input minLength={8} {...register("password")} type={isShowPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                  <span className={`absolute right-0 px-2 text-2xl ${isShowPassword ? "opacity-100" : "opacity-50"}`} onClick={handleClickPassword}>{isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
                </div>
              </div>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold text-black">
                  Kota/Kabupaten
                </span>
              </label>
              <input
                name="kota"
                {...register("kota")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-full bg-white text-black"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-bold text-black">
                  Alamat Pemesan
                </span>
              </label>
              <textarea
                name="alamat"
                {...register("alamat")}
                className="textarea textarea-bordered w-full max-w-full bg-white text-black"
                placeholder="Alamat"
                required
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderForm;
