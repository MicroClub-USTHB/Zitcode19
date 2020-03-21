const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/covid19",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true,
        useCreateIndex: true,
        dbName: "covid19"
    }
);

mongoose.connection.on("connected", () => {
    console.log("Connected to DB!");
});

module.exports.User = require("./user");
module.exports.Meeting = require("./meeting");
