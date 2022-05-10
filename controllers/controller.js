const List = require('../models/crypto_list')


const getUpdatedList = async (req,res)=>{
    try{
        const list = await List.find({});
        res.status(200).json({list});
    }catch(error){
        res.status(500).json({msg:error})
    }

}

module.exports = {getUpdatedList};