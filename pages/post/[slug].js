
import { getDataUndangan } from '../../adapters';
import { templateAll } from '../../templates/TemplateAll';
import Custom404 from '../404';


export async function getStaticProps({ params }) {


    const { slug } = params

    const data = await getDataUndangan(slug)

    return {
        props: data,
        revalidate: 10,
    };
}

export async function getStaticPaths() {


    const data = await getDataUndangan()
    const actualData = data.data.dataUndangans.data

    const paths = actualData.map((item) => ({
        params: { slug: item.attributes.Slug },
    }))

    return {
        paths,
        fallback: 'blocking',
    };

}


const Post = ({ data }) => {

    try {
        const templateId = data.dataUndangans.data[0].attributes.template_undangan.data.attributes.TemplateID
        const getTemplate = templateAll[templateId]
        return (
            getTemplate(data.dataUndangans.data[0].attributes)
        )
    } catch (error) {
        return (
            <Custom404 />
        )
    }
}

export default Post