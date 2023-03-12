import { getDataFaq } from "../../adapters";
import Faq from "../../components/Faq/faq";
import Layout from "../../components/Global/Layout";

export default function FaqPage({ data }) {
    return (
        <Faq data={data} />
    )
}

export async function getStaticProps() {
    const res = await getDataFaq()
    const data = []
    res.data.faqs.data.map((item) => {
        data.push({
            kategori:item.attributes.Kategori,
            faqs:item.attributes.Faq
        })
    })
    return {
        props: {
            data
        }
    }
}

FaqPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}