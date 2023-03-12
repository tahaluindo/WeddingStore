import Image from "next/image"
import BgBase from "../../../public/static/songkhla/agenda-bg.png"
import Bunga from "../../../public/static/songkhla/agenda-bunga.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Agenda = ({ contents }) => {
    return (
        <section className="relative">
            <div className="absolute">
                <Image priority={true} width={500} height={1500} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-evenly items-center h-full min-h-screen relative pb-32 pt-10 ">
                    <Image priority={true} width={200} height={200} src={Bunga.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                    <div className="bg-[#D9D9D9] bg-opacity-50 w-[285px] rounded-xl py-10 mx-10">
                        <div className="flex flex-col z-10">
                            <div className="flex flex-col items-center justify-center">
                                <div className="z-20 flex justify-center font-[damion] font-bold text-black text-4xl">Akad Nikah</div>
                                <div className="mt-10 z-20 flex justify-center font-[abhayalibre] font-bold text-black text-xl">{contents.akad.date.fullDate2}</div>
                                <div className="mt-5 z-20 flex justify-center font-[abhayalibre] font-bold text-black text-xl">{ contents.akad.address}</div>
                            </div>
                        </div>
                        <div className="flex flex-col z-10 mt-10">
                            <div className="flex flex-col items-center justify-center">
                                <div className="z-20 flex justify-center font-[damion] font-bold text-black text-4xl">Resepsi</div>
                                <div className="mt-10 z-20 flex justify-center font-[abhayalibre] font-bold text-black text-xl">{ contents.wedding.date.fullDate2}</div>
                                <div className="mt-5 z-20 flex justify-center font-[abhayalibre] font-bold text-black text-xl">{contents.wedding.address}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Agenda