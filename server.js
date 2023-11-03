require('dotenv').config({ path: ".env"});
const connectToDatabase = require("./config/db_connection");
const app= require("./app")
connectToDatabase(process.env._MONGO_URI,process.env._NODE_ENV);
const server=app.listen(process.env._PORT);
console.log(process.env._MONGO_URI);
module.exports = server;