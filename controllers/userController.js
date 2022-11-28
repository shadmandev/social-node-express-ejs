import User from "../models/User.js";
import { makeHash } from "../utility/hash.js";
import { validate } from "../utility/validate.js";

//login
export const loginPage = (req, res) => {
    res.render("login");
};

//register
export const registerPage = (req, res) => {
    res.render("register");
};

//register user
export const registerUser = (req, res) => {
    try {
        const { name, email, password } = req.body;

        //validation
        if (!name || !email || !password) {
            validate("All fields are required", "error", "/register", req, res);
        } else {
            const user = User.create({
                name,
                email,
                password: makeHash(password),
            });
            validate("Registation Successfully", "success", "/", req, res);
        }
    } catch (error) {
        validate(error.message, "error", "/register", req, res);
    }
};
