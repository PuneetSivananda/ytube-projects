class Constants {

    static DB_CONNECTION_STRING: string = process.env.MONGODB_URI || "";
    static ServerSecret: string = "My-Secret";
}
Object.seal(Constants);
export default Constants;

