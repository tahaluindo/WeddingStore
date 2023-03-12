import { dataPengantinForms } from "../../../models/formModels"
import Form from "../../Global/Form"
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bridesFormSchema } from "../../../models/formValidationSchema";
import { createContext, useEffect, useState } from "react";
import { QueryClient, useMutation } from "react-query";
import { createDataUndangan, updateDataUndangan } from "../../../adapters";
import BridesTabs from "./BridesTabs";
import LoadingPopUp from "../../Global/LoadingPopUp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext(null)

const BridesForm = ({ undanganId, undanganSlug }) => {

    const submitDataStructure = {}
    const dynamicDataStructure = {}
    const formStructure = []

    const formOptions = { resolver: yupResolver(bridesFormSchema) }

    // get funtions to build form with useForm() hook
    const methods = useForm(formOptions)

    // ///manual setting of image upload form///
    // useEffect(() => {
    //     methods.register("fotoGaleri", { required: false })
    //     methods.register("fotoSendiriCewek", { required: false })
    //     methods.register("fotoSendiriCowok", { required: false })
    // }, [])

    /* -----cant setValue from this-------- */
    // const {setValue} = methods
    /*---------------------------------------*/

    // useEffect(() => {
    //   // dynamicDataStructure = Object.assign({},dynamicDataStructure)
    //   console.log(submitDataStructure)
    // }, [])

    const queryClient = new QueryClient()

    const { mutateAsync, isLoading } = useMutation(updateDataUndangan, {
        onSuccess: data => {
            console.log(data)
            // alert("'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data))
            notifySuccess("SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)")
        },
        onError: (error) => {
            try {
                // alert(error.response.data.error.message)
                notifyError(error.response.data.error.message)
            } catch (error) {
                // alert("there was an error")
                notifyError("there was an error")
                console.log(error)
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    ///success toast
    const notifySuccess = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    ///error toast
    const notifyError = (message) => toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const onSubmit = async (data) => {


        /* Main Form preprocess data */

        const dataSubmitTexts = {}
        const dataSubmitFiles = []
        const bodyFormData = new FormData()
        Object.keys(submitDataStructure).map((firstKey) => {
            const firstValue = submitDataStructure[firstKey]
            if (Array.isArray(firstValue)) {
                firstValue = firstValue.map((item) => item)
            } else {
                dataSubmitTexts[firstKey] = firstValue
            }
            Object.keys(submitDataStructure[firstKey]).map((secondKey) => {
                // const secondValue = submitDataStructure[secondKey]
                const thirdValue = submitDataStructure[firstKey][secondKey]
                if (Array.isArray(data[thirdValue]) && data[thirdValue].every(file => file instanceof File)) {
                    if (data[thirdValue].length <= 1) {
                        dataSubmitFiles[`files.${firstKey}.${secondKey}`] = data[thirdValue][0]
                    } else {
                        const fileList = []
                        fileList.push(data[thirdValue].map((file) => file))
                        dataSubmitFiles[`files.${firstKey}.${secondKey}`] = fileList[0]
                    }
                    dataSubmitTexts[firstKey][secondKey] = {}
                } else {
                    if (secondKey === "") {
                        dataSubmitTexts[firstKey] = data[thirdValue]
                    } else {
                        dataSubmitTexts[firstKey][secondKey] = data[thirdValue]
                    }
                }
            })
        })


        /* Dynamic Form (Amplop) preprocess data */

        const dynamicFormArray = [dataSubmitTexts.Amplop]
        const dataSubmitTextDynamic = {}
        if (dynamicDataStructure !== undefined || dynamicDataStructure.length > 0) {
            Object.keys(dynamicDataStructure).map((firstKey) => {
                const firstValue = dynamicDataStructure[firstKey]
                if (Array.isArray(firstValue)) {
                    firstValue = firstValue.map((item) => item)
                } else {
                    dataSubmitTextDynamic[firstKey] = firstValue
                }
                Object.keys(dynamicDataStructure[firstKey]).map((secondKey) => {
                    const thirdValue = dynamicDataStructure[firstKey][secondKey]
                    dataSubmitTextDynamic[firstKey][secondKey] = data[thirdValue]
                })
            })
        }

        if (dataSubmitTextDynamic !== undefined || dataSubmitTextDynamic.length > 0) {
            Object.values(dataSubmitTextDynamic).map((value) => {
                dynamicFormArray.push(value)
            })
        }

        dataSubmitTexts.Amplop = dynamicFormArray


        bodyFormData.append("data", JSON.stringify(dataSubmitTexts))
        Object.keys(dataSubmitFiles).map((key) => {
            if (dataSubmitFiles[key].length > 1) {
                dataSubmitFiles[key].map((file) => {
                    bodyFormData.append(key, file)
                })
            } else {
                bodyFormData.append(key, dataSubmitFiles[key])
            }
        })

        // console.log(dataSubmitTextDynamic)
        // console.log(dynamicDataStructure)
        // console.log(dataSubmitTexts)
        // console.log(dataSubmitFiles)
        // console.log(data)
        // console.log(JSON.stringify(dataSubmitTexts))

        const dataSubmitAll = {
            id: undanganId,
            bodyFormData: bodyFormData
        }
        await mutateAsync(dataSubmitAll)

        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(data, null, 4));
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(dataSubmitTexts));
    }
    const onError = (errors, e) => {
        // alert('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)');
        notifyError('ERRORS!! Periksa lagi form nya !! ( ͡╥ ͜ʖ ͡╥)')
        console.log(errors, e);
    }

    return (
        <>
            <ToastContainer />
            <LoadingPopUp openPopUp={isLoading} />
            <section className="w-full">
                <DataContext.Provider value={{
                    submitDataStructureContext: submitDataStructure,
                    dynamicDataStructureContext: dynamicDataStructure,
                    formStructureContext: formStructure,
                }}>
                    <div className="flex justify-center px-2 font-[poppins]">
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                                <div className="flex justify-center">
                                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Data Pengantin</span>
                                </div>
                                <span className="divider"></span>
                                <BridesTabs undanganSlug={undanganSlug}>
                                    <Form formStructure={dataPengantinForms} />
                                </BridesTabs>
                                <div className="flex justify-center mt-2">
                                    <button type="submit" className="btn sm:btn-wide w-full bg-[#003153] text-white">Submit</button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </DataContext.Provider>
            </section>
        </>
    )
}

export default BridesForm