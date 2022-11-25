import mongoose from "mongoose";

mongoose.Promise = global.Promise;

let isConnected: mongoose.ConnectionStates;

const connectToDatabase = async () => {
    if (isConnected) {
        return Promise.resolve();
    }
    return mongoose.connect(`${process.env.MONGODB_URI}`).then(db => {
        isConnected = db.connections[0].readyState;
    });
};

export { connectToDatabase }
