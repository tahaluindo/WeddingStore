import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import { IoMdCreate } from "react-icons/io"


const MainContent = ({ children }) => {

    // const [isDesktop, setDesktop] = useState(typeof window !== "undefined" && window.innerWidth >= 768)

    // const updateMedia = () => {
    //     setDesktop(window.innerWidth > 768)
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", updateMedia)
    //     return () => window.removeEventListener("resize", updateMedia)
    // }, [isDesktop])

    return (
        // <section id="beranda" className="w-full relative bg-[url('/static/landing/background.png')] bg-cover bg-top">
        <section id="beranda" className="w-full relative">
            {/* <div className="h-[100px] xl:h-full w-full">
                <Image priority='true' layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div> */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center xl:mb-44">
                    <div className="flex justify-center w-fit max-w-[100vw] z-10 md:mt-40 mt-20 px-10 py-5 text-center xl:text-8xl text-5xl font-extrabold font-['montserrat-extrabold'] text-white [text-shadow:6px_6px_#003153] [-webkit-text-stroke:2px_black] leading-none">Undangan Pernikahan Online</div>
                    <div className="flex flex-col items-center w-fit max-w-[100vw] z-10 text-center text-white xl:text-3xl text-md font-['poppins'] font-bold capitalize">
                        <span className="block">Hello, Bride and Groom to be</span>
                        <span className="block">Ayo bagikan momen bahagiamu dengan menggunakan</span>
                        <span className="block">undangan online dari BridesVow</span>
                    </div>
                    {children}
                    <Link href="/collections">
                        <a className="xl:text-3xl text-xl text-white font-bold font-Poppins pt-5 hover:border-b-2 border-white">View all</a>
                    </Link>
                    <div className="mt-10 mb-16 z-10">
                        <Link href="/order">
                            <a><button className="btn xl:btn-lg btn-md capitalize bg-[#003153] hover:bg-slate-400 text-xl xl:text-[32px] text-white font-bold w-[70vw] max-w-[300px] xl:max-w-[100%] xl:w-[420px] xl:h-[50px] rounded-full">
                                Buat Sekarang
                                <IoMdCreate className="relative inset-1" />
                            </button></a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default MainContent

// onClick={(e) => {handleClick(e,'/preview/first')}} 
