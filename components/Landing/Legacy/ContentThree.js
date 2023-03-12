import Image from "next/image"
import Link from "next/link"
import Sparkle from "../../public/static/landing/sparkle.svg"

const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}

const PriceContainer = ({ bgColor = 'bg-white', textColor = 'text-black', title, price, features, enabled }) => {
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
                        {features.length > 0 && features.map((item) => {
                            return (
                                <li key={uniqueId()} className={`xl:text-[25px] text-[0.82rem]  ${textColor}`}>{item.content}</li>
                            )
                        })}
                    </ul>
                    <div className="mt-5">
                        <Link href="/order">
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



const ContentThree = () => {
    return (
        <section className="relative w-full bg-[#F1F1F1]">
            <div className="flex flex-col justify-center items-center pt-10">
                <div id="paket" className="flex justify-center">
                    <span className="font-[poppins] font-bold xl:text-[58px] text-[1.3rem] text-black xl:mt-20 md:mb-20 mb-5">Pilihan Paket Yang Tersedia</span>
                </div>
                <div className="flex justify-center w-fit xl:mb-40 mb-20">
                    <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 md:gap-10 gap-5">
                        <div className="order-3 md:order-1 ">
                            <div className="relative xl:text-7xl text-2xl text-black font-bold -rotate-45 top-[25vh] right-[-2vw] xl:top-[500px] xl:right-[10px]">Coming Soon</div>
                            <div className="flex justify-center opacity-30">
                                <PriceContainer enabled="btn-disabled" title={'gold'} price={'100.000'} features={featuresOne} />
                            </div>
                        </div>
                        <div className="relative order-1 md:order-2 md:bottom-[15%]">
                            <div className="relative xl:text-7xl text-2xl text-black font-bold -rotate-45 top-[25vh] right-[-2vw] xl:top-[500px] xl:right-[10px]">Coming Soon</div>
                            <div className="flex justify-center opacity-30">
                                <PriceContainer enabled="btn-disabled" bgColor={'bg-[#3689bb]'} textColor={'text-white'} title={'diamond'} price={'300.000'} features={featuresTwo} />
                            </div>
                        </div>
                        <div className="order-2 md:order-3">
                            <div className="flex justify-center xl:mt-20 mt-8">
                                <PriceContainer title={'platinum'} price={'200.000'} features={featuresThree} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentThree