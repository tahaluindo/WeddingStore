import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import NotFound from "../../Global/NotFound"
import Loading from "../../Global/SkeletonLoading"
import { useEffect, useState } from "react"
import { database } from '../../../firebaseConsole'
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'
import { GrRefresh } from 'react-icons/gr';
import { toDateTime } from '../../../utils/formatDate';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';
import moment from 'moment';
import { useCallback } from 'react';
import Image from 'next/image';

let hadir = 0
let tidakHadir = 0

const RSVP = ({ orderId }) => {

    const [rsvpItems, setRSVPItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dbInstance = collection(database, `rsvp_${orderId}`)

    const getData = async () => {
        setIsLoading(true)
        hadir = 0
        tidakHadir = 0
        await getDocs(query(dbInstance, orderBy("createdAt", "desc")))
            .then((data) => {
                setRSVPItems(data.docs.map((item) => {
                    const itemData = item.data()
                    if (itemData.isAttending) {
                        hadir++
                    } else {
                        tidakHadir++
                    }
                    return { ...itemData, id: item.id }
                }))
            })
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const data = [
        { name: 'Hadir', value: hadir },
        { name: 'Tidak Hadir', value: tidakHadir },
    ];

    const COLORS = ['#00C49F', '#ff0000', "#0088FE"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) + 10;
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={'middle'} dominantBaseline="central">
                {`${name} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    if (isLoading) {
        return (
            <Loading />
        )
    }

    if (rsvpItems.length <= 0) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <section className="w-full h-full flex justify-center px-2">
                <div className='mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-4xl bg-white'>
                    <div className="flex justify-center">
                        <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">RSVP</span>
                    </div>
                    <span className="divider"></span>
                    <div className="flex flex-col md:flex-row justify-center items-center w-full font-[poppins]">
                        <div className='flex flex-col items-center w-full'>
                            <div className='flex justify-start items-center font-bold xl:w-full w-full'>
                                <div className='flex w-full items-center text-black'>
                                    <div className='flex w-full'>
                                        <span>Jumlah Tamu: {hadir + tidakHadir}</span>
                                    </div>
                                    <span className='pr-2'>Refresh</span>
                                    <button onClick={() => getData()} className="btn btn-circle btn-outline">
                                        <GrRefresh className='text-xl' />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-md py-10 pt-5'>
                                <article className="h-full w-full flex items-end justify-between rounded-lg border border-black bg-green-500 p-6 mr-0 lg:mr-2 mb-2 lg:mb-0">
                                    <div>
                                        <p className="text-sm text-black">Hadir</p>
                                        <p className="text-2xl font-medium text-gray-900">{hadir}</p>
                                    </div>
                                    <div className="inline-flex gap-2 rounded bg-green-100 p-1 text-green-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                        <span className="text-xs font-medium">${(hadir/(hadir+tidakHadir)*100).toFixed(0)}%</span>
                                    </div>
                                </article>
                                <article className="h-ful w-full flex items-end justify-between rounded-lg border border-black bg-red-500 p-6">
                                    <div>
                                        <p className="text-sm text-black">Tidak Hadir</p>
                                        <p className="text-2xl font-medium text-gray-900">{tidakHadir}</p>
                                    </div>
                                    <div className="inline-flex gap-2 rounded bg-red-100 p-1 text-red-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                            />
                                        </svg>
                                        <span className="text-xs font-medium">${(tidakHadir/(hadir+tidakHadir)*100).toFixed(0)}%</span>
                                    </div>
                                </article>
                            </div>
                            <article className='flex justify-center w-full'>
                                <div className="overflow-x-auto overflow-y-auto xl:w-full">
                                    <table className="table w-full">
                                        {/* <!-- head --> */}
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Kehadiran</th>
                                                <th>CreatedAT</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                rsvpItems.map((item) => {
                                                    const dateTime = toDateTime(Timestamp.now().seconds - item.createdAt.seconds)
                                                    const avatar = createAvatar(initials, {
                                                        // ... options
                                                        seed: item.name
                                                    });
                                                    const dataUri = avatar.toDataUriSync();
                                                    return (
                                                        /* <!-- row --> */
                                                        <tr key={item.name + dateTime}>
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
                                                                {
                                                                    (item.isAttending) ?
                                                                        `Hadir`
                                                                        :
                                                                        `Tidak Hadir`
                                                                }
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
                                                <th>Kehadiran</th>
                                                <th>CreatedAt</th>
                                            </tr>
                                        </tfoot>

                                    </table>
                                </div>
                            </article>
                        </div>
                        <div className='flex justify-center h-96 w-full max-w-xs'>
                            <ResponsiveContainer width="100%" height="100%" >
                                <PieChart width={800} height={800}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RSVP