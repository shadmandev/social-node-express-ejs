export const localsMiddleware = (req, res, next) => {
    res.locals.message = req.session.message;
    res.locals.status = req.session.status;
    delete req.session.message;
    delete req.session.status;
    res.locals.user = req.session.user;
    next();
};
