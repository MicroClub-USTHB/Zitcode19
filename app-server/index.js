require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");

// Import Routes
const authRoutes = require("./routes/auth");
const meetingsRoutes = require("./routes/meetings");
const zonesRoutes = require("./routes/zones");

// Import Middlewares
const {
    loginRequired,
    ensureCorrectUser,
    ensureUserIsAdmin
} = require("./middleware/auth");
const db = require("./models");

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// all my routes here - they will com later!!
// User Auth
app.use("/api/auth", authRoutes);

// Meetings
app.use(
    "/api/users/:user_id/:user_id2/meetings",
    loginRequired,
    ensureCorrectUser,
    meetingsRoutes
);

app.get("/api/meetings", loginRequired, async function(req, res, next) {
    try {
        let meetings = await db.Meeting.find()
            .sort({ createdAt: "desc" })
            .populate("user1", {
                firstName: true,
                lastName: true,
                profileImageUrl: true
            })
            .populate("user2", {
                firstName: true,
                lastName: true,
                profileImageUrl: true
            });
        return res.status(200).json(meetings);
    } catch (err) {
        return next(err);
    }
});

// Zones
app.use("/api/zones/:user_id", loginRequired, ensureUserIsAdmin, zonesRoutes);

// Error Handling
app.use(function(req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is starting on PORT: ${PORT}`);
});
