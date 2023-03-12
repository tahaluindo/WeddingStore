import { withLoginSessionRoute } from "../../../utils/withSession";

export default withLoginSessionRoute(loginSessionDestroyRoute);

async function loginSessionDestroyRoute(req, res, session) {
    req.session.destroy()
    return res.send({ok:true})
}