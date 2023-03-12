import BridesVowIcon from "../../public/static/bridesvow.svg"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState } from "react"
import { sideBarTabTriggerModels } from "../../models/sideBarTabModel"
import * as Tabs from '@radix-ui/react-tabs';

const LogOutPopUp = dynamic(
    () => import("./LogOutPopUp"),
    { ssr: false }
)

export default function SideBar () {
    const [openPopUp, setOpenPopUp] = useState(false)
    const handleClickLogOut = () => {
        setOpenPopUp(true)
    }
    return (
        <>
            <LogOutPopUp open={openPopUp} setOpen={setOpenPopUp} />
            <aside className="flex flex-col absolute w-64 h-full z-50 px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-2xl">
                        <span className="flex justify-center mr-3">
                            <Image className="" width="40" height="40" alt={"BridesVow"} src={BridesVowIcon.src}></Image>
                        </span>
                        <span className="font-bold text-2xl text-black dark:text-white">
                            BridesVow
                        </span>
                    </a>
                </Link>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-6 ">
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
                                Dashboard
                            </label>
                                <Tabs.List className="TabsList flex flex-col" aria-label="Manage your account">
                                    {
                                        sideBarTabTriggerModels.map((item) => {
                                            return (
                                                <Tabs.Trigger key={item.value} className="SideBarTabsTrigger" value={item.value}>
                                                    < a
                                                        className="flex items-center px-3 py-2"
                                                    >
                                                        {item.icon}
                                                        <span className="mx-2 text-sm font-medium">{item.label}</span>
                                                    </a >
                                                </Tabs.Trigger>
                                            )
                                        })
                                    }
                                    < a
                                        className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                                        href="#"
                                        onClick={handleClickLogOut}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                            />
                                        </svg>
                                        <span className="mx-2 text-sm font-medium">Log Out</span>
                                    </a >
                                </Tabs.List>
                        </div>
                    </nav>
                </div>
            </aside>
        </>

    )
}