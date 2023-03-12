import { getDataPaketUndangan } from "../../adapters";
import Collections from "../../components/Collections/Collections";
import Layout from "../../components/Global/Layout";

export default function CollectionPage({data}){
    console.log(data)
    return(
        <Collections data={data}/>
    )
}

export async function getStaticProps(){
    const res = await getDataPaketUndangan()
    const data = []
    res.data.paketUndangans.data.map((item) => {
        data.push({
            id: item.id,
            paket_undangan: {
                nama: item.attributes.Nama,
                harga: item.attributes.Harga,
                fitur: item.attributes.Fitur,
                template_undangan: item.attributes.template_undangans.data.map((item) => {
                    return (
                        {
                            id: item.id,
                            data: {
                                nama: item.attributes.Nama,
                                slug: item.attributes.Slug,
                                isCreatorChoice: item.attributes.IsCreatorChoice,
                                template_id: item.attributes.TemplateID,
                                url: item.attributes.Gambar.data.attributes.url
                            }

                        }
                    )
                })
            }
        })
    })
    return{
        props: {
            data
        }
    }
}

CollectionPage.getLayout = function getLayout(page){
 return <Layout>{page}</Layout>
}