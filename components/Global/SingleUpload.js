import Image from "next/image"
import { forwardRef, useEffect, useRef, useState } from "react"
import { useDropzone } from 'react-dropzone';
import { useFormContext } from "react-hook-form";

const SingleUpload = ({ name, required, width = "w-80 lg:w-[35rem]", accept = {
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png']
} }) => {



    ////Input File (Dropzone) settings/////
    const [files, setFiles] = useState([])
    const { acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject, open } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        maxFiles: 1,
        multiple: false,
        accept: accept,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        onDropAccepted: files => {
            // console.log("file: "+files)
            setValue(name, files)
        }
    });

    useEffect(() => {
        if(getValues(name)){
            setFiles(getValues(name).map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    ////react hook form setting////
    const { register, setValue, setError, formState: { errors },getValues } = useFormContext()

    useEffect(() => {
        register(name, { required: required })
    }, [])

    return (
        <>
            <div {...getRootProps({ className: `dropzone relative flex flex-col justify-center items-center` })}>
                {isDragAccept && (<div className={`flex justify-center items-center w-full h-full rounded-xl bg-green-600 text-white bg-opacity-70 absolute z-50`}>yeah, drop it</div>)}
                {isDragReject && (<div className={`flex justify-center items-center w-full h-full rounded-xl bg-red-600 text-white bg-opacity-70 absolute z-50`}>nooo, your files is not acceptable</div>)}
                <input type="file" className="border-black border-2 hidden" {...getInputProps()} />
                <div className={`border-dashed border-2 border-black rounded-xl bg-white ${width}`}>
                    <div className="flex flex-col items-center justify-center pt-10">
                        {files.length > 0 ?
                            (<Image className='' src={URL.createObjectURL(files[0])} width={200} height={200} alt={files[0].name} objectFit="contain" onLoad={URL.revokeObjectURL(files[0].preview)} />) :
                            (<Image className='' src={"/static/other/upload.png"} width={50} height={50} alt={"drag_Your_files"} objectFit={"contain"} />)
                        }
                        <span className="font-bold text-xs pb-3 text-black">{(!(files.length > 0)) ? "drag and drop file here" : files[0].name}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-10">
                        <span className="font-bold text-sm pb-3 text-black">{(isDragAccept) ? "OR" : ""}</span>
                        <button type="button" onClick={open} className="btn btn-xs rounded-full w-32 bg-black text-white">Browse</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleUpload
