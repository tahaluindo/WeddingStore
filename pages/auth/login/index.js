import { FormProvider, useForm } from "react-hook-form";
import LoginForm from "../../../components/Form/Auth/LoginForm";
import HelpButton from "../../../components/Global/HelpButton";
import Layout from "../../../components/Global/Layout";
import { withLoginSessionSsr } from "../../../utils/withSession";

export default function LoginPage() {
    return (
        <LoginForm/>
    )
}

LoginPage.getLayout = function getLayout(page){
    return <Layout>{page}</Layout>;
}

export const getServerSideProps = withLoginSessionSsr(
    async ({ req, res }) => {
      const data = req.session.data
  
      if (data) {
        return {
          redirect: {
            destination: '/brides',
            permanent: false,
          },
        }
      }
      return {
        props: { }
      }
    }
  )