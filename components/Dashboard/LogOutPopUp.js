import Popup from "reactjs-popup"
import { deleteSessionLogin } from "../../adapters/auth";
import { useRouter } from "next/router";

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
const LogOutPopUp = ({ open, setOpen }) => {

    const router = useRouter()

    const closeModal = () => setOpen(false)
    const handleClickNoButton = () => {
        closeModal()
    }
    const handleClickYesButton = async () => {
        try {
            await deleteSessionLogin()
                .then(() => router.reload(window.location.pathname))
        } catch (error) {
            router.replace('/404');
        }
    }

    return (
        <Popup open={open} closeOnDocumentClick={false} onClose={closeModal} {...{ overlayStyle }} contentStyle={{ width: '350px' }}>
            <div className="container">
                <div className="rounded-lg bg-white p-8 shadow-2xl text-black">
                    <h2 className="text-lg font-bold">Apakah kamu ingin Logout ?</h2>
                    {/* <p className="mt-2 text-sm text-gray-500">
                        Doing that could have cause some issues elsewhere, are you 100% sure it's
                        OK?
                    </p> */}
                    <div className="mt-8 flex items-center justify-end text-xs">
                        <button
                            onClick={handleClickYesButton}
                            type="button"
                            className="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                        >
                            Ya, Saya yakin
                        </button>
                        <button
                            onClick={handleClickNoButton}
                            type="button"
                            className="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                        >
                            Tidak, kembali
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default LogOutPopUp