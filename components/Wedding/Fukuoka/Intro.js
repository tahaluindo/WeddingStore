import Image from 'next/image'
import Border from '../../../public/static/fukuoka/intro-border.svg'
import BgBase from '../../../public/static/fukuoka/intro-bg.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from '../../../utils/imageLoader'


const Intro = ({ contents }) => {

    // const [animate, setAnimate] = useState("hidden")

    // useEffect(() => {
    //     let prevScrollpos = window.pageYOffset
    //     window.onscroll = () => {
    //         let currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos < currentScrollPos) {
    //             setAnimate("animate-fall")
    //         }
    //     }
    // }, [])


    return (
        <section className="relative">
            <Image layout='fill' priority={true} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='bottom' />
            <div className="flex flex-col h-full min-h-screen justify-start">
                <div>
                    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                        <div className="relative">
                            <div className="flex flex-col bottom-10 pb-32 pt-10">
                                <div className="flex justify-center relative top-12">
                                    <div className="bg-[#D0B95D] rounded-full px-16 font-bold z-10 text-white text-2xl font-[poppins]">Calon Pengantin</div>
                                </div>
                                <div className="relative">
                                    <div className="flex justify-center p-28 pb-20">
                                        <div className="relative">
                                            <Image layout="fixed" priority={true} className="rounded-full" loader={imageLoader} src={contents.cewek.src} alt='avatar' width={200} height={200} objectFit='cover' objectPosition='top' />
                                        </div>
                                        <div className="absolute">
                                            <div className="relative bottom-[75px]">
                                                <Image layout='fixed' priority={true} className="" src={Border.src} alt='bunga' width={370} height={350} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bottom-[70px]">
                                    <div className="flex flex-col z-10">
                                        <div className="flex justify-center ">
                                            <div className="text-4xl font-bold font-['playfairDisplay'] text-white my-2">{contents.cewek.name}</div>
                                        </div>
                                        <div className="flex flex-col font-[montserrat]">
                                            <div className="flex justify-center text-white font-extrabold">{contents.cewek.fullName}</div>
                                            <div className="flex justify-center text-center">
                                                <div className="flex justify-center text-white w-[70%]">putri dari {contents.cewek.ayahName} dan {contents.cewek.ibuName}</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="text-3xl text-white font-[playfair] font-bold mt-5">{"&"}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="flex justify-center p-28 pb-20 pt-0">
                                        <div className="relative">
                                            <Image layout="fixed" priority={true} className="rounded-full" loader={imageLoader} src={contents.cowok.src} alt='avatar' width={200} height={200} objectFit='cover' objectPosition='top' />
                                        </div>
                                        <div className="absolute">
                                            <div className="relative bottom-[75px]">
                                                <Image layout='fixed' priority={true} className="" src={Border.src} alt='bunga' width={370} height={350} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative bottom-[70px]">
                                    <div className="flex flex-col z-10">
                                        <div className="flex justify-center">
                                            <div className="text-4xl font-bold font-['playfairDisplay'] text-white my-2">{contents.cowok.name}</div>
                                        </div>
                                        <div className="flex flex-col font-[montserrat]">
                                            <div className="flex justify-center text-white font-extrabold">{contents.cowok.fullName}</div>
                                            <div className="flex justify-center text-center">
                                                <div className="flex justify-center text-white w-[70%]">putri dari {contents.cowok.ayahName} dan {contents.cowok.ibuName}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default Intro