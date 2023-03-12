import { withForgetPasswordSessionRoute } from "../../utils/withSession";

export default withForgetPasswordSessionRoute(forgotPasswordSessionRoute);

async function forgotPasswordSessionRoute(req, res) {
    if(req.method === "POST"){
        const { email } = req.body;
        if(email){
            req.session.data = {
                email: email,
                isOtpPage: true
            }
            await req.session.save()
            return res.send({ ok: true})
        }
        return res.status(403).send("")
    }
    return res.status(403).send("")
}