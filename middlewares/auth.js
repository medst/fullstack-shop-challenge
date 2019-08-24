module.exports.auth = function (req, res, next) {
    if(req.session.userId)
        next();
    else
        res.send({status: 'error', data: 'not authorized, please restart the app.'});
}