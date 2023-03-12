import { withDataUndanganSessionRoute } from "../../utils/withSession";

export default withDataUndanganSessionRoute(dataUndanganSessionDestroyRoute);

async function dataUndanganSessionDestroyRoute(req, res, session) {
    req.session.destroy()
    return res.send({ok:true})
}