import Image from "next/image"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const Outro = ({ contents }) => {
    return (
        <section className="relative">
            {/* <div className="absolute h-full w-full min-h-screen flex flex-col justify-start">
                <Image priority={true} className="" src={BgBawah.src} width={500} height={200} alt='BgTexture' />
            </div> */}
            <div className="absolute h-full w-full flex flex-col justify-center grayscale">
                <Image priority={true} width={500} height={1200} loader={imageLoader} src={contents.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col justify-center items-center relative m-10">
                    <div className=" bg-white w-[100%] h-[100%] rounded-xl absolute opacity-60"></div>
                    <div className="flex flex-col justify-center pt-10 p-5 relative">
                        <div className="text-center text-[12px] text-black font-[montserrat]">Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                            <span className="block mt-2 text-center"> Wassalamu’alaikum Wr. Wb. </span>
                        </div>
                        <div className="flex justify-center items-center pt-10 pb-5">
                            <div className="font-[adelia] text-[24px] text-black">{contents.cewekName} & {contents.cowokName}</div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Outro