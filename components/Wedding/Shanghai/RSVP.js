import Image from 'next/image'
import { database } from '../../../firebaseConsole'
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import ContentImage from "../../../public/static/shanghai/rsvp-giving-border-up.png"

const RSVP = ({ contents }) => {

    const dbInstance = collection(database, `rsvp_${contents.dbName}`)

    const [name, setName] = useState('')
    const [isAttending, setIsAttending] = useState(false)
    const [createdAt, setCreatedAt] = useState(Timestamp.now().toDate())
    const [userChoice, setUserChoice] = useState('tidakHadir')

    const [disabledClass, setDisabledClass] = useState('')

    const attendingFunc = (value) => {
        setUserChoice(value)
        if (value == 'tidakHadir') {
            setIsAttending(false)
        } else {
            setIsAttending(true)
        }
    }

    const addRSVP = () => {

        setName('')
        setIsAttending(false)
        setCreatedAt(Timestamp.now().toDate())

        let rsvpData = {
            name: name,
            isAttending: isAttending,
            createdAt: createdAt,
        }

        /* without database(firebase) */
        // setCommentItems([...commentItems, commentData])

        addDoc(dbInstance, rsvpData)
            .then(() => {
                setDisabledClass('pointer-events-none opacity-50')
            })
    }

    return (
        <>
            <section className="relative">
                <div className="absolute h-full w-full min-h-screen bg-[#763B13]">
                </div>
                <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <Image priority={true} className="" width="500px" height="25px" src={ContentImage.src} alt='BgTexture' objectFit='contain' objectPosition='center' />
                    <div className={`flex flex-col items-center mt-10 ${disabledClass} `}>
                        <div className="flex justify-center mt-8 z-10">
                            <div className="bg-black rounded-full px-32 font-bold z-10 text-white text-2xl font-[poppins]">RSVP</div>
                        </div>
                        <div className="flex text-sm justify-center font-[montserrat] font-bold w-[270px] pt-5 text-center z-10">
                            <div className="text-black">Kedatangan Bapak/Ibu/Saudara/i sangat berarti bagi kami, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
                                Terima kasih.</div>
                        </div>
                        <div className="flex flex-col justify-center z-10 font-[poppins] mx-5 my-5">
                            <div className="flex flex-col w-full p-5 pb-8 z-50">
                                <div className="flex">
                                    <input onChange={(e) => setName(e.target.value)} className="w-full px-5 py-2 rounded-xl text-black" type="text" name="nama" id="nama" placeholder="Nama" value={name} />
                                </div>
                                <div className="flex items-center mt-5">
                                    <select name="" id="" className="rounded-xl p-2 w-full bg-white text-black" defaultValue={userChoice} onChange={(e) => attendingFunc(e.target.value)}>
                                        <option value="hadir">Hadir</option>
                                        <option value="tidakHadir">Tidak Hadir</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {(name === '') ?
                                <button disabled className="bg-[#50290F] bg-opacity-25 w-[200px] h-[30px] font-bold text-sm rounded-full text-white border-[1px] border-black">
                                    Disabled
                                </button> :
                                <button onClick={addRSVP} className="bg-[#50290F] w-[200px] h-[30px] font-bold text-sm hover:bg-blue-200 rounded-full text-white border-[1px] border-black">
                                    Kirim
                                </button>
                            }
                        </div>
                        <div className="pb-10"></div>
                    </div>
                </AnimationOnScroll>
            </section>
        </>
    )
}

export default RSVP