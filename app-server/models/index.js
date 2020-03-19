const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/covid19", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
});

module.exports.User = require("./user");
module.exports.Meeting = require("./meeting");
