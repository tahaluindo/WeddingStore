import Image from "next/image";
import BridesVowIcon from "../../public/static/bridesvow.svg";
import Link from "next/link";
import { MdCorporateFare } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer>
        <section id="lainnya" className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center rounded-t-3xl bg-[#003153]">
            <div className="flex flex-col justify-center items-center p-10">
              <div className="col-span-1 flex justify-center items-center">
                <span className="flex justify-center mr-3">
                  <Image
                    className=""
                    width="40"
                    height="40"
                    alt={"BridesVow"}
                    src={BridesVowIcon.src}
                  ></Image>
                </span>
                <span className="font-bold text-2xl md:text-3xl text-white">
                  BridesVow
                </span>
              </div>
              <span className="text-white text-center">
                Platform Undangan Online Premium
              </span>
            </div>
            <div className="col-span-1 w-full flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center font-Poppins text-white">
                <div className="p-5 md:px-5 px-10 w-full">
                  <h1 className="text-xl font-bold py-5">Product</h1>
                  <ul>
                    <li>
                      <Link href="/collections">
                        <a className="hover:border-b-2">All product</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/brides">
                        <a className="hover:border-b-2">Dashboard</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/order">
                        <a className="hover:border-b-2">Order</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/confirmation">
                        <a className="hover:border-b-2">Confirmation</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="p-5 md:px-5 px-10 w-full">
                  <h1 className="text-xl font-bold py-5">Information</h1>
                  <ul>
                    <li>
                      <Link href="/faq">
                        <a className="hover:border-b-2">FAQ</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="hover:border-b-2">License</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="hover:border-b-2">Privacy Police</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="p-5 md:px-5 px-10 w-full">
                  <h1 className="text-xl font-bold py-5">About</h1>
                  <ul>
                    <li className="flex items-center">
                      <Link href="#">
                        <a className="hover:border-b-2">
                          <span>
                            <Image
                              className=""
                              width="20"
                              height="20"
                              alt={"BridesVow"}
                              src={BridesVowIcon.src}
                            ></Image>
                            <span className="pl-2">BridesVow</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link href="#">
                        <a className="hover:border-b-2">
                          <span className="flex justify-center">
                            <span className="w-[20px] h-[20px]">
                              <MdCorporateFare className="text-xl" />
                            </span>
                            <span className="pl-2">CV. Wirya Media</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className="flex items-center">
                      <Link href="#">
                        <a className="hover:border-b-2">
                          <span>
                            <Image
                              className=""
                              width="20"
                              height="20"
                              alt={"BridesVow"}
                              src={AvaBlue.src}
                            ></Image>
                            <span className="pl-2">Radifan Fariz</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link href="#">
                        <a className="hover:border-b-2">
                          <span>
                            <Image
                              className=""
                              width="20"
                              height="20"
                              alt={"BridesVow"}
                              src={AvaRed.src}
                            ></Image>
                            <span className="pl-2">Azis Fahri</span>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <Link href="#">
                        <a className="hover:border-b-2">
                          <span>
                            <Image
                              className=""
                              width="20"
                              height="20"
                              alt={"BridesVow"}
                              src={AvaYellow.src}
                            ></Image>
                            <span className="pl-2">Ikhwan Arjuna</span>
                          </span>
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full bg-[#267AAD]">
          <div className="flex flex-col justify-center items-center">
            {/* <div className="order-2 flex flex-col mt-8">
              <div className="grid grid-cols-3">
                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                  <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">
                    Radifan Fariz
                  </div>
                  <div className="order-1 flex justify-center w-[10vw]">
                    <Image
                      className="rounded-full object-cover max-w-full h-auto"
                      src={AvaBlue.src}
                      alt={"Ava"}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                  <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">
                    Azis Fahri
                  </div>
                  <div className="order-1 flex justify-center w-[10vw]">
                    <Image
                      className="rounded-full object-cover max-w-full h-auto"
                      src={AvaRed.src}
                      alt={"Ava"}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center xl:w-[120px]">
                  <div className="order-2 font-semibold font-[poppins] text-[0.5rem] xl:text-[12px] text-white pr-2">
                    Ikhwan Arjuna
                  </div>
                  <div className="order-1 flex justify-center w-[10vw]">
                    <Image
                      className="rounded-full object-cover max-w-full h-auto"
                      src={AvaYellow.src}
                      alt={"Ava"}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="order-3 flex flex-col justify-center items-center text-white font-semibold text-xs xl:text-[16px] mb-2 mt-2">
              <span>Copyright © 2022 CV. Wirya Media. All rights reserved.</span>
              <span>Developed by <a rel="noreferrer" className="hover:opacity-80" target="_blank" href="https://radifanfariz.tech/">Radifan Fariz</a></span>
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
  );
};

export default Footer;
