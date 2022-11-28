// validate msg
export const validate = (msg, status, redirect, req, res) => {
    req.session.message = msg;
    req.session.status = status;
    res.redirect(redirect);
};
