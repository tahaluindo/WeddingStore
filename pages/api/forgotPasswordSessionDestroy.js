import { withForgetPasswordSessionRoute } from "../../utils/withSession";

export default withForgetPasswordSessionRoute(forgotPasswordSessionDestroyRoute);

async function forgotPasswordSessionDestroyRoute(req, res, session) {
    req.session.destroy()
    return res.send({ok:true})
}