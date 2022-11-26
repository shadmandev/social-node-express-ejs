export const localsMiddleware = (req, res, next) => {
    res.locals.title = req.session.title;
    res.locals.content = req.session.content;
    next();
};
