const mongoose = require('mongoose');

const ShopsSchema = new mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
      },    
    shopImg: {
        type: String, 
        required: true
    },
    distance: Number
}, {timestamps: true});

mongoose.model('Shops', ShopsSchema);
