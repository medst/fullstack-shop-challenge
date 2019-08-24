
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Shops = mongoose.model('Shops');

exports.nearby = async function(req, res){
    const user = await User.findById(req.session.userId);
    const unlistedShops = user.preferred.concat(user.dislikes)
                        .filter((v, i, a) => a.indexOf(v) === i);
    const shops = await Shops.find({ _id: { $nin: unlistedShops } }).limit(20).sort('distance');
    res.json({status: 'ok', data: shops});
};

exports.preferred = async function(req, res){
    const user = await User.findById(req.session.userId).populate('preferred');
    res.json({status: 'ok', data: user.preferred});
};

exports.like = async function(req, res){
    update('$push', 'preferred', req.body.id, res, req);
};

exports.dislike = async function(req, res){
    update('$push', 'dislikes', req.body.id, res, req);
};

exports.remove = async function(req, res){
    update('$pull', 'preferred', req.body.id, res, req);
};


async function update(operation, field, id, res, req){
    let obj1 = {}, obj2 = {};
    obj2[String(field)] = String(mongoose.Types.ObjectId(id));
    obj1[String(operation)] = obj2;
    await User.findByIdAndUpdate(req.session.userId, obj1, {safe: true, upsert: true});
    res.json({status: 'ok'});
}