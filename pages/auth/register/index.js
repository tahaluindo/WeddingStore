import { FormProvider, useForm } from "react-hook-form";
import HelpButton from "../../../components/Global/HelpButton";
import RegisterForm from "../../../components/Form/Auth/RegisterForm";
import Layout from "../../../components/Global/Layout";


////under development
export default function RegisterPage() {
    const methods = useForm()
    return (
        <>
        <section className="flex justify-center px-2 font-[poppins]">
            <FormProvider {...methods}>
                <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                    <RegisterForm />
                </form>
            </FormProvider>
            <HelpButton />
        </section>
    </>
    )
}

RegisterPage.getLayout = function getLayout(page){
    return <Layout>{page}</Layout>;
}