import { useState } from "react";
import Popup from "reactjs-popup"

const WarningStaticPopUp = ({ title, message, buttonName }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [animationModal, setAnimationModal] = useState("")
    const closeModal = () => {
        setAnimationModal("animate-ping")
        setTimeout(() => {
            setIsOpen(false);
        }, 1000)
    }
    return (
        <>
            <Popup open={isOpen} closeOnDocumentClick={false} >
                <div className={`fixed xl:inset-y-0 inset-y-1/3 right-0 bottom-0 p-5 mt-10 xl:mt-0 ${animationModal}`}>
                    <div className="relative max-w-xl rounded-2xl bg-orange-500 p-6 shadow-sm">
                        <button
                            type="button"
                            className="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
                            onClick={closeModal}
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        <div className="grid grid-cols-1 gap-4 sm:w-96">


                            <div>
                                <h2 className="text-2xl font-bold font-Poppins">
                                    {title}
                                </h2>

                                <p className="mt-4 text-sm text-white font-bold font-Poppins">
                                    {message}
                                </p>

                                <div className="mt-6 sm:text-right font-bold font-Poppins">
                                    <a
                                        href="#"
                                        className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
                                        onClick={closeModal}
                                    >
                                        {buttonName}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Popup>
        </>
    )
}

export default WarningStaticPopUp