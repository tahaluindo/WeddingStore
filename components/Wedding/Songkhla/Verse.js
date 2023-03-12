import Image from "next/image"
import Ring from "../../../public/static/songkhla/verse-ring.svg"
import BgTexture from "../../../public/static/songkhla/verse-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Verse = ({ contents }) => {
    return (
        <section className="relative">
            <Image priority={true} className="" layout='fill' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="relative py-6 px-4">
                    <div className="flex flex-col justify-between relative items-center mx-5 px-2 py-2 rounded-3xl bg-[#D9D9D9]">
                        <div className="flex z-10">
                            <div className="flex justify-center w-[25px] mb-2">
                                <Image src={Ring.src} alt={"ring"} width={100} height={100} />
                            </div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm text-center px-6 text-black font-[damion]">
                                {contents.ayatContent}
                            </div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm mt-2 mb-2 text-black font-bold font-[damion]">{`( QS. ${contents.ayatName} )`}</div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Verse