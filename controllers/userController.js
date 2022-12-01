import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { makeHash } from "../utility/hash.js";
import { validate } from "../utility/validate.js";
import { render } from "ejs";
import { createToken } from "../utility/jtw.js";

//login
export const loginPage = (req, res) => {
    res.render("login");
};

//register
export const registerPage = (req, res) => {
    res.render("register");
};

//register user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //validation
        if (!name || !email || !password) {
            validate("All fields are required", "error", "/register", req, res);
        } else {
            const userExit = await User.findOne().where("email").equals(email);
            if (!userExit) {
                const user = await User.create({
                    name,
                    email,
                    password: makeHash(password),
                });
                validate("Registation Successfully", "success", "/", req, res);
            } else {
                validate("Email Already Exit", "error", "/register", req, res);
            }
        }
    } catch (error) {
        validate(error.message, "error", "/register", req, res);
    }
};

//login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            validate("All fields are required", "error", "/", req, res);
        } else {
            const userExit = await User.findOne().where("email").equals(email);
            if (userExit) {
                //check password
                const checkPass = bcrypt.compareSync(
                    password,
                    userExit.password
                );
                if (!checkPass) {
                    validate("Wrong Password", "error", "/", req, res);
                } else {
                    const token = createToken(
                        { id: userExit._id },
                        1000 * 60 * 60 * 24
                    );
                    req.session.user = userExit;
                    res.cookie("authToken", token);
                    validate(
                        "Login Successfully",
                        "success",
                        "/profile",
                        req,
                        res
                    );
                }
            } else {
                validate("User Not Found", "error", "/", req, res);
            }
        }
    } catch (error) {
        validate(error.message, "error", "/", req, res);
    }
};

//logout user
export const logoutUser = (req, res) => {
    delete req.session.user;
    res.clearCookie("authToken");
    validate("Logout Successfully", "success", "/", req, res);
};

//user profile
export const userProfile = (req, res) => {
    res.render("profile");
};
