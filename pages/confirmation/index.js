import ConfirmForm from "../../components/Form/Confrimation/ConfirmForm";
import Layout from "../../components/Global/Layout";

const ConfirmationPage = () => {

  return (
    <ConfirmForm/>
  );
};

ConfirmationPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ConfirmationPage;
