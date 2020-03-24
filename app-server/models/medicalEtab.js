const mongoose = require("mongoose");
const Zone = require("./zone");

const medicalEtabSchema = new mongoose.Schema({
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
    type: {
        type: String,
        required: true,
        enum: ["Pharmacy", "Hospital", "Clinic", "Polyclinic", "Dispensary"]
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Zone"
    }
});

medicalEtabSchema.pre("remove", async function(next) {
    try {
        let zone = await Zone.findById(this.zone);

        zone.medical_etablissement.remove(this.id);
        await zone.save();

        return next();
    } catch (err) {
        return next(err);
    }
});

const MedicalEtablissement = mongoose.model(
    "MedicalEtablissement",
    medicalEtabSchema
);

module.exports = MedicalEtablissement;
