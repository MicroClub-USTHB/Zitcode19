const db = require("../models");

// POST - /api/users/:user_id/:user_id2/meetings
exports.createMeeting = async function(req, res, next) {
    try {
        let meeting = await db.Meeting.create({
            place: req.body.place,
            user1: req.params.user_id,
            user2: req.params.user_id2
        });

        let foundUser1 = await db.User.findById(req.params.user_id);
        let foundUser2 = await db.User.findById(req.params.user_id2);

        foundUser1.meetings.push(meeting.id);
        foundUser2.meetings.push(meeting.id);

        await foundUser1.save();
        await foundUser2.save();

        let foundMeeting = await db.Meeting.findById(meeting.id)
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

        return res.status(200).json(foundMeeting);
    } catch (err) {
        return next(err);
    }
};

// GET - /api/users/:user_id/:user_id2/meetings/:meeting_id
exports.getMeeting = async function(req, res, next) {
    try {
        let meeting = await db.Meeting.findById(req.params.meeting_id);
        return res.status(200).json(meeting);
    } catch (err) {
        return next(err);
    }
};

// DELETE - /api/users/:user_id/:user_id2/meetings/:meeting_id
exports.deleteMeeting = async function(req, res, next) {
    try {
        let foundMeeting = await db.Meeting.findById(req.params.meeting_id);
        await foundMeeting.remove();
        return res.status(200).json(foundMeeting);
    } catch (err) {
        return next(err);
    }
};
