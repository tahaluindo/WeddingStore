import { useCallback, useEffect, useState } from 'react'
import { database } from '../../../firebaseConsole'
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'
import { toDateTime } from '../../../utils/formatDate'
import moment from 'moment'
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
import { GrRefresh } from 'react-icons/gr'
import Loading from '../../Global/SkeletonLoading'
import NotFound from '../../Global/NotFound'
import Image from 'next/image'

let totalComments = 0

const Comments = ({ orderId }) => {

    const [commentItems, setCommentItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dbInstance = collection(database, `comment_${orderId}`)

    const getData = async () => {
        setIsLoading(true)
        totalComments = 0
        await getDocs(query(dbInstance, orderBy("createdAt", "desc")))
            .then((data) => {
                setCommentItems(data.docs.map((item) => {
                    totalComments++
                    return { ...item.data(), id: item.id }
                }))
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (commentItems.length <= 0) {
        return (
            <NotFound />
        )
    }
    return (
        <>
            <section className="w-full">
                <div className="flex justify-center">
                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Komentar</span>
                </div>
                <div className="flex justify-center items-center p-5 pt-10 font-[poppins]">
                    <div className="overflow-x-auto overflow-y-auto xl:w-3/4">
                        <div className='flex justify-end items-center font-bold'>
                            <div className='fixed text-black flex justify-center items-center'>
                                <span className='pr-2'>Refresh</span>
                                <button onClick={() => getData()} className="btn btn-circle btn-outline">
                                    <GrRefresh className='text-xl' />
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-start items-center pb-10 font-bold'>
                            <div className='fixed text-black'>
                                <span className='pr-2'>Jumlah Komentar: </span>
                                <span>{totalComments}</span>
                            </div>
                        </div>
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Komentar</th>
                                    <th>CreatedAT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    commentItems.map((item) => {
                                        const dateTime = toDateTime(Timestamp.now().seconds - item.createdAt.seconds)
                                        const avatar = createAvatar(initials, {
                                            // ... options
                                            seed: item.name
                                        });
                                        const dataUri = avatar.toDataUriSync();
                                        return (
                                            /* <!-- row --> */
                                            <tr key={item.name+dateTime}>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <Image layout="fill" src={dataUri} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{item.name}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <pre> &quot;{item.commentText}&quot;</pre>
                                                </td>
                                                <td>{moment().from(dateTime)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            {/* <!-- foot --> */}
                            <tfoot>
                                <tr>
                                    <th>Nama</th>
                                    <th>Komentar</th>
                                    <th>CreatedAt</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comments