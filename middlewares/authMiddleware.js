import { validate } from "../utility/validate.js";

//auth redirect
export const authMiddleware = (req, res, next) => {
    const token = req.cookies.authToken;
    if (token) {
        validate("You are Already login", "error", "/profile", req, res);
    } else {
        next();
    }
};
