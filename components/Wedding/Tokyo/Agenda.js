import Image from "next/image"
import BgBase from "../../../public/static/tokyo/agenda-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const Agenda = ({ contents }) => {

    return (
        <section className="relative bg-[#faced2]">
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-around items-center h-full min-h-screen relative pb-32 pt-10 px-10 mt-20 font-[poppins]">
                    <div className="flex flex-col px-10 pb-20 z-10 rounded-t-[4rem] bg-white">
                        <div className="relative mt-10 z-20 flex flex-col items-center justify-center text-center w-full px-5 text-black">
                            <span className="z-20 flex justify-center w-full font-bold text-black text-2xl">Akad Nikah</span>
                            <div className="divider"></div>
                            <span className="text-lg mb-10 font-bold">{contents.akad.date.fullDate2}</span>
                            <span>{contents.akad.address}</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 px-10 pb-20 z-10 rounded-b-[4rem] bg-white font-[poppins]">
                        <div className="relative mt-10 z-20 flex flex-col items-center justify-center text-center w-full px-5 text-black">
                            <span className="z-20 flex justify-center w-full font-bold text-black text-2xl">Resepsi</span>
                            <div className="divider"></div>
                            <span className="text-lg mb-10 font-bold">{contents.wedding.date.fullDate2}</span>
                            <span>{contents.wedding.address}</span>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Agenda