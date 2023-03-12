import Image from "next/image"
import Ring from "../../../public/static/manila/verse-ring.svg"
import BgTexture from "../../../public/static/manila/verse-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Verse = ({contents}) => {
    return (
        <section className="">
            <div className="bg-[#35584B] py-8 px-4">
                <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                    <div className="flex flex-col justify-between relative items-center px-2 py-2 rounded-full">
                        <Image priority={true} className='flex rounded-full absolute' layout='fill' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                        <div className="flex z-10">
                            <div className="flex justify-center w-[25px] mb-2">
                                <Image src={Ring.src} alt={"ring"} width={100} height={100} />
                            </div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-xs text-center px-6 text-white font-[montserrat]">{contents.ayatContent}</div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm mt-2 mb-2 text-white font-bold">{`( QS. ${contents.ayatName} )`}</div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}

export default Verse