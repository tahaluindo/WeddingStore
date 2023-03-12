import { FaRegCalendarAlt } from "react-icons/fa"
import { useTimer } from "react-timer-hook"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Ring from '../../../public/static/manila/countdown-ring.png'
// import Vline from '../../../public/static/manila/countdown-vline.png'
import imageLoader from "../../../utils/imageLoader";
import { atcb_action } from "add-to-calendar-button";
import 'add-to-calendar-button/assets/css/atcb.css';
import Popup from "reactjs-popup";
import { GrClose } from "react-icons/gr";

const Countdown = ({ contents }) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')

    const timerObj = useTimer({ expiryTimestamp: contents.weddingDate.date, onExpire: () => setOpen(o => !o) })

    const weddingDate = `${contents.weddingDate.day} ${contents.weddingDate.monthName} ${contents.weddingDate.year} | Pukul ${contents.weddingDate.clock} WIB`

    useEffect(() => {
        setDays(timerObj.days)
        setHours(timerObj.hours)
        setMinutes(timerObj.minutes)
        setSeconds(timerObj.seconds)
    }, [timerObj.days, timerObj.hours, timerObj.minutes, timerObj.seconds]);

    const uniqueId = () => {
        return "id" + Math.random().toString(16).slice(2)
    }

    // add to calender 

    useEffect(() => {
        const addToCalenderConfig = {
            name: `Resepsi Pernikahan ${contents.cewekName} & ${contents.cowokName}`,
            description: `Hari ini adalah hari pernikahan ${contents.cewekName} & ${contents.cowokName}. Kehadiran kamu sangat berarti 😊`,
            startDate: contents.weddingDate.fullDateStandart,
            options: ['Apple', 'Google'],
            timeZone: "Asia/Jakarta",
            location: contents.locationUrl,
            iCalFileName: "Reminder-Event",
            listStyle: "modal",
        }
        const addToCalenderButton = document.querySelector('#default-button')
        addToCalenderButton.addEventListener('click', () => atcb_action(addToCalenderConfig, addToCalenderButton))
    }, [contents])

    return (
        <section className={"relative"}>
            <Image layout='fill' priority={true} loader={imageLoader} src={contents.src} alt='BgPhoto' objectFit='cover' objectPosition='center' />
            <div className="flex flex-col justify-center pt-56 h-full min-h-screen">
                <div className="flex justify-center z-10">
                    <div className="text-lg text-center font-semibold text-white">Nantikan hari bahagia kami</div>
                </div>
                <div className="flex justify-center mt-4 z-10">
                    <div className="flex justify-center items-center text-white font-[paradise] text-5xl">
                        {contents.cewekName} <span className="px-2"><Image priority={true} className="" width="80px" height="80px" src={Ring.src} alt='Ring' objectFit="contain" objectPosition="center" /></span> {contents.cowokName}
                    </div>
                </div>
                <div className="flex justify-center z-10">
                    <div className="text-white text-lg mt-4">{weddingDate}</div>
                </div>
                <div className="flex justify-center mt-3 z-10">
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#35584B] text-white h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{days}</span>
                        <span className="text-sm">Hari</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#35584B] text-white h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{hours}</span>
                        <span className="text-sm">Jam</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#35584B] text-white h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{minutes}</span>
                        <span className="text-sm">Menit</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#35584B] text-white h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{seconds}</span>
                        <span className="text-sm">Detik</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center z-10 font-[montserrat] mx-5 my-5">
                    <div className="flex justify-center">
                        <button id="default-button" className="flex justify-center items-center bg-white w-[210px] h-[30px] font-bold text-xs hover:bg-blue-200 rounded-xl text-black border-[1px]">
                            <span className="pr-1"><FaRegCalendarAlt /></span>
                            <span>save the date</span>
                        </button>
                        <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ width: '350px' }}>
                            <div className="container">
                                <a className="close" onClick={closeModal}>
                                    <GrClose className='hover:opacity-25' />
                                </a>
                                <div className="font-bold text-center text-black">
                                    Selamat Hari Pernikahan 🤵‍♂️👰‍♀️
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Countdown