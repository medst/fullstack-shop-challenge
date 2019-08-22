
const mongoose = require('mongoose');


const asyncMiddleware = require('../middlewares/asyncmw');
const User = mongoose.model('User');


exports.login = async function(req, res){
    const user = await User.findOne({email: req.body.email.toLowerCase()});
    if(!user)
        return res.json({status:'error', data: 'email or password incorrect'});
    else
        user.comparePassword(req.body.password, (error, match) => {
            if(!match)
                return res.json({status:'error', data: "email or password incorrect"});
            else {
                res.json({status: 'ok', data: req.body.email});
                req.session.userId = user._id;
            }
        });       
};


exports.signup = async function(req, res){
    const user = await User.findOne({email: req.body.email.toLowerCase()});
    if(user)
        return res.json({status:'error', data: 'email already exist'});
    else{
        const newUser = new User(req.body);
        await newUser.save();
        res.json({status: 'ok', data: newUser.email});
        req.session.userId = newUser._id;
    }
};

exports.logout = function(req, res){
    res.json({status: 'ok'});
}