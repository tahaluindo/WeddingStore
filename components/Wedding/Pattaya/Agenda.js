import Image from 'next/image'
import BgTexture from '../../../public/static/pattaya/agenda-bg.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Agenda = ({ contents }) => {
    return (
        <section className="relative">
            <div className="absolute h-full min-h-[600px] w-full flex flex-col justify-between">
                <Image layout='fill' priority={true} src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col h-full min-h-[600px] justify-center">
                    <div className="flex z-10 justify-center items-center">
                        <div className="text-[#FFFDE3] text-[40px] text-center font-[damion] tracking-[2px]">
                            {
                                `Akad Nikah`
                            }
                        </div>
                    </div>
                    <div className="flex flex-col z-10 justify-center items-center">
                        <div className="text-[22px] text-center text-[#FFFDE3] font-serif tracking-[2px]">
                            {
                                contents.akad.date.fullDate2
                            }
                        </div>
                        <div className="text-[16px] w-[200px] mt-5 text-center text-[#FFFDE3] font-[belghrano] tracking-[2px]">
                            {
                                contents.akad.address
                            }
                        </div>
                    </div>
                    <div className="flex flex-col mt-10 z-10 justify-center items-center">
                        <div className="text-[40px] text-center text-[#FFFDE3] font-[damion] tracking-[2px]">
                            {
                                `Resepsi Nikah`
                            }
                        </div>
                        <div className="text-[22px] text-center text-[#FFFDE3] font-serif tracking-[2px]">
                            {
                                contents.wedding.date.fullDate2
                            }
                        </div>
                        <div className="text-[16px] w-[200px] mt-5 text-center text-[#FFFDE3] font-[belgrano] tracking-[2px]">
                            {
                                contents.wedding.address
                            }
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Agenda