import Image from "next/image"
import BridesVowIcon from "../../../public/static/bridesvow.svg"
import { BsWhatsapp } from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"

const Header = () => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);
    const handleOnChange = () => {
        setNavMenuOpen(!isNavMenuOpen)
    }


    return (
        <>
            <div className="flex justify-center p-3 z-50 fixed w-full">
                <div className="navbar bg-base-100 rounded-full xl:w-[1200px] h-[1vh] md:h-[100px] lg:p-3 md:p-5">
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="btn btn-ghost normal-case text-5xl lg:text-2xl md:text-3xl">
                                <span className="flex justify-center mr-3">
                                    <Image className="" width="40" height="40" alt={"BridesVow"} src={BridesVowIcon.src}></Image>
                                </span>
                                <span className="font-bold text-2xl md:text-3xl">
                                    BridesVow
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <div className={`dropdown dropdown-end dropdown-open`}>
                            <label tabIndex={0} className="swap swap-rotate btn btn-ghost h-full xl:hidden">

                                <input name="burger" type="checkbox" checked={isNavMenuOpen} className="hidden" onChange={handleOnChange} />


                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                            </label>
                            <ul tabIndex={0} className={`${isNavMenuOpen ? "" : "hidden"} xl:hidden menu menu-compact dropdown-content m-5 p-5 shadow bg-base-100 rounded-box`}>
                                <li><a href="#beranda" className="font-bold text-lg p-5 py-2 w-60"><span className="hover:border-b-4 border-[#003153]">Beranda</span></a></li>
                                <li><a href="#fitur" className="font-bold text-lg p-5 py-2 w-60"><span className="hover:border-b-4 border-[#003153]">Fitur</span></a></li>
                                <li><a href="#cara" className="font-bold text-lg p-5 py-2 w-60"><span className="hover:border-b-4 border-[#003153]">Cara Pesan</span></a></li>
                                <li><a href="#paket" className="font-bold text-lg p-5 py-2 w-60"><span className="hover:border-b-4 border-[#003153]">Paket</span></a></li>
                                <li><a href="#katalog" className="font-bold text-lg p-5 py-2 w-60"><span className="hover:border-b-4 border-[#003153]">Katalog</span></a></li>
                                <Link href={"https://wa.me/085173079585"} >
                                    <a target="_blank" className="btn xl:btn-lg btn-md h-[5vh] bg-[#003153] mr-24 w-full rounded-full mt-5 mb-3">
                                        <div className="flex justify-center items-center">
                                            <span className="mr-3 text-lg text-white">
                                                <BsWhatsapp />
                                            </span>
                                            <span className="capitalize text-lg text-white">
                                                Hubungi Kami
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end hidden xl:flex w-full">
                        <ul className="menu menu-horizontal p-0">
                            <li><a href="#beranda" className="font-bold"><span className="hover:border-b-4 border-[#003153] text-2xl">Beranda</span></a></li>
                            <li><a href="#fitur" className="font-bold "><span className="hover:border-b-4 border-[#003153] text-2xl">Fitur</span></a></li>
                            <li><a href="#cara" className="flex justify-center font-bold w-[155px]"><span className="hover:border-b-4 border-[#003153] text-2xl">Cara Pesan</span></a></li>
                            <li><a href="#paket" className="font-bold"><span className="hover:border-b-4 border-[#003153] text-2xl">Paket</span></a></li>
                            <li><a href="#katalog" className="font-bold"><span className="hover:border-b-4 border-[#003153] text-2xl">Katalog</span></a></li>
                            <Link href={"https://wa.me/085173079585"}>
                                <a target="_blank" className="btn btn-lg bg-[#003153] mr-5 ml-5 rounded-full">
                                    <span className="mr-2 text-white">
                                        <BsWhatsapp />
                                    </span>
                                    <span className="capitalize text-2xl text-white">
                                        Hubungi Kami
                                    </span>
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header