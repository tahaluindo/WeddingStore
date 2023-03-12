import Image from "next/image"
import BgBase from "../../../public/static/manila/outro-bg.png"
import Border from "../../../public/static/manila/outro-bunga.png"
import Divider from "../../../public/static/manila/outro-divider.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const Outro = ({contents}) => {
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
                    <div className="flex justify-center p-24">
                        <Image layout="fixed" priority={true} className="rounded-full object-fit max-w-full h-auto" loader={imageLoader} src={contents.src} alt='avatar' width={200} height={200} />
                    </div>
                    <div className="relative">
                        <div className="absolute flex justify-center w-full -bottom-16">
                            <Image layout="fixed" priority={true} className="" src={Border.src} alt='bunga' width={350} height={350} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-[adelia] text-white">Terima kasih</div>
                    </div>
                    <div className="flex justify-center my-5">
                        <Image priority={true} className="" src={Divider.src} alt='bunga' width={800} height={30} />
                    </div>
                    <div className="flex justify-center mb-20">
                        <div className="font-bold text-white">{contents.cewekName} & {contents.cowokName}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Outro