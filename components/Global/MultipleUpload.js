import Image from "next/image"
import { forwardRef, memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import imageLoader from "../../utils/imageLoader"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useDropzone } from 'react-dropzone';
import { useFormContext } from "react-hook-form";

const MultiUpload = ({ name, required, width = "w-80 lg:w-[35rem]" }) => {

    ////Input File (Dropzone) settings/////
    const [files, setFiles] = useState([])
    const { inputRef,acceptedFiles, getRootProps, getInputProps, isDragAccept, isDragActive, isDragReject, open } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        maxFiles: 15,
        multiple: true,
        accept: {
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/png': ['.png']
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        onDropAccepted: files => {
            setValue(name,files)
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


    ///Image Slider Setting screen//////
    const [isPhone, setIsPhone] = useState(typeof window !== "undefined" && window.innerWidth <= 640)

    const updateMedia = () => {
        setIsPhone(window.innerWidth <= 640)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    }, [isPhone])


    ////react hook form setting////
    const { register, setValue, setError, formState: { errors },getValues } = useFormContext()

    useEffect(() => {
        register(name, { required: required })
    },[])

    return (
        <>
            <div {...getRootProps({ className: `dropzone relative flex flex-col justify-center items-center` })}>
                {isDragAccept && (<div className={`flex justify-center items-center w-full h-full rounded-xl bg-green-600 text-white bg-opacity-70 absolute z-50`}>yeah, drop it</div>)}
                {isDragReject && (<div className={`flex justify-center items-center w-full h-full rounded-xl bg-red-600 text-white bg-opacity-70 absolute z-50`}>nooo, your files is not acceptable</div>)}
                <input name={name} type="file" className="border-black border-2 hidden" {...getInputProps()} />
                <div id="test" className={`border-dashed border-2 border-black rounded-xl bg-white ${width}`} >
                    {
                        (files.length > 0) ?
                            <>
                                <span className="pl-2">{`Total: ${files.length}`}</span>
                                <div className="flex">
                                    <Swiper
                                        centeredSlides={true}
                                        centeredSlidesBounds={true}
                                        mousewheel={true}
                                        grabCursor={false} navigation={false} modules={[Pagination, Navigation, Mousewheel]}
                                        spaceBetween={5} slidesPerView={isPhone ? (files.length > 1 ? 2 : 1) : (files.length < 3) ? files.length : 3}
                                        pagination={true} className="mySwiper">
                                        {files.map((item) => {
                                            // console.log("test: "+item)
                                            return (
                                                <SwiperSlide key={item.name}>
                                                    <div className="flex flex-col items-center justify-center pt-10">
                                                        <Image className='' src={URL.createObjectURL(item)} width={250} height={250} alt={item.name} objectFit="contain" onLoad={URL.revokeObjectURL(item.preview)} />
                                                        <span className="font-bold text-xs pb-3 text-black">{item.name}</span>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </>
                            :
                            <div className="flex flex-col items-center justify-center pt-10">
                                <Image className='' src={"/static/other/upload.png"} width={50} height={50} alt='drag_Your_files' objectFit="contain" />
                                <span className="font-bold text-xs pb-3 text-black">{"drag and drop files here"}</span>
                            </div>
                    }
                    <div className="flex flex-col justify-center items-center pb-10">
                        <span className="font-bold text-sm pb-3 text-black">{(isDragAccept) ? "OR" : ""}</span>
                        <button type="button" onClick={open} className="btn btn-xs rounded-full w-32 bg-black text-white">Browse</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(MultiUpload)
