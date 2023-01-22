

const allowedOrigins = require('./allowedOrigins')
// use  of allowedorigins if origin is available than
//it gives success code if from different origin not listed in allowedOrigins than it gives error


const corsOptions = {
    origin: (origin, callback) =>{
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}

module.exports = corsOptions