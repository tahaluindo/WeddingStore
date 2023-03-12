import { useEffect } from "react";
import { useState } from "react";
import Popup from "reactjs-popup"

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

const LoadingPopUp = ({ openPopUp }) => {

    const [open, setOpen] = useState(openPopUp)
    useEffect(() => {
        setOpen(openPopUp)
    }, [openPopUp])

    return (
        <Popup open={open} closeOnDocumentClick={false}
            {...{ overlayStyle }}
        >
            <div className="flex justify-center items-center">
                <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#03385d]">
                    </div>
                    <svg
                        className="h-10 w-10 flex-shrink-0 text-gray-500 absolute"
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 681 681"
                    >
                        <defs>
                            <style
                                dangerouslySetInnerHTML={{
                                    __html:
                                        ".cls-1{fill:none;stroke-miterlimit:10;stroke-width:120px;stroke:url(#linear-gradient);}"
                                }}
                            />
                            <linearGradient
                                id="linear-gradient"
                                x1={525}
                                y1="762.5"
                                x2={1206}
                                y2="762.5"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset={0} stopColor="#2a81b6" />
                                <stop offset={1} stopColor="#003153" />
                            </linearGradient>
                        </defs>
                        <path
                            className="cls-1"
                            d="M1146,868a175.53,175.53,0,0,1-175,175H585V657c0-1,0-2.1,0-3.14s0-1.83.07-2.75A175,175,0,0,1,935,657v36h36C1067.25,693,1146,771.75,1146,868Z"
                            transform="translate(-525 -422)"
                        />
                    </svg>
                </div>
            </div>
        </Popup>
    )
}

export default LoadingPopUp