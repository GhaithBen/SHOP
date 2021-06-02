const mongoose = require("mongoose");
const uri =
  "mongodb+srv://abdelhak-touil:abd7188759@cluster0.r5s1r.mongodb.net/marketplace?retryWrites=true&w=majority";

// connect to mongoDB
const connected = async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("Connection is failed");
  }
};

module.exports = connected;
