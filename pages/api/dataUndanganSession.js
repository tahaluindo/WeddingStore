import { withDataUndanganSessionRoute } from "../../utils/withSession";

export default withDataUndanganSessionRoute(dataUndanganSessionRoute);

async function dataUndanganSessionRoute(req, res) {
    if(req.method === "POST"){
        const { id,slug } = req.body;
        if(id && slug){
            req.session.data = {
                id: id,
                slug: slug,
                isDataUndanganFormPage: true
            }
            await req.session.save()
            return res.send({ ok: true})
        }
        return res.status(403).send("")
    }
    return res.status(403).send("")
}