import Image from "next/image"
import ContentImage from "../../../public/static/shanghai/rsvp-giving-border-up.png"
import ContentImage2 from "../../../public/static/shanghai/rsvp-giving-border-down.png"
import Dompet from "../../../public/static/shanghai/giving-wallet.png"
import Kado from "../../../public/static/shanghai/giving-gift.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useState } from "react"
import WalletModal from "../../Extra/WalletModal"
import GiftModal from "../../Extra/GiftModal"


const Giving = ({contents}) => {
    const [isOpenWallet, setIsOpenWallet] = useState(false)
    const [isOpenGift, setIsOpenGift] = useState(false)
    const closeWalletModal = () => setIsOpenWallet(false);
    const closeGiftModal = () => setIsOpenGift(false);

    return (
        <section className="relative">
            <div className="absolute min-h-screen h-full w-full flex flex-col justify-center bg-[#763B13]">
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-start items-center h-full relative">
                    <div className="flex flex-col z-10">
                        <Image priority={true} className="" width="500px" height="25px" src={ContentImage.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="flex justify-center w-[200px] font-[adelia] text-lg mt-5 text-white">Kata Pernikahan</div>
                            <div className="flex justify-center w-[270px] text-center font-bold font-[montserrat] text-sm mt-3 text-white">Teruntuk keluarga, kerabat dan sahabat
                                yang ingin memberikan kado maupun hadiah,
                                silahkan mengirimkannya melalui
                                tautan di bawah ini:</div>
                            <div className="flex justify-between w-[250px] my-10">
                                <div className="flex justify-center" onClick={() => setIsOpenWallet(o => !o)}>
                                    <Image priority={true} className="" width="80px" height="80px" src={Dompet.src} alt='Dompet' objectFit="contain" objectPosition="center" />
                                </div>
                                <div className="flex justify-center" onClick={() => setIsOpenGift(o => !o)}>
                                    <Image priority={true} className="" width="80px" height="80px" src={Kado.src} alt='Kado' objectFit="contain" objectPosition="center" />
                                </div>
                            </div>
                        </div>
                        <WalletModal isOpen={isOpenWallet} closeModal={closeWalletModal} contents={contents.walletContents} />
                        <GiftModal isOpen={isOpenGift} closeModal={closeGiftModal} contents={contents.giftContents}/>
                        <Image priority={true} className="" width="500px" height="25px" src={ContentImage2.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Giving