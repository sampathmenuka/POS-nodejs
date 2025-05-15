const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName:{
            require:true,
            type:String
    },
    unitPrice:{
        require:true,
        type:Number
    },
        descripition:{
            require:true,
            type:String
    },
        image:{
            require:true,
            type:String
    },
        status:{
            require:true,
            type:Boolean
    },
        qtyOnHand:{
            require:true,
            type:Number
    }
    });

module.exports = mongoose.model('product', userSchema);