const mongoose = require("mongoose");
const Zone = require("./zone");

const pharmacySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Zone"
    }
});

pharmacySchema.pre("remove", async function(next) {
    try {
        let zone = await Zone.findById(this.zone);

        zone.pharmacies.remove(this.id);
        await zone.save();

        return next();
    } catch (err) {
        return next(err);
    }
});

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

module.exports = Pharmacy;
