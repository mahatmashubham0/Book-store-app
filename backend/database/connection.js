const mongoose = require('mongoose')

function connectivityOfDatabase() {
    try {
        mongoose.connect(process.env.mongo_url , 
            {
            // useNewUrlParser: true, 
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
            // this four line required in the part of when we use the local mongoose
        } )
        console.log("Contected To DB");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectivityOfDatabase;
