import { FaMapMarkerAlt } from "react-icons/fa"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const MapsLocation = ({ contents, btnColor, btnTextColor='text-white' }) => {

    const handleClick = () => {
        window.open(contents.locationUrl);
    }

    return (
        <main className="relative">
            <div className="flex flex-col relative">
                {/* <Image priority='true' layout='fill' src={BgTexture.src} alt='bgFill' objectFit='cover' objectPosition='center' /> */}
                {/* <div className="flex justify-center p-10 mt-8 z-10">
                    <div className="text-lg text-center font-extrabold">Acara pernikahan akan dilaksanakan pada</div>
                </div> */}
                <div className="flex flex-col justify-center z-10 font-[montserrat] mx-5 mt-10">
                    {/* <div className="flex justify-center">
                        <MapsComponents />
                    </div> */}
                    <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: contents.iframe }}>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button onClick={handleClick} className={`flex  justify-center items-center ${btnColor} w-[180px] h-[35px] text-xs hover:bg-blue-200 rounded-full ${btnTextColor} border-[1px] border-black`}>
                            <span className="pr-5"><FaMapMarkerAlt /></span>
                            Lihat lokasi
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MapsLocation