
const mongoose = require('mongoose');

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
                req.session.userId = user._id;
                return res.json({status: 'ok', data: req.body.email});
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
        req.session.userId = newUser._id;
        return res.json({status: 'ok', data: newUser.email});
    }
};

exports.logout = function(req, res){
    req.session.userId = null;
    res.json({status: 'ok'});
}