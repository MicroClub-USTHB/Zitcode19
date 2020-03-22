const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createMeeting,
    getMeeting,
    deleteMeeting
} = require("../handlers/meeting");

// prefix - /api/users/:id1/:id2/meeting/:meeting_id
router.route("/").post(createMeeting);

// prefix - /api/users/:id1/:id2/meeting/:meeting_id
router
    .route("/:meeting_id")
    .get(getMeeting)
    .delete(deleteMeeting);

module.exports = router;
