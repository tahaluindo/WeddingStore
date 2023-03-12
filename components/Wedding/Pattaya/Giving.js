import Image from "next/image"
import BgTexture from "../../../public/static/pattaya/giving-bg.png"
import ContentImage from "../../../public/static/pattaya/giving-floralatas.png"
import ContentImage2 from "../../../public/static/pattaya/giving-floralbawah.png"
import Dompet from "../../../public/static/pattaya/giving-wallet.png"
import Kado from "../../../public/static/pattaya/giving-gift.png"
import Covid from "../../../public/static/pattaya/giving-covid.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useState } from "react"
import WalletModal from "../../Extra/WalletModal"
import GiftModal from "../../Extra/GiftModal"


const ContentSix = ({contents}) => {
    const [isOpenWallet, setIsOpenWallet] = useState(false)
    const [isOpenGift, setIsOpenGift] = useState(false)
    const closeWalletModal = () => setIsOpenWallet(false);
    const closeGiftModal = () => setIsOpenGift(false);

    return (
        <section className="relative">
            <div className="absolute min-h-screen h-full w-full flex flex-col justify-center">
                <Image priority={true} width={500} height={1800} src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col justify-start items-center h-full min-h-screen relative">
                    <div className="flex flex-col mx-40 z-10">
                        <Image priority={true} className="" width="100px" height="70px" src={ContentImage.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                        <div className="flex flex-col justify-center items-center w-full">
                            <div className="flex justify-center w-[200px] text-[#FFFDE3] font-[adelia] mt-5">Kata Pernikahan</div>
                            <div className="flex justify-center w-[270px] text-[#FFFDE3] text-center font-bold font-[montserrat] text-xs mt-3">Teruntuk keluarga, kerabat dan sahabat
                                yang ingin memberikan kado maupun hadiah,
                                silahkan mengirimkannya melalui
                                tautan di bawah ini:</div>
                            <div className="flex justify-between w-[150px] my-10">
                                <div className="flex justify-center" onClick={() => setIsOpenWallet(o => !o)}>
                                    <Image priority={true} className="" width="40px" height="40px" src={Dompet.src} alt='Dompet' objectFit="contain" objectPosition="center" />
                                </div>
                                <div className="flex justify-center" onClick={() => setIsOpenGift(o => !o)}>
                                    <Image priority={true} className="" width="40px" height="40px" src={Kado.src} alt='Kado' objectFit="contain" objectPosition="center" />
                                </div>
                            </div>
                        </div>
                        <WalletModal isOpen={isOpenWallet} closeModal={closeWalletModal} contents={contents.walletContents} />
                        <GiftModal isOpen={isOpenGift} closeModal={closeGiftModal} contents={contents.giftContents}/>
                        <Image priority={true} className="" width="100px" height="70px" src={ContentImage2.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                    </div>
                    <div className="flex justify-center items-center my-10 ml-5">
                        <Image priority={true} className="" width="350px" height="400px" src={Covid.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default ContentSix