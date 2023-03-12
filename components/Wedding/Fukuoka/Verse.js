import Image from "next/image"
import Ring from "../../../public/static/fukuoka/verse-ring.svg"
import BgBase from "../../../public/static/fukuoka/storyboards-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Verse = ({ contents }) => {
    return (
        <section className="relative">
            <div className="absolute h-full w-full flex flex-col justify-center">
                <Image priority={true} width={500} height={1200} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='top' />
            </div>
            <div className="py-8 px-4">
                <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                    <div className="flex flex-col justify-between relative items-center px-2 py-2 rounded-full bg-[#D0B95D]">
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