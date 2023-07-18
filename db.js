const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/social-parivartan";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conected To Mongo Successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToMongo;