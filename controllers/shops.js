
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Shops = mongoose.model('Shops');

exports.nearby = async function(req, res){
    const user = await User.findById(req.session.userId);
    const unlistedShops = user.preferred.concat(user.dislikes)
                        .filter((v, i, a) => a.indexOf(v) === i);
    const shops = await Shops.find({ _id: { $nin: unlistedShops } });
    res.json({status: 'ok', data: shops});
};

exports.preferred = async function(req, res){
    const user = await User.findById(req.session.userId);
    res.json({status: 'ok', data: shops.preferred});
};

exports.like = async function(req, res){
    update('$push', 'preferred', req.body.id);
};


exports.dislike = async function(req, res){
    update('$pull', 'dislikes', req.body.id);
};

exports.remove = async function(req, res){
    update('$pull', 'preferred', req.body.id);
};


async function update(operation, field, id){
    let obj1, obj2 = {};
    obj2[field] = mongoose.Types.ObjectId(id)
    obj1[operation] = obj2;
    const data = await User.findByIdAndUpdate(req.session.userId, obj1, {safe: true, upsert: true});
    res.json({status: 'ok', data: data});
}