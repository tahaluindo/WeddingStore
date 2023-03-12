import React from 'react';
import Popup from 'reactjs-popup';
import { RiFileCopyLine } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';
import copy from "copy-to-clipboard";

const GiftModal = ({ isOpen = false, closeModal, contents }) => {

    // const [copyText, setCopyText] = useState("08123456789")

    // const handleCopyText = (text) => {
    //     setCopyText(text);
    //  } 

    const copyToClipboard = (copyText) => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }

    return (
        <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}
            contentStyle={{ width: '350px' }}
        >
            <div className="container">
                <a className="close" onClick={closeModal}>
                    <GrClose className='hover:opacity-25'/>
                </a>
                <div className="font-bold text-center text-black">
                    Alamat Kirim
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col my-5  w-[300px] rounded-3xl shadow-2xl">
                        <div className="flex justify-center">
                            <div className="flex flex-col items-center text-black">
                                <div className="text-[13px] font-bold p-5 pb-0">{contents.name}</div>
                                <div className="text-[13px] font-bold p-5 pb-0 pt-1">{contents.number}</div>
                                <div className="text-[13px] text-center p-5 pt-2">
                                    {contents.address}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mb-5">
                            <button onClick={() => copyToClipboard(contents.address)} className="w-[150px] bg-black text-white rounded-full p-1 hover:bg-blue-200">
                                <div className="flex justify-center items-center">
                                    <RiFileCopyLine />
                                    <span className="text-[12px] ml-2">salin alamat</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default GiftModal