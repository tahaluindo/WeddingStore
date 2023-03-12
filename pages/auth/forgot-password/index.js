import Layout from "../../../components/Global/Layout";
import ForgotForm from "../../../components/Form/Auth/ForgotForm";
import OtpForm from "../../../components/Form/Auth/OtpForm";
import { withForgetPasswordSessionSsr } from "../../../utils/withSession";
import { useState } from "react";

const ForgotPasswordPage = ({ data }) => {

    console.log(data)
    const [session, setSession] = useState(data)

    return (session ?
        (
            <>
                <OtpForm session={session} setSession={setSession} />
            </>
        )
        :
        (
            <>
                <ForgotForm setSession={setSession} />
            </>
        ))
}

ForgotPasswordPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
}

export const getServerSideProps = withForgetPasswordSessionSsr(
    async ({ req, res }) => {
        const data = req.session.data

        if (!data) {
            return {
                props: {}
            }
        }
        return {
            props: { data }
        }
    }
)

export default ForgotPasswordPage