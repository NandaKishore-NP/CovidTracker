const mongoose = require('mongoose')
// const schema =require('./covid_details')


     mongoose.connect("mongodb://localhost:27017/covidTracker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(()=>console.log("Connected to Mongodb"))
    .catch((err)=>console.Consolelog("error"))
    



module.exports ;