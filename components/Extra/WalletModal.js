import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { RiFileCopyLine } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import Image from 'next/image';
import copy from "copy-to-clipboard";

const WalletModal = ({ isOpen = false, closeModal, contents }) => {

    const copyToClipboard = (copyText) => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }

    const uniqueId = () => {
        return "id" + Math.random().toString(16).slice(2)
    }

    return (
        <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}
            contentStyle={{ width: '350px' }}
        >
            <div className="container">
                <a className="close" onClick={closeModal}>
                    <GrClose className='hover:opacity-25' />
                </a>
                <div className="font-bold text-center text-black">
                    Nomor Rekening / E- Wallet
                </div>
                <div className="overflow-auto max-h-96">
                    {contents.length > 0 && contents.map((item) => {
                        return (
                            <div key={uniqueId()} className="flex flex-col justify-center items-center">
                                <div className="flex flex-col my-5 w-[300px] h-[120px] rounded-3xl shadow-lg">
                                    <div className="flex items-start justify-evenly font-[montserrat] mt-5">
                                        <div className="flex flex-col text-black">
                                            <div className="text-[13px] pb-0">{item.name}</div>
                                            <div className="text-[13px] pt-1">{item.number}</div>
                                        </div>
                                        <div className='flex'>
                                            <Image className='' src={item.src} width={80} height={50} alt='template' objectFit="contain" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button onClick={() => copyToClipboard(item.number)} className="w-[150px] bg-black text-white rounded-full p-1 mt-2 hover:bg-blue-200">
                                            <div className="flex justify-center items-center">
                                                <RiFileCopyLine />
                                                <span className="text-[12px] ml-2">salin nomor</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Popup>
    )
}

export default WalletModal