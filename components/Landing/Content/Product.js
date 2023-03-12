import Image from "next/image"
import Link from "next/link"
import Sparkle from "../../../public/static/landing/sparkle.svg"

const PriceContainer = ({ bgColor = 'bg-white', textColor = 'text-black', title, price, features, enabled, link = "#" }) => {
    return (
        <>
            <div className={`relative xl:w-[440px] xl:max-w-[500px] max-w-[250px] w-[50vw] xl:h-[800px] h-[50vh] rounded-t-full border-2 border-black ${bgColor}`}>
                <div className="absolute top-[15vh] right-[-4.5vw] xl:top-[80%] xl:right-[92.5%] xl:w-[60px] w-[8vw] md:scale-50 xl:scale-100">
                    <Image src={Sparkle.src} alt='people' width={60} height={60} objectFit={'contain'} />
                </div>
                <div className="absolute top-[40vh] left-[-4.5vw] xl:top-[30%] xl:left-[92.5%] rotate-180 xl:w-[60px] w-[8vw] md:scale-50 xl:scale-100">
                    <Image src={Sparkle.src} alt='people' width={60} height={60} objectFit={'contain'} />
                </div>
                <div className="flex flex-col justify-center items-center xl:mt-32 mt-10">
                    <span className={`font-[poppins-extrabold] uppercase xl:text-[35px] xl:leading-10 text-lg ${textColor}`}>{title}</span>
                    <span className={`font-[poppins-extrabold] capitalize xl:text-[35px] xl:leading-10 text-lg  ${textColor}`}>Rp.{price}</span>
                    <ul className="list-disc pl-3 pt-3">
                        {features.length > 0 && features.map((item, index) => {
                            return (
                                <li key={item.content + index} className={`xl:text-[25px] text-[0.82rem]  ${textColor}`}>{item.content}</li>
                            )
                        })}
                    </ul>
                    <div className="mt-5">
                        <Link href={link}>
                            <a className={enabled}><button className={`max-w-[150px] btn xl:btn-lg btn-xs xl:w-[240px] xl:h-[24px] w-[35vw] h-[5vh] xl:text-[24px] text-sm capitalize bg-[#003153] hover:bg-slate-400 text-white font-bold rounded-full`}>{"Pesan"}</button></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const featuresOne = [
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
]
const featuresTwo = [
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
]
const featuresThree = [
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
    { content: "loremipsumdolorsiramet" },
]



// const Product = () => {
//     return (
//         // <section className="relative w-full bg-[#F1F1F1]">
//         <section className="relative w-full">
//             <div className="flex flex-col justify-center items-center pt-10">
//                 <div id="paket" className="flex justify-center">
//                     <span className="font-[poppins] font-bold xl:text-[58px] text-[1.3rem] text-white xl:mt-20 md:mb-20 mb-5">Pilihan Paket Yang Tersedia</span>
//                 </div>
//                 <div className="flex justify-center w-fit xl:mb-40 mb-20">
//                     <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 md:gap-10 gap-5">
//                         <div className="order-3 md:order-1 ">
//                             <div className="relative xl:text-7xl text-2xl text-black font-bold -rotate-45 top-[25vh] right-[-2vw] xl:top-[500px] xl:right-[10px]">Coming Soon</div>
//                             <div className="flex justify-center opacity-30">
//                                 <PriceContainer enabled="btn-disabled" title={'gold'} price={'100.000'} features={featuresOne} />
//                             </div>
//                         </div>
//                         <div className="relative order-1 md:order-2 md:bottom-[15%]">
//                             <div className="relative xl:text-7xl text-2xl text-black font-bold -rotate-45 top-[25vh] right-[-2vw] xl:top-[500px] xl:right-[10px]">Coming Soon</div>
//                             <div className="flex justify-center opacity-30">
//                                 <PriceContainer enabled="btn-disabled" bgColor={'bg-[#3689bb]'} textColor={'text-white'} title={'diamond'} price={'300.000'} features={featuresTwo} />
//                             </div>
//                         </div>
//                         <div className="order-2 md:order-3">
//                             <div className="flex justify-center xl:mt-20 mt-8">
//                                 <PriceContainer link={"/order?paket=platinum"} title={'platinum'} price={'200.000'} features={featuresThree} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
const Product = () => {
    return (
        // <section className="relative w-full bg-[#F1F1F1]">
        <section className="relative w-full" id="paket">
            <div className="flex flex-col justify-center items-center">
                <div className="container px-6 mx-auto">
                    <div className="xl:p-36 py-10 font-[poppins]">
                        <h1 className="text-2xl xl:text-[58px] font-semibold text-center text-white capitalize lg:text-3xl">
                            Pilihan Paket
                        </h1>
                        <p className="max-w-2xl mx-auto mt-4 text-center text-white xl:mt-6 xl:text-xl">
                            Pilihan paket ditetapkan berdasarkan desain. Untuk fitur pada undangan, tenang saja semua fitur kami berikan, tidak ada fitur yang kami batasi.
                        </p>
                        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 lg:border-4 border-black lg:p-20 rounded-3xl">
                            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 bg-white">
                                <p className="font-medium text-yellow-500 uppercase ">
                                    Gold
                                </p>
                                <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
                                    Rp.189.000
                                </h2>
                                <p className="font-medium text-gray-500 ">
                                    Good Design
                                </p>
                                <Link href="/order?paket=gold">
                                    <a>
                                        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#267AAD] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Beli
                                        </button>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full p-8 space-y-8 text-center border border-gray-200 dark:border-gray-700 bg-[#267AAD] rounded-lg">
                                <p className="font-medium text-black uppercase">
                                    Diamond
                                </p>
                                <h2 className="text-4xl font-bold text-white uppercase dark:text-gray-100">
                                    Rp.279.000
                                </h2>
                                <p className="font-medium text-gray-200">
                                    Elite and Luxury design
                                    <Link href="/order?paket=diamond">
                                        <a>
                                            <button className="w-full px-4 py-2 mt-10 tracking-wide text-[#267AAD] capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-black focus:outline-none focus:bg-black focus:ring focus:ring-black focus:ring-opacity-80">
                                                Beli (Recommended)
                                            </button>
                                        </a>
                                    </Link>
                                </p>
                            </div>
                            <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 bg-white">
                                <p className="font-medium text-gray-500 uppercase">
                                    Platinum
                                </p>
                                <h2 className="text-4xl font-semibold text-gray-800 uppercase">
                                    Rp.229.000
                                </h2>
                                <p className="font-medium text-gray-500">
                                    Elegant design
                                </p>
                                <Link href="/order?paket=platinum">
                                    <a>
                                        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#267AAD] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Beli
                                        </button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Product