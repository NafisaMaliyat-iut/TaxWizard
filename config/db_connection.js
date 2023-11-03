const mongoose = require("mongoose");

const connectToDatabase = (mongodburi,environment) => {
  const db=mongoose.connect(mongodburi, {
    serverSelectionTimeoutMS: 30000,
    dbName:environment
  }).then(() => {
    return true;
  })
    .catch(() => {
      return false;
    });
  return db;
};

module.exports = connectToDatabase;