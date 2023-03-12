import Layout from "../../components/Global/Layout";
import { getDataOrder } from "../../adapters";
import SuccessPayment from "../../components/Form/Order/SuccessPayment";
import WaitingPayment from "../../components/Form/Order/WaitingPayment";


const OrderStatus = ({ data }) => {

    return (
        (data.IsPaid) ?
            <SuccessPayment data={data} /> :
            <WaitingPayment data={data} />
    )
}

export async function getServerSideProps({ query }) {
    const { orderId } = query;
    const res = await getDataOrder(orderId)
    const data = res.data.pemesanans.data[0]?.attributes
    // console.log("Test: " + Object.keys(data))

    if (!data) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            data
        }
    }
}

OrderStatus.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default OrderStatus