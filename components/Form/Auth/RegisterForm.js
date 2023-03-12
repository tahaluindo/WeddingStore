import Link from "next/link"
import { useState } from "react"
import { AiFillEye } from "react-icons/ai"

const RegisterForm = () => {
    const [isShowPassword, setIsShowPassword] = useState(true)
    const handleClick = () => {
        setIsShowPassword(!isShowPassword)
    }
    return (
        <>
            <div className="flex justify-center">
                <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Register</span>
            </div>
            <span className="divider"></span>
            <div className="form-control w-full flex items-center">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Email{<span className="text-red-600">*</span>}</span>
                    </label>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-full bg-white text-black" required />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Password{<span className="text-red-600">*</span>}</span>
                    </label>
                    <div className="flex justify-center items-center relative">
                        <input type={isShowPassword ? "password" : "text"} placeholder="Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                        <span className={`absolute right-0 px-2 text-2xl ${isShowPassword ? "opacity-50" : "opacity-100"}`} onClick={handleClick}><AiFillEye /></span>
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Ulangi Password{<span className="text-red-600">*</span>}</span>
                    </label>
                    <div className="flex justify-center items-center relative">
                        <input type={isShowPassword ? "password" : "text"} placeholder="Ulangi Password" className="input input-bordered w-full max-w-full bg-white text-black" required />
                        <span className={`absolute right-0 px-2 text-2xl ${isShowPassword ? "opacity-50" : "opacity-100"}`} onClick={handleClick}><AiFillEye /></span>
                    </div>
                    <div className="py-2">
                        <Link href={"/auth/login"}>
                            <a target={""} className="opacity-80 hover:opacity-100 text-sm">Saya sudah punya akun !</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Register</button>
            </div>
        </>
    )
}

export default RegisterForm