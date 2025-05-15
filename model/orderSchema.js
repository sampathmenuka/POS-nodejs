const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
        customer:{
            require:true,
            type:Object
        },
        product:{
            require:true,
            type:Object
        },
        total:{
            require:true,
            type:Number
        },
        qty:{
            require:true,
            type:Number
        },
        date:{
            require:true,
            type:String
        },
        isPaid:{
            require:true,
            type:Boolean
        }
    });

module.exports = mongoose.model('product', userSchema);