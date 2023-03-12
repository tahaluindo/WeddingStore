import BridesVowIcon from "../../public/static/bridesvow.svg"
import Link from "next/link"
import Image from "next/image"
import HelpButton from "./HelpButton"

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-[#EBF7FF] h-full min-h-screen">
                <header className="flex justify-center">
                    < div className="p-5 pb-0 w-full max-w-3xl xl:max-w-6xl" >
                        <Link href="/">
                            <a className="btn btn-ghost normal-case text-2xl">
                                <span className="flex justify-center mr-3">
                                    <Image className="" width="40" height="40" alt={"BridesVow"} src={BridesVowIcon.src}></Image>
                                </span>
                                <span className="font-bold text-2xl text-black">
                                    BridesVow
                                </span>
                            </a>
                        </Link>
                    </div>
                </header>
                <main>
                    {children}
                    <HelpButton />
                </main>
            </div>
        </>
    )
}
export default Layout