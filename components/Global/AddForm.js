import { useEffect, useState } from "react"
import { GrAdd } from "react-icons/gr"

const AddForms = ({ formRendered, formToAddStructure, setFormRendered, setIsFormChange, currentIndex }) => {

    const modifiedForm = formRendered

    const handleClick = (event) => {
        event.preventDefault()
        modifiedForm.splice(currentIndex, 0, formToAddStructure)
        setFormRendered(modifiedForm)
        setIsFormChange(true)
        // console.log(currentIndex)
    }
    return (
        <>
            <div className="z-50 relative">
                <button onClick={handleClick} className="btn btn-circle btn-outline relative">
                    <GrAdd className="text-2xl" />
                </button>
            </div>
        </>
    )
}

export default AddForms