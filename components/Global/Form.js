import MapIframeGen from "./MapIframeGen"
import SingleUpload from "./SingleUpload"
import { useFormContext, useWatch } from 'react-hook-form';
import MultiUpload from "./MultipleUpload";
import { memo, useContext, useEffect, useState } from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
import AddForms from "./AddForm";
import { getDataAmplopAddedForm } from "../../models/formModels";
import { DataContext } from "../Form/Brides/BridesForm";
import * as Tabs from '@radix-ui/react-tabs';
import { AiOutlineInfoCircle } from "react-icons/ai";
import InfoPopOver from "./InfoPopOver";

function useReferencedForm(methodForm, formName, referencedFormName, valueCallback = (v) => v) {
    const value = useWatch({ name: referencedFormName })
    if (typeof referencedFormName !== 'undefined' && referencedFormName !== "") {
        const formattedValue = valueCallback(value)
        methodForm.setValue(formName, valueCallback(value))
        return formattedValue
    }
    return value
}

const InputText = ({ name, label, placeholder, required, register, errors }) => {

    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <input name={name} {...register(name, { required: required })} type="text" placeholder={placeholder} className="input input-bordered flex w-full max-w-xs bg-white text-black" />
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>

    )
}
const InputTextArea = ({ name, label, placeholder, required, register, errors, referencedForm }) => {

    const methodForm = useFormContext()

    const value = useReferencedForm(methodForm, name, referencedForm.name, referencedForm.valueCallback)
    // console.log(value)

    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <textarea name={name} {...register(name, { required: required })} className="textarea textarea-bordered w-full max-w-xs h-32 bg-white text-black" placeholder={placeholder}></textarea>
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>

    )
}
const InputDate = ({ name, label, placeholder, required }) => {

    const { register, setValue, setError, formState: { errors }, getValues } = useFormContext()
    const [dateValue, setDateValue] = useState(null)

    if (dateValue) {
        setValue(name, dateValue)
    }

    useEffect(() => {
        register(name, { required: required })
        if (getValues(name)) {
            setDateValue(getValues(name))
        }
    }, [])

    let inputProps = {
        placeholder: placeholder,
        disabled: false,
        className: "input input-bordered flex w-full max-w-xs bg-white text-black"
        // onMouseLeave: () => alert('You went to the input but it was disabled')
    };

    return (
        <div className="w-full text-black">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <Datetime value={dateValue} dateFormat={"YYYY-MM-DD"} timeFormat={false} closeOnSelect={true} inputProps={inputProps} onChange={
                (value) => {
                    try {
                        setDateValue(value.format("YYYY-MM-DD"))
                    } catch (error) {
                        setValue(null)
                        setError("formatError" + name, { type: 'custom', message: 'Format Waktu Salah !!!' })
                    }
                }
            } />
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
            {errors["formatError" + name] && <p className="text-red-600 text-xs" role="alert">{errors["formatError" + name].message}</p>}
        </div>
    )
}
const SelectOptions = ({ name, label, options, defaultValue, required, register, errors }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <select name={name} {...register(name, { required: required })} defaultValue={defaultValue.value} className="select select-bordered w-full max-w-xs bg-white text-black">
                <option value={defaultValue.value} disabled>{defaultValue.label}</option>
                {options.length > 0 && options?.map(item => {
                    return (
                        <option value={item} key={item}>{item}</option>
                    )
                })}
            </select>
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>
    )
}
const UploadPhoto = ({ name, label, required, errors }) => {

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <SingleUpload name={name} required={required} width="w-72 min-w-68 md:w-[35rem]" />
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>
    )
}
const UploadMultiPhoto = ({ name, label, required, errors }) => {

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            {/* must be multiupload component */}
            <MultiUpload name={name} required={required} width="w-72 md:w-[35rem]" />
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>
    )
}
const InputMap = ({ name, referencedForm, label, required, errors }) => {

    const methodForm = useFormContext()

    const iframeValue = useReferencedForm(methodForm, name, referencedForm.name, referencedForm.valueCallback)

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <MapIframeGen iframeValue={iframeValue} />
            {errors[name] && <p className="text-red-600 text-xs" role="alert">{"*" + label + " is required"}</p>}
        </div>
    )
}


const Form = ({ formStructure }) => {

    const { register, formState: { errors } } = useFormContext()
    const [formRendered, setFormRendered] = useState(formStructure)
    const [isFormChange, setIsFormChange] = useState(false)

    useEffect(() => {
        setIsFormChange(false)
    }, [isFormChange])

    const { submitDataStructureContext, dynamicDataStructureContext, formStructureContext } = useContext(DataContext)


    formStructureContext.push(formStructure)

    const googleMapsValueFormattedFunc = (value) => {
        return (
            `https://maps.google.com/maps?q=${encodeURIComponent(value)}&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed`
        )
    }

    const iframeValueFormattedFunc = (value) => {
        return (
            `<iframe src="https://maps.google.com/maps?q=${value}&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        )
    }


    return (
        <>
            {
                formRendered.length > 0 && formRendered.map((structure, index) => {
                    if (structure.isDynamicApiCollection) {
                        dynamicDataStructureContext[structure.apiCollectionName + `(${structure.key})`] = {}
                    } else {
                        submitDataStructureContext[structure.apiCollectionName] = {}
                    }
                    return (
                        <Tabs.Content key={structure.radixTabsValue} className="TabsContent" value={structure.radixTabsValue}>
                            <div className="form-control w-full" key={structure.key}>
                                <label className="label">
                                    <span className="label-text font-bold text-black">{structure.title}</span>
                                    {structure.addForm?.isExist && <AddForms key={structure.addForm.key} currentIndex={index} formRendered={formRendered} formToAddStructure={getDataAmplopAddedForm("Dynamic-")} setFormRendered={setFormRendered} setIsFormChange={setIsFormChange} />}
                                </label>
                                <div className="form-control w-full p-5 bg-slate-300 rounded-3xl">
                                    <div className="flex justify-end">
                                        <InfoPopOver messsage={`Isi data dengan baik dan lengkap ! <br/>Jika ingin melakukan perubahan data <br/> maka harus diisi lagi semua dari awal !`}>
                                            <AiOutlineInfoCircle className="w-6 h-6 text-red-500" />
                                        </InfoPopOver>
                                    </div>
                                    {
                                        structure.forms.map((form) => {
                                            return (
                                                <div className="flex flex-col md:flex-row justify-between md:justify-center items-start" key={form.key}>
                                                    {form?.formType === "formGroup" && form?.children.map((item) => {
                                                        if (structure.isDynamicApiCollection) {
                                                            dynamicDataStructureContext[structure.apiCollectionName + `(${structure.key})`][item.apiFieldName] = item.name
                                                        } else {
                                                            submitDataStructureContext[structure.apiCollectionName][item.apiFieldName] = item.name
                                                        }
                                                        switch (item.formType) {
                                                            case "text":
                                                                return (
                                                                    <InputText register={register} errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                                )
                                                            case "textArea":
                                                                return (
                                                                    <InputTextArea register={register} referencedForm={{ name: item.referencedFormName, valueCallback: googleMapsValueFormattedFunc }} errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                                )
                                                            case "date":
                                                                return (
                                                                    <InputDate errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                                )
                                                            case "select":
                                                                return (
                                                                    <SelectOptions register={register} errors={errors} name={item.name} label={item.label} options={item.options} defaultValue={item.defaultValue} required={item.required} key={item.key} />
                                                                )
                                                            case "photo":
                                                                return (
                                                                    <UploadPhoto errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
                                                                )
                                                            case "multiPhoto":
                                                                return (
                                                                    <UploadMultiPhoto errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
                                                                )
                                                            case "map":
                                                                return (
                                                                    <InputMap register={register} referencedForm={{ name: item.referencedFormName, valueCallback: iframeValueFormattedFunc }} errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
                                                                )
                                                            default:
                                                                return (
                                                                    <div className="flex justify-center pt-5" key={`error`}>Something Went Wrong !</div>
                                                                )
                                                        }
                                                    })}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Tabs.Content>
                    )
                })
            }
        </>
    )
}

export default memo(Form)