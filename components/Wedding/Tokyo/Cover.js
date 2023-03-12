import Image from 'next/image'
import { useEffect, useState } from 'react'
import BgBase from '../../../public/static/tokyo/cover-bg.png'
import Bunga from '../../../public/static/tokyo/cover-bunga.svg'
import { HiOutlineMailOpen } from 'react-icons/hi'

const Cover = ({ contents, isPlayerReady, playMusicCallback }) => {
    const [open, setOpen] = useState("fixed w-full max-w-[400px] xl:max-w-[500px] z-50 animate-fall")
    const [isBtnDisabled, setBtnDisabled] = useState(true)
    const [btnStyle, setBtnStyle] = useState({
        title: "Loading...",
        style: "bg-white opacity-50 w-[185px] h-[36px] hover:opacity-25 p-2 m-5 mt-4 rounded-full text-black border-[1px] border-black",
    })

    const handleClick = () => {
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
                style: "bg-black w-[185px] h-[36px] hover:opacity-25 p-2 m-5 mt-4 rounded-full text-white border-[1px] border-black",
            })
            setBtnDisabled(false)
        }
    }, [isPlayerReady])

    return (
        <header className={open}>
            <div className="absolute h-full min-h-screen w-full flex flex-col justify-between">
                <Image layout='fill' priority={true} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <div className="flex flex-col h-full min-h-screen justify-center">
                <div className="flex flex-col z-10 justify-center items-center">
                    <div className="text-[20px] text-black font-[Poppins] pb-3">Teruntuk</div>
                    <div className="text-[30px] text-black font-extrabold font-[playfairDisplay] tracking-[2px]">Calon Tamu</div>
                </div>
                <div className="flex z-10 justify-center items-center text-black tracking-[7px]">
                    <Image layout='intrinsic' width={"300"} height={"250"} priority={true} src={Bunga.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                </div>
                <div className="flex flex-col z-10 justify-center items-center">
                    <div className="text-lg text-black text-center font-[poppins] pb-2">kamu diundang ke pernikahan</div>
                    <div className="font-bold text-3xl text-black text-center font-[playfair] pb-2">{`${contents.cewekName} & ${contents.cowokName}`}</div>
                </div>
                {/* <div className="flex z-10 justify-center items-center text-black py-7 tracking-[7px]">
                    <div className="font-bold text-2xl">
                        <span>{contents.weddingDate.day}</span>
                        <span>.</span>
                        <span>{contents.weddingDate.month}</span>
                        <span>.</span>
                        <span>{contents.weddingDate.year}</span>
                    </div>
                </div> */}
                <div className="flex justify-center z-10">
                    <button disabled={isBtnDisabled} className={btnStyle.style} onClick={handleClick}>
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