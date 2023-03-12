import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const forgetPasswordSessionOptions = {
    cookieName: "forgetPasswordSession",
    password: process.env.SECRET_COOKIE_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
const dataUndanganSessionOptions = {
    cookieName: "dataUndanganSession",
    password: process.env.SECRET_COOKIE_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
const loginSessionOptions = {
    cookieName: "loginSession",
    password: process.env.SECRET_COOKIE_PASSWORD,
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

export function withForgetPasswordSessionRoute(handler) {
    return withIronSessionApiRoute(handler, forgetPasswordSessionOptions);
}

export function withForgetPasswordSessionSsr(handler) {
    return withIronSessionSsr(handler, forgetPasswordSessionOptions);
}
export function withDataUndanganSessionRoute(handler) {
    return withIronSessionApiRoute(handler, dataUndanganSessionOptions);
}

export function withDataUndanganSessionSsr(handler) {
    return withIronSessionSsr(handler, dataUndanganSessionOptions);
}
export function withLoginSessionRoute(handler) {
    return withIronSessionApiRoute(handler, loginSessionOptions);
}

export function withLoginSessionSsr(handler) {
    return withIronSessionSsr(handler, loginSessionOptions);
}