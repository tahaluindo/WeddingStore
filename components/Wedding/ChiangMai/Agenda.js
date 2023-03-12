import Image from "next/image"
import BgBase from "../../../public/static/chiangmai/agenda-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const Agenda = ({ contents }) => {

    return (
        <section className="relative">
            <div className="absolute">
                <Image priority={true} width={500} height={1500} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-around items-center h-full min-h-screen relative pb-32 pt-10">
                    <div className="flex flex-col px-10 z-10">
                        <div className="flex w-full justify-center">
                            <div className="absolute mt-10 z-20 flex justify-center w-full font-bold text-white text-xl">Akad Nikah</div>
                        </div>
                        <div className="relative mt-5 flex items-start justify-center">
                            <div className="absolute z-10 opacity-50 w-[300px] h-[250px] rounded-tl-[4rem] rounded-br-[4rem] bg-black "></div>
                            <Image priority={true} className="rounded-tl-[4rem] rounded-br-[4rem]" width="300px" height="250px" loader={imageLoader} src={contents.akad.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                            <div className="absolute mt-20 z-20 flex flex-col items-center justify-center text-center w-full px-5 text-white">
                                <span className="text-lg mb-2">{contents.akad.date.fullDate2}</span>
                                <span>{contents.akad.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-10 z-10">
                        <div className="flex w-full justify-center">
                            <div className="absolute mt-10 z-20 flex justify-center w-full font-bold text-white text-xl">Resepsi</div>
                        </div>
                        <div className="relative mt-5 flex items-start justify-center">
                            <div className="absolute z-10 opacity-50 w-[300px] h-[250px] rounded-tl-[4rem] rounded-br-[4rem] bg-black "></div>
                            <Image priority={true} className="rounded-tl-[4rem] rounded-br-[4rem]" width="300px" height="250px" loader={imageLoader} src={contents.wedding.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                            <div className="absolute mt-20 z-20 flex flex-col items-center justify-center text-center w-full px-5 text-white">
                                <span className="text-lg mb-2">{contents.wedding.date.fullDate2}</span>
                                <span>{contents.wedding.address}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Agenda