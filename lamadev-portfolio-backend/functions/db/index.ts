import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || ""

mongoose.Promise = global.Promise;

let isConnected;
const connectToDatabase = () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    console.log('=> using new database connection');
    return mongoose.connect(MONGODB_URI).then(db => {
        isConnected = db.connections[0].readyState;
    });
};

export { connectToDatabase }
