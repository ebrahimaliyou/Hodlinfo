const express = require('express');
const route = require('./routes/route')
const connectDB = require('./db/connect')
const fetch_api = require('./data')
require('dotenv').config();

const PORT = process.env.PORT || 3000 //PORT

const app = express();


app.use(express.json());    //body to json converter for future API calls
app.use(express.static('./public')); //serving the static files from public || comment out this line to see the json formatted data
app.use('/',route);    //the routes




//first checking if the database is properly setup before spinning up the server to listen

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        fetch_api();
        console.log("CONNECTED TO db...")
        app.listen(PORT,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log(`server listening on port ${PORT}...`);
            }
        
        })
    } catch (error) {
        console.log(error)
        return;
    }
}

start();
