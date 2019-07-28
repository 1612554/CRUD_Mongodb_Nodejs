var mongoose = require('mongoose');


var dbURL = require('./properties').DB;

module.exports = ()=>{
    mongoose.connect(dbURL);

    mongoose.connection.on('connected', ()=>{
        console.log("Connected");
    });

    mongoose.connection.on('error', (error)=>{
        console.log(`Error:
        ${error}
        `);
    });

    mongoose.connection.on('disconnected', function(){
        console.log("Mongoose default connection is disconnected");
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });
}
