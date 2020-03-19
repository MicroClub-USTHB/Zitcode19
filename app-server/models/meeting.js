const mongoose = require("mongoose");
const User = require("./user");

var meetingSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    Date: {
        type: Date,
        default: Date.now
    },
    place: {
        type: String,
        required: true
    }
});

meetingSchema.pre("remove", async function(next) {
    try {
        // find both users
        // remove the id of the meeting from their messages list
        // save those users
        // return next
        let user1 = await User.findById(this.user1);
        let user2 = await User.findById(this.user2);

        user1.message.remove(this.id);
        user2.message.remove(this.id);

        await user1.save();
        await user2.save();

        return next();
    } catch (err) {
        return next(err);
    }
});

const Meeting = mongoose.model("Meeting", meetingSchema);
module.exports = Meeting;
