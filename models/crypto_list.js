const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
    id:{
        type:String,
        required:[true,'field required']
    },
    name:{
        type:String,
        required:[true,'field required']
    },
    last:{
        type:String,
        required:[true,'field required']
    },
    buy:{
        type:String,
        required:[true,'field required']
    },
    sell:{
        type:String,
        required:[true,'field required']
    },
    volume:{
        type:String,
        required:[true,'field required']
    },
    base_unit:{
        type:String,
        required:[true,'field required']
    }
});

module.exports = mongoose.model('crypto_list',CryptoSchema);

