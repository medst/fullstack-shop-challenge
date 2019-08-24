const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },    
    password: {
        type: String, 
        required: true
    },
    preferred: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shops' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shops' }]
}, {timestamps: true});


UserSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.email = this.email.toLowerCase();
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

mongoose.model('User', UserSchema);
