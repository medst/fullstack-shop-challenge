

exports.validateUserInput = function(req, res, next){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(req.body.email).toLowerCase()) &&
        req.body.email && req.body.password 
        && req.body.password.length > 0)
        next();
    else
        return res.json({status:'error', data: 'enter a valid email and password'});
}

exports.validateShopInput = function(req, res, next){
    if(req.body.id && req.body.id.length>0)
        next();
    else
        return res.json({status:'error', data: 'enter a valid shop'});
}