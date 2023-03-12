import { useState } from "react"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { BsWhatsapp } from "react-icons/bs"
import { TextAreaPopUp } from "../../Global/InputPopUp"
import { AiOutlineInfoCircle } from "react-icons/ai"
import InfoPopOver from "../../Global/InfoPopOver"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const invitingTemplate = (namaPenerima, undanganSlug, pesan) => {
    const toParams = encodeURIComponent(namaPenerima)
    // const regex = '/#[A-Za-z]+#/i';
    const newPesan = pesan.replaceAll('#undangan_slug#', undanganSlug).replaceAll('#nama_penerima#', namaPenerima)
    return newPesan
}
const defaultPesan = `Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i #nama_penerima# untuk menghadiri acara kami.

 *Berikut link undangan kami*, untuk info lengkap dari acara bisa kunjungi :
 
 ${baseUrl}/#undangan_slug#?to=#nama_penerima#
 
 Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
 
 *Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*
 
 Terima kasih banyak atas perhatiannya.
 
 Hormat kami,
 *Afni & Arif*
 
 ====
 
 _*Mohon simpan nomor kami jika link tidak bisa di klik._
 _*Nonaktifkan dark mode pada browser agar undangan terlihat maksimal._`

const Inviting = ({ undanganSlug }) => {
    const methods = useForm({
        defaultValues: {
            pesan: defaultPesan,
        }
    })

    const { register, getValues, setValue, control } = methods
    const watchFormNama = useWatch({ control, name: 'nama' }); // ✅ input value update will be received and trigger re-render
    const [pesan, setPesan] = useState(defaultPesan)
    setValue('viewPesan', invitingTemplate(watchFormNama, undanganSlug, pesan));

    const [openPopUp, setOpenPopUp] = useState(false)
    const handleClickSetPesan = () => {
        setOpenPopUp(true)
    }
    const popUpCallback = () => {
        setPesan(getValues("pesan"))
    }

    return (
        <>
            <section className="w-full">
                <div className="flex justify-center px-2 font-[poppins]">
                    <FormProvider {...methods}>
                        <form className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-2xl bg-white">
                            <TextAreaPopUp open={openPopUp} setOpen={setOpenPopUp} callback={popUpCallback} />
                            <div className="flex justify-center">
                                <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Sebarkan Undangan</span>
                            </div>
                            <span className="divider"></span>
                            <div className="form-control w-full flex items-center">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-black">Nama{<span className="text-red-600">*</span>}</span>
                                    </label>
                                    <input {...register('nama')} type="text" placeholder="Nama Penerima" className="input input-bordered w-full max-w-full bg-white text-black" required />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-black">Nomor WA{<span className="text-red-600">*</span>}</span>
                                        <InfoPopOver messsage={`Hilangkan "0,+,{},-" ketika menginput nomor ! <br/><strong><i>(contoh: 6281122334455)</i></strong>`}>
                                            <AiOutlineInfoCircle className="w-6 h-6 text-red-500" />
                                        </InfoPopOver>
                                    </label>
                                    <div className="w-full max-w-full">
                                        <label className="input-group">
                                            <span className="text-white"><BsWhatsapp /></span>
                                            <input {...register('noWa')} type="tel" pattern="[0-9]{12}" placeholder="6281122334455" className="input input-bordered w-full bg-white text-black" required />
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-between py-2">
                                        <label className="label">
                                            <div className="flex justify-center items-center">
                                                <span className="label-text font-bold text-black mr-1">Pesan</span>
                                                <InfoPopOver messsage={`<strong>Tambahkan keyword: </strong><ul>
                                                <li><strong>#nama_slug#</strong> -> untuk url undangan anda, <strong><i>contoh: bridesvow.com/#nama_slug#</i></strong></li>
                                                <li><strong>#nama_penerima#</strong> -> untuk nama penerima undangan anda, <strong><i>contoh: bridesvow.com/#nama_slug#/?to= #nama_penrima#</strong>, <strong>kepada saudara #nama_penerima#</i></strong></li></li>
                                                </ul>`}>
                                                    <AiOutlineInfoCircle className="w-6 h-6 text-red-500" />
                                                </InfoPopOver>
                                            </div>
                                        </label>
                                        <button onClick={handleClickSetPesan} className="btn btn-sm sm:btn-sm md:btn-md text-white">Set Pesan</button>
                                    </div>
                                    <div className="p-4">
                                        <div className="-mt-2 border-4 border-dashed rounded h-96">
                                            <textarea value={invitingTemplate(watchFormNama, undanganSlug, pesan)} {...register('viewPesan')} readOnly className="textarea textarea-bordered w-full h-full border-0 max-w-full bg-white text-black" placeholder="Messages">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-bold text-black">Upload Bukti Pembayaran</span>
                                    </label>
                                    <SingleUpload name={"fotoBukti"} required={true} width="w-full min-w-68 " />
                                </div> */}
                            </div>
                            <div className="flex justify-center mt-2">
                                <a rel="noreferrer" className="w-full flex justify-center btn sm:btn-wide w-full bg-green-500 text-white" target="_blank" href={
                                    `https://wa.me/${getValues("noWa")}?text=${encodeURIComponent(getValues("viewPesan"))}`
                                }>
                                    <div className="w-1/2 flex justify-evenly items-center">
                                        <span><BsWhatsapp /></span>
                                        <span>Undang</span>
                                    </div>
                                </a>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </section>
        </>
    )
}

export default Inviting