import Image from "next/image"
import BgBase from "../../../public/static/songkhla/outro-bg.png"
import Bunga from "../../../public/static/songkhla/outro-bunga.png"
import ContentImage from "../../../public/static/songkhla/outro-divider.svg"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const Outro = ({ contents }) => {
    return (
        <section className="relative">
            {/* <div className="absolute h-full w-full min-h-screen flex flex-col justify-start">
                <Image priority={true} className="" src={BgBawah.src} width={500} height={200} alt='BgTexture' />
            </div> */}
            <div className="absolute h-full w-full flex flex-col justify-center">
                <Image priority={true} width={500} height={1200} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-start h-[50%]">
                    <div className="flex justify-center p-24 px-0">
                        <Image layout="fixed" priority={true} className="rounded-[4rem] object-fit max-w-full h-auto" loader={imageLoader} src={contents.src} alt='avatar' width={300} height={250} objectFit="cover" objectPosition="top" />
                    </div>
                    <div className="relative">
                        <div className="flex justify-center w-full absolute bottom-[0px] transform-gpu">
                            <Image layout="fixed" priority={true} className="" src={Bunga.src} alt='bunga' width={350} height={200} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-[adelia] text-black text-2xl">Terima kasih</div>
                    </div>
                    <div className="flex justify-center my-5">
                        <Image priority={true} className="" src={ContentImage.src} alt='bunga' width={800} height={30} />
                    </div>
                    <div className="flex justify-center mb-20">
                        <div className="font-bold text-black font-[antonio] text-xl">{contents.cewekName} & {contents.cowokName}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Outro