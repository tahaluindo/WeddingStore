import Image from "next/image"
import imageLoader from "../../../utils/imageLoader"

const AuthForm = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="pb-5 lg:w-24 w-16 h-auto">
                    <Image layout="responsive" src={"/static/bridesvow.svg"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                </div>
                <span className="pb-5 text-xl lg:text-3xl text-white font-bold font-[poppins]">Mohon masukkan Undangan ID</span>
                <form action="" className="pb-5">
                    <input type="text" placeholder="Undangan ID" className="input input-bordered rounded-full lg:w-72 bg-white text-black" required />
                </form>
                <button className="btn btn-sm rounded-full w-40 bg-[#003153] text-white">Next</button>
            </div>
        </div>
    )
}

export default AuthForm