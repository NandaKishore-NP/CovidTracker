const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Regester")
.then(()=>{
    console.log("mongodb connectrd")
}).catch((err)=>{console.log(err)})

module.exports
