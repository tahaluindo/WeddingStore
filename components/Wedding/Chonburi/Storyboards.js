import { AiFillHeart } from "react-icons/ai"
import Image from "next/image"
import BgBase from "../../../public/static/chonburi/storyboard-bg.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Storyboards = ({ contents }) => {
    return (
        <section className="relative">
            <Image priority={true} className="" layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col h-full min-h-screen relative">
                    <div className="flex px-10 pt-10 pb-3 z-10">
                        <div className="text-4xl ml-5 font-bold italic font-['adela'] text-[#FFFDE3]">Perjalanan Cinta Kami</div>
                    </div>
                    <div className="flex flex-col z-10">
                        <div className="flex mt-5 px-2">
                            <div className="flex flex-col">
                                <div className="relative z-10 top-5">
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#7e0e0e]">
                                        <AiFillHeart className="text-2xl text-white" />
                                    </div>
                                </div>
                                <div className="flex justify-center relative">
                                    <span className="flex w-[3px] h-[250px]"></span>
                                    <div className="flex text-xs w-[300px] min-h-[200px] font-['montserrat'] p-5 absolute left-[22px] bg-white rounded-r-3xl shadow-xl">
                                        {contents.perjalanan1}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-5 pl-16">
                            <div className="flex flex-col">
                                <div className="relative z-10 top-5">
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#7e0e0e]">
                                        <AiFillHeart className="text-2xl text-white" />
                                    </div>
                                </div>
                                <div className="flex justify-center relative">
                                    <span className="flex w-[3px] h-[250px]"></span>
                                    <div className="flex text-xs w-[300px] min-h-[200px] font-['montserrat'] p-5 absolute left-[22px] bg-white rounded-r-3xl shadow-xl">
                                        {contents.perjalanan2}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-2">
                            <div className="flex flex-col">
                                <div className="relative z-10 top-5">
                                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#7e0e0e]">
                                        <AiFillHeart className="text-2xl text-white" />
                                    </div>
                                </div>
                                <div className="flex justify-center relative">
                                    <span className="flex w-[3px] h-[250px]"></span>
                                    <div className="flex text-xs w-[300px] min-h-[200px] font-['montserrat'] p-5 absolute left-[22px] bg-white rounded-r-3xl shadow-xl">
                                        {contents.perjalanan3}
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