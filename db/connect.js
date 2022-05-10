const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url);
}

// MongoParseError: options usecreateindex, usefindandmodify are not supported{{ previously added as a second option at the connectDB}}
module.exports = connectDB;