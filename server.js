import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import session from "express-session";
import ejslayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser";
import { mongoDBConnection } from "./config/db.js";
import { localsMiddleware } from "./middlewares/localsMiddleware.js";
import userRoute from "./routes/user.js";

//environment variables
dotenv.config();
const PORT = process.env.PORT || 9000;

//express init
const app = express();

//cookieParser init
app.use(cookieParser());

//express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup session
app.use(
    session({
        secret: "I love MERN",
        saveUninitialized: true,
        resave: false,
    })
);
app.use(localsMiddleware);

//static folder
app.use(express.static("public"));

//ejs template setup
app.set("view engine", "ejs");
app.set("layout", "layouts/app");
app.use(ejslayouts);

//routes
app.use("/", userRoute);

//listen
app.listen(PORT, () => {
    mongoDBConnection();
    console.log(`server is running on port ${PORT}`.bgMagenta.black);
});
