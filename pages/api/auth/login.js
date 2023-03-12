import { verify } from "jsonwebtoken";
import { checkPemesanan, login } from "../../../adapters/auth";
import { withLoginSessionRoute } from "../../../utils/withSession";

export default withLoginSessionRoute(loginSessionRoute);

const jwtSecret = process.env.STRAPI_JWT_SECRET

async function loginSessionRoute(req, res) {
    if (req.method === "POST") {
        try {

            const { identifier, password } = req.body

            const checkPemesananResponse = await checkPemesanan(identifier)
                .then((res) => res.data.checkPemesanan.data.attributes)

            if (checkPemesananResponse?.IsPaid) {
                const loginParams = {
                    identifier: identifier,
                    password: password,
                    provider: "local"
                }
                try {
                    const loginData = await login(loginParams)
                        .then((res) => res.data.login)
                    if (loginData) {
                        req.session.data = {
                            jwt: loginData.jwt,
                            jwt_payload: verify(loginData.jwt, jwtSecret),
                            orderId: loginData.user.username,
                            user: loginData.user
                        }
                        await req.session.save()
                        return res.send({ ok: true })
                    }
                } catch (error) {
                    return res.status(403).send({
                        error: {
                            message: "Cek lagi OrderID/Email dan Password !"
                        }
                    })
                }
            }
            return res.status(403).send(
                {
                    error: {
                        message: "OrderID/Email tidak valid ! (Kemungkinan anda belum melakukan pembayaran)"
                    }
                }
            )
        } catch (error) {
            return res.status(403).send(
                {
                    error: {
                        message: "OrderID/Email tidak terdaftar !"
                    }
                }
            )
        }
    }
    return res.status(403).send({
        error: {
            message: "Forbidden Method !"
        }
    })
}