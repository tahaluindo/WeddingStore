import Image from "next/image"
import People from "../../public/static/landing/people.png"
import Megaphone from "../../public/static/landing/megaphone.png"
import FlowerOrange from "../../public/static/landing/flowerorange.png"
import FlowerOrange2 from "../../public/static/landing/flowerorange2.png"
import { AiFillCheckCircle } from "react-icons/ai"
import Link from "next/link"

const FeatureContainer = ({ no = "1", title = "Title", content = "Content" }) => {
    return (
        <>
            <div className="relative left-2 top-5 xl:w-[50px] xl:h-[50px] w-[40px] h-[40px] bg-[#003153] rounded-full">
                <span className="flex justify-center items-center h-full font-[poppins] text-lg xl:text-2xl font-bold text-white">{no}</span>
            </div>
            <div className="flex justify-start w-[45vw] max-w-[100%] xl:max-w-[500px] xl:max-h-max xl:w-[500px] xl:h-[300px] p-6 rounded-3xl bg-[#E2F4FF]">
                <div className="flex flex-col justify-start">
                    <span className="font-[poppins] capitalize font-bold xl:text-[35px] text-md text-[#003153] xl:mt-5">{title}</span>
                    <span className="font-[poppins] xl:text-[25px] text-[0.82rem] text-black xl:my-5">{content}</span>
                </div>
            </div>
        </>
    )
}
const LongFeatureContainer = ({ title = "Title", content = "Content" }) => {
    return (
        <>
            <div className="relative xl:w-full w-full h-full">
                <div className="flex justify-center w-full max-w-[600px] xl:h-full xl:max-h-[100%] xl:max-w-[100%] h-[28vh] max-h-[28vh] mt-8 p-6 py-3 rounded-3xl bg-[url('../public/static/landing/longfiturbg.png')] bg-cover bg-center">
                    <div className="flex flex-col justify-start max-w-[600px] xl:max-w-[100%]">
                        <span className="max-w-[300px] xl:max-w-[100%] font-[poppins] capitalize font-bold xl:text-[40px] xl:mt-10 text-xl text-[#003153]">{title}</span>
                        <span className="max-w-[300px] xl:max-w-[70%] [word-wrap:break-word] xl:w-[950px] w-[60vw] font-[poppins] xl:text-[30px] xl:leading-10 text-sm xl:my-5 text-black mt-1 z-20">{content}</span>
                        <div className="xl:mt-1 mt-5 relative bottom-3">
                            <Link href="/order">
                                <a>
                                    <button className="max-w-[300px] xl:max-w-[100%] btn xl:btn-lg btn-xs xl:w-[340px] w-[35vw] xl:h-[24px] h-[5vh] xl:text-[24px] text-sm capitalize bg-[#003153] hover:bg-slate-400 text-white font-bold rounded-full">{"Pesan sekarang"}</button>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="relative xl:w-full w-full">
                        <div className="absolute bottom-[-12%] right-[-30%] xl:bottom-[-11%] xl:right-[-60%] xl:w-[500px] w-[50vw] max-w-[300px] xl:max-w-[400px]">
                            <Image src={People.src} alt='people' width={500} height={500} objectFit={'contain'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const StepContainer = () => {
    return (
        <>
            <div className="flex justify-start max-w-[600px] xl:max-w-[100%] w-[90vw] xl:w-[800px] xl:h-[1020px] h-[90vh] p-6 rounded-3xl bg-[#F1F1F1]">
                <div className="flex flex-col justify-start xl:text-[30px]">
                    <span className="font-[poppins] capitalize font-bold xl:text-[40px] text-2xl text-black mt-2 mb-4">Tahap Pemesanan</span>
                    <div className="flex justify-start items-start mt-1">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillCheckCircle />
                            <div className="w-[2px] xl:h-[150px] h-[12vh] border-l-2 border-[#003153] border-dotted"></div>
                        </div>
                        <span className="font-[poppins] px-2 text-black">Silahkan pilih paket yang telah
                            disediakan oleh BridesVow dengan scroll ke bawah
                            atau klik menu Paket.    </span>
                    </div>
                    <div className="flex justify-start items-start">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillCheckCircle />
                            <div className="w-[2px] xl:h-[150px] h-[12vh] border-l-2 border-[#003153] border-dotted"></div>
                        </div>
                        <span className="font-[poppins] px-2 text-black">Pilih desain undangan yang menurut kamu sesuai dengan
                            selera kamu pada halaman paket yang telah kamu pilih.</span>
                    </div>
                    <div className="flex justify-start items-start">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillCheckCircle />
                            <div className="w-[2px] xl:h-[150px] h-[12vh] border-l-2 border-[#003153] border-dotted"></div>
                        </div>
                        <span className="font-[poppins] px-2 text-black">Isi form pemesanan setelah memilih desain. Jangan
                            lupa untuk mengecek kembali data yang telah diinput.</span>
                    </div>
                    <div className="flex justify-start items-start">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillCheckCircle />
                            <div className="w-[2px] xl:h-[150px] h-[12vh] border-l-2 border-[#003153] border-dotted"></div>
                        </div>
                        <span className="font-[poppins] px-2 text-black">Lakukan pembayaran sesuai dengan pilihan yang ada.
                            Dapat dilakukan melalui Bank Transfer, E-Wallet, dll.</span>
                    </div>
                    <div className="flex justify-start items-start">
                        <div className="flex flex-col justify-center items-center">
                            <AiFillCheckCircle />
                            <div className="w-[2px] xl:h-[150px] h-[12vh] border-l-2 border-[#003153] border-dotted"></div>
                        </div>
                        <span className="font-[poppins] px-2 text-black">Setelah pembayaran dikonfirmasi, silahkan tunggu
                            informasi selanjutnya yang akan disampaikan melalui WA atau
                            E-mail.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

// const uniqueId = () => {
//     return "id" + Math.random().toString(16).slice(2)
// }

const featureContents = [
    {
        title: `Desain kece`, content: `Pilih berbagai macam desain kece
    yang disediakan di BridesVow.`},
    {
        title: `Ekslusif`, content: `Bagikan dengan nama penerima yang
    kamu tuju, agar undangan terasa lebih
    spesial.`},
    {
        title: `Akses Tanpa Batas`, content: `Undangan yang dibagikan dapat
    diakses di mana pun dan kapan pun
    tanpa adanya batasan.`},
    {
        title: `Perjalanan cinta`, content: `Ceritakan perjalan cinta kamu dan
    pasangan hingga akhirnya menjalin
    pernikahan bersama.`},
    {
        title: `Galeri Foto`, content: `Bagikan momen bahagiamu dengan
    galeri foto kece yang telah kami
    sediakan.`},
    {
        title: `Navigasi Lokasi`, content: `Arahkan tamu undangan ke lokasi
    pernikahanmu hingga sampai tujuan
    tanpa tersesat.`},
    {
        title: `Kado Pernikahan`, content: `Tamu undangan dapat mengirimkan
    kado langsung ke alamat atau dompet digital`},
    {
        title: `Background Music`, content: `Tambahkan kesan romantis ke dalam
    undangan dengan musik yang dapat
    dipilih sendiri oleh calon pengantin.`},
    {
        title: `Countdown`, content: `Hitung mundur momen bahagiamu
    hingga hari H acaramu tiba.`},
    {
        title: `Harapan dan Doa`, content: `Temukan harapan dan doa yang
    dipanjatkan oleh tamu undanganmu.`}
]

const ContentTwo = () => {
    return (
        <section className="relative bg-gradient-to-r from-[#2c82b7] to-[#589ccd]">
            <div className="flex flex-col justify-center items-center pt-10 bg-white rounded-t-3xl">
                <div id="fitur" className="flex justify-center">
                    <span className="font-[poppins] font-bold xl:text-[58px] text-[1.3rem] text-black xl:my-20 my-5">Fitur yang kamu dapat</span>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 grid-rows-6 xl:grid-cols-3 xl:grid-rows-4 xl:gap-8 gap-3 max-h-[175vh] md:max-h-[100vh] xl:max-h-[150vh]">
                        {featureContents.length > 0 && featureContents.map((item, index) => {
                            index++
                            return (
                                <div key={item.title} className="">
                                    <FeatureContainer key={item.title} no={index} title={item.title} content={item.content} />
                                </div>
                            )
                        })}
                        <div className="col-span-2">
                            <LongFeatureContainer title="Tunggu Apa Lagi?" content="Dengan segala fitur yang ditawarkan, tidak ada lagi alasan
untuk berpaling dari BridesVow. Ayo pesan sekarang!" />
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 md:mt-36 xl:mt-0">
                    <div id="cara" className="flex justify-center">
                        <span className="relative xl:top-[150px] top-[8vh] font-[poppins] font-bold xl:text-[58px] text-[1.3rem] text-black xl:mb-20">Bagaimana Cara Memesan?</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative top-[200px] right-[100px] hidden xl:inline ">
                            <Image src={Megaphone.src} alt='people' width={700} height={1000} objectFit={'cover'} />
                        </div>
                        <div className="relative xl:top-[200px] top-[15vh] z-10">
                            <StepContainer />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex flex-row justify-between">
                            <div className="relative xl:top-[10px] top-[18vh] xl:w-fit w-[100vw] h-[285px]">
                                <Image src={FlowerOrange.src} alt='avatar' width={600} height={500} objectFit={'cover'} />
                            </div>
                            <div className="relative xl:top-[10px] top-[18vh] xl:w-fit w-[100vw]">
                                <Image src={FlowerOrange2.src} alt='avatar' width={600} height={500} objectFit={'cover'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentTwo