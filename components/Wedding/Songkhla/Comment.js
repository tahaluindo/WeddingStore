import Image from 'next/image'
import BgBase from '../../../public/static/songkhla/comment-bg.png'
import { AiFillCheckCircle } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"
import { app, database } from '../../../firebaseConsole'
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import moment from 'moment'
import { toDateTime } from '../../../utils/formatDate'


const CommentView = ({ name, isHadir, comment, createdAt }) => {

    const dateTime = toDateTime(Timestamp.now().seconds - createdAt.seconds)

    return (
        <div className="bg-white">
            <div className="flex border-t-[1px] border-black w-full px-5 py-4">
                <div className="w-[20px] h-[20px] rounded-full bg-[#FAEBCD]"></div>
                <div className="flex flex-col px-2">
                    <div className="flex flex-col">
                        <div className="flex text-xs">
                            <span className="font-extrabold text-[#F7C873]">
                                {name}
                            </span>
                            <div className="flex justify-center items-center w-[80px] ml-2 pr-2 text-white bg-[#F7C873] rounded-full">
                                <span className='pr-1 pl-1'><AiFillCheckCircle /></span>
                                <span className="text-[7px] font-extrabold">
                                    {isHadir === true ? "Hadir" : "Tidak Hadir"}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center text-[8px]">
                            <span className="pr-1"><BiTimeFive /></span>
                            {moment().from(dateTime)}
                        </div>
                        <div className="text-[10px]">
                            {comment}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const uniqueId = () => {
//     return "id" + Math.random().toString(16).slice(2)
// }

const Comment = ({contents}) => {

    const dbInstance = collection(database, `comment_${contents.dbName}`)

    const getData = async () => {
        await getDocs(query(dbInstance, orderBy("createdAt", "desc")))
            .then((data) => {
                setCommentItems(data.docs.map((item) => {
                    return { ...item.data(), id: item.id }
                }))
            })
    }

    useEffect(() => {
        getData()
    }, [])


    const [commentItems, setCommentItems] = useState([])
    const [name, setName] = useState('')
    const [commentText, setCommentText] = useState('')
    const [createdAt, setCreatedAt] = useState(Timestamp.now().toDate())


    const addComment = () => {

        setName('')
        setCommentText('')
        setCreatedAt(Timestamp.now().toDate())

        let commentData = {
            name: name,
            commentText: commentText,
            createdAt: createdAt,
        }

        /* without database(firebase) */
        // setCommentItems([...commentItems, commentData])

        addDoc(dbInstance, commentData)
            .then(() => {
                getData()
            })
    }

    return (
        <section className="relative">
            <div className="absolute h-full w-full min-h-screen">
                <Image priority={true} layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col items-center mt-10">
                    <div className="flex justify-center mt-8 z-10">
                        <div className="text-3xl font-[abhayalibre] font-extrabold text-black">Harapan dan Doa Restu</div>
                    </div>
                    <div className="flex text-sm justify-center font-[montserrat] font-bold w-[270px] pt-5 text-center z-10">
                        <div className="text-black">Dengan rendah hati, kami memohon Doa Restu yang sangat berarti bagi kami</div>
                    </div>
                    <div className="flex flex-col justify-center z-10 font-[montserrat] mx-5 my-5">
                        <div className="flex flex-col w-full p-5 pb-8 z-50">
                            <div className="flex">
                                <input onChange={(e) => setName(e.target.value)} className="w-full px-5 py-2 rounded-xl" type="text" name="nama" id="nama" placeholder="Nama" value={name} />
                            </div>
                            <div className="pt-5">
                                <textarea onChange={(e) => setCommentText(e.target.value)} className="w-full p-1 px-5 rounded-xl" name="comment" id="comment" cols="30" rows="5" placeholder="Berikan Harapan dan Doa" value={commentText}></textarea>
                            </div>
                            <div className="flex justify-center pt-5">
                                {(name === '' || commentText === '') ?
                                    <button disabled className="bg-[#FAEBCD] bg-opacity-25 w-[200px] h-[30px] font-bold text-sm rounded-full text-black border-[1px] border-black">
                                        Disabled
                                    </button> :
                                    <button onClick={addComment} className="bg-[#FAEBCD] w-[200px] h-[30px] font-bold text-sm hover:bg-[#fef2da] rounded-full text-black border-[1px] border-black">
                                        Kirim
                                    </button>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col max-h-[350px] overflow-auto text-black">
                            {commentItems.length > 0 && commentItems.map((item) => {
                                return (
                                    <CommentView key={item.id} name={item.name} isHadir={item.isHadir} comment={item.commentText} createdAt={item.createdAt} />
                                )
                            })}
                        </div>
                    </div>
                    <div className="pb-10"></div>
                </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Comment