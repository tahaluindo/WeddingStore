import Head from "next/head";
import ImagePreview from "../components/Landing/Decor/ImagePreview";
import Content from "../components/Landing/Content/Content";
import MainContent from "../components/Landing/Content/MainContent";
import Product from "../components/Landing/Content/Product";
import Layout from "../components/Landing/Layout";
import { getDataPaketUndangan } from "../adapters";

export default function LandingPage({ data }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website Undangan Pernikahan" />
        <meta name="keywords" content="BridesVow, Undangan, Menikah" />
        <meta name="author" content="Radifan Fariz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BridesVow</title>
      </Head>
      <Layout>
        <MainContent>
          <ImagePreview data={data} />
        </MainContent>
        <Content />
        <Product />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await getDataPaketUndangan()
  const data = []
  res.data.paketUndangans.data.map((item) => {
    item.attributes.template_undangans.data.map((item) => {
      return (
        data.push(
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
      )
    })
  })
  return {
    props: {
      data
    }
  }
}


