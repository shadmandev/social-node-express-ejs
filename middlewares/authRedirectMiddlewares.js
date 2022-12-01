import { validate } from "../utility/validate.js";

//auth redirect
export const authRedirectMiddleware = (req, res, next) => {
    const token = req.cookies.authToken;
    if (token) {
        next();
    } else {
        validate("You are not Allow", "error", "/", req, res);
    }
};
