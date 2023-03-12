import Image from 'next/image'
import { useEffect, useState } from 'react'
import BgBase from '../../../public/static/songkhla/cover-bg.png'
import { HiOutlineMailOpen } from 'react-icons/hi'

const Cover = ({ contents, isPlayerReady, playMusicCallback }) => {
    const [open, setOpen] = useState("fixed w-full max-w-[400px] xl:max-w-[500px] z-50 animate-fall")
    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const [btnStyle, setBtnStyle] = useState({
        title: "Loading...",
        style: "bg-white opacity-50 w-[185px] h-[36px] hover:opacity-25 p-2 m-5 mt-4 rounded-full text-black border-[1px] border-black",
    })

    const animateHeader = () => {
        setOpen("fixed w-full max-w-[400px] xl:max-w-[500px] z-50 animate-fly")
        setTimeout(() => {
            setOpen("hidden")
        }, 800)
        scrollToTop()
        if (isPlayerReady) {
            playMusicCallback(true)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        if (isPlayerReady) {
            setBtnStyle({
                title: "Buka Undangan",
                style: "bg-[#FAEBCD] w-[185px] h-[36px] hover:opacity-25 p-2 m-5 mt-4 rounded-full text-black border-[1px] border-black",
            })
            setBtnDisabled(false)
        }
    }, [isPlayerReady])

    ////query string/////
    // const router = useRouter()
    // const {to} = router.query

    return (
        <header className={open}>
            <div className="absolute h-full min-h-screen w-full flex flex-col justify-between">
                <Image layout='fill' priority={true} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <div className="flex flex-col h-full min-h-screen justify-center">
                <div className="flex z-10 justify-center items-center relative">
                    <div className="text-[20px] text-black font-bold font-[montserrat-extrabold] tracking-[2px] absolute mb-32">Undangan Pernikahan</div>
                </div>
                <div className="flex z-10 justify-center items-center pt-5 px-24">
                    <div className="text-7xl text-black text-center font-[richard] container">
                        <span className="flex justify-start w-[50%]">{contents.cewekName}</span>
                        <span className="block">&</span>
                        <span className="flex justify-end">{contents.cowokName}</span>
                    </div>
                </div>
                <div className="flex z-10 justify-center items-center text-black py-7 tracking-[7px]">
                    <div className="font-bold text-2xl">
                        <span>{contents.weddingDate.day}</span>
                        <span>.</span>
                        <span>{contents.weddingDate.month}</span>
                        <span>.</span>
                        <span>{contents.weddingDate.year}</span>
                    </div>
                </div>
                <div className="flex justify-center z-10">
                    <button disabled={isBtnDisabled} className={btnStyle.style} onClick={animateHeader}>
                        <div className="flex justify-center">
                            <HiOutlineMailOpen />
                            <span className="pl-1 text-[12px] font-extrabold">
                                {btnStyle.title}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Cover