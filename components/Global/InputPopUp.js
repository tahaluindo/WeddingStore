import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Popup from "reactjs-popup"

const overlayStyle = { background: 'rgba(0,0,0,0.5)' };

export const TextAreaPopUp = ({ open, setOpen, callback }) => {

    const methods = useFormContext()
    const {register} = methods

    const closeModal = () => setOpen(false)
    const handleClickNoButton = () => {
        closeModal()
    }
    const handleClickYesButton = () => {
        callback()
        closeModal()
    }

    return (
        <Popup open={open} closeOnDocumentClick={false}
            {...{ overlayStyle }}
        >
            <div className="container p-5">
                <div className="rounded-lg bg-white p-8 shadow-2xl">
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text font-bold text-black">Pesan</span>
                            </label>
                            <textarea {...register('pesan')} rows={15} cols={100} className="textarea textarea-bordered w-full max-w-full h-80 md:h-full bg-white text-black" placeholder="Messages">
                            </textarea>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-end text-xs">
                        <button
                            onClick={handleClickYesButton}
                            type="button"
                            className="rounded bg-green-50 px-4 py-2 font-medium text-green-600"
                        >
                            Apply
                        </button>
                        <button
                            onClick={handleClickNoButton}
                            type="button"
                            className="ml-2 rounded bg-gray-50 px-4 py-2 font-medium text-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Popup>
    )
}