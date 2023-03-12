import { AiFillHeart } from "react-icons/ai"
import Image from "next/image"
import BgBase from "../../../public/static/manila/storyboards-bg.png"
import Road from '../../../public/static/manila/storyboards-road.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Storyboards = ({ contents }) => {
    return (
        <section className="relative">
            <Image priority={true} className="" layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col h-full min-h-screen relative overflow-hidden min-w-full my-10">
                    <div className="flex justify-center pt-10 z-10">
                        <div className="bg-[#35584B] rounded-full px-16 font-bold z-10 text-white text-2xl font-[poppins]">Perjalanan Cinta</div>
                    </div>
                    <div className="flex flex-col px-10 z-10 relative">
                        <div className="absolute w-full h-full top-12 right-24 z-50">
                            <Image priority={true} layout='fixed' width={550} height={550} src={Road.src} alt='BgTexture' objectFit='contain' objectPosition='top' />
                        </div>
                        <div className="flex mt-[-0.5rem] relative top-[4rem] right-4">
                            <div className="flex flex-col">
                                <div className="flex justify-center relative">
                                    <div className="flex items-center text-xs text-black w-[380px] min-h-[170px] font-['montserrat'] p-5 relative -left-10 bg-white rounded-r-full shadow-xl">
                                        <span className="w-[300px] text-right pr-5 max-h-[130px] overflow-auto">{contents.perjalanan1}</span>
                                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#35584B]">
                                            <AiFillHeart className="text-2xl text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex relative top-[4.5rem] right-4">
                            <div className="flex flex-col">
                                <div className="flex justify-center relative">
                                    <div className="flex items-center text-xs text-black pl-2 w-[400px] min-h-[170px] font-['montserrat'] p-5 relative bg-white rounded-l-full shadow-xl">
                                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#35584B]">
                                            <AiFillHeart className="text-2xl text-white" />
                                        </div>
                                        <span className="w-[300px] text-left pl-5 max-h-[130px] overflow-auto">{contents.perjalanan1}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pb-16 relative top-[5.5rem] right-4">
                            <div className="flex flex-col">
                                <div className="flex justify-center relative">
                                    <div className="flex items-center text-xs text-black w-[380px] min-h-[170px] font-['montserrat'] p-5 relative -left-10 bg-white rounded-r-full shadow-xl">
                                        <span className="w-[300px] text-right pr-5 max-h-[130px] overflow-auto">{contents.perjalanan1}</span>
                                        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#35584B]">
                                            <AiFillHeart className="text-2xl text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Storyboards