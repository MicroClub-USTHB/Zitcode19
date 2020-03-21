const express = require("express");
const router = express.Router({ mergeParams: true });

const { createMeeting } = require("../handlers/meeting");

// prefix - /api/users/:id/messages
router.route("/").post(createMeeting);

module.exports = router;
