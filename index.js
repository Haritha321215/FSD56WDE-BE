// copilate- extention - generate the code, content for readme

// connect to the database
// we use mongoose(library)

// import the mongoose module
const mongoose = require("mongoose");

// import the config module
const config = require("./utils/config");

// import the app module
const app = require("./app");

//console.log the message connecting to mongodb
console.log("connecting to mongodb..");

// connect to the database
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
    // start the server
    // listen to the port
    app.listen(config.PORT, () => {
      console.log(`server is running ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to Mongodb", error.message);
  });
