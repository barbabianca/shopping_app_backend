const mongoose = require('mongoose')

const mongoConnection = ( dbURI) => {
    mongoose.connect(dbURI)
    .then ((res)=>{
        console.log("Connected to db")
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnection

// const mongoose = require('mongoose');

// const mongoConnection = async (dbURI) => {
//     try {
//         await mongoose.connect(dbURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to db");
        
//         mongoose.connection.on('error', err => {
//             console.error(`MongoDB connection error: ${err}`);
//         });
        
//         mongoose.connection.on('disconnected', () => {
//             console.log('MongoDB disconnected');
//         });
//     } catch (err) {
//         console.error(`Initial MongoDB connection error: ${err}`);
//         // You could also handle the error by re-throwing or passing it to a callback
//     }
// };

// module.exports = mongoConnection;
