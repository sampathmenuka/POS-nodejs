const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
        username:{
            require:true,
            type:String
        },
        password:{
            require:true,
            type:String
        },
        fullname:{
            require:true,
            type:String
        },
        address:{
            require:true,
            type:String
        },
        status:{
            require:true,
            type:Boolean
        },
        city:{
            require:true,
            type:String
        }
        });

module.exports = mongoose.model('user', userSchema);