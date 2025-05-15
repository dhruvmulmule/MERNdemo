const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://username:password@clustername.serverstring.mongodb.net/db-name?retryWrites=true&w=majority'
            /* test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } */
        )
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    }
    catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;
