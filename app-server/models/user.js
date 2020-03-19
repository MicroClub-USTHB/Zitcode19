const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    profileImageUrl: {
        type: String
    },
    meetings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting"
        }
    ]
});

userSchema.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        let hashedPassword = await bcrypt.hash(this.password, 10);

        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
    try {
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        return next(err);
    }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
