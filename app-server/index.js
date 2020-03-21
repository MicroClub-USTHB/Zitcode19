require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const meetingsRoutes = require("./routes/meetings");

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// all my routes here - they will com later!!
app.use("/api/auth", authRoutes);
app.use("/api/users/:id1/:id2/meetings", meetingsRoutes);

app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is starting on PORT: ${PORT}`);
});
