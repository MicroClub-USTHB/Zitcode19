const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    wilaya: {
        type: String,
        required: true
    },
    risk_state: {
        type: String,
        required: true
    },
    medical_etablissement: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MedicalEtablissement"
        }
    ]
});

const Zone = mongoose.model("Zone", zoneSchema);

module.exports = Zone;
