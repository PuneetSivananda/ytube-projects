import mongoose from "mongoose";

mongoose.Promise = global.Promise;

let isConnected: mongoose.ConnectionStates;

const connectToDatabase = async () => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return Promise.resolve();
    }
    console.log(process.env.MONGODB_URI)
    return mongoose.connect(`${process.env.MONGODB_URI}`).then(db => {
        console.log("===> connected to mongodb" + db.connections[0].readyState)
        isConnected = db.connections[0].readyState;
    });
};

export { connectToDatabase }
