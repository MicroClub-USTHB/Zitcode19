const express = require("express");
const router = express.Router({ mergeParams: true });

// Importing handlers
const {
    createZone,
    getZone,
    getZones,
    deleteZone
} = require("../handlers/zones");

const {
    createMedicalEtab,
    getMedicalEtabs,
    getMedicalEtab,
    deleteMedicalEtab
} = require("../handlers/medicalEtabs");

// - Routes -
// PREFIX - /api/zones/
router
    .route("/")
    .post(createZone)
    .get(getZones);

router
    .route("/:zone_id")
    .delete(deleteZone)
    .get(getZone);

// Pharmacies
// PREFIX - /api/zones/:user_id/:zone_id/medical_etab/
router
    .route("/:zone_id/medical_etab")
    .post(createMedicalEtab)
    .get(getMedicalEtabs);

// PREFIX - /api/zones/:user_id/:zone_id/medical_etab/:medical_etab_id
router
    .route("/:zone_id/medical_etab/:medical_etab_id")
    .delete(deleteMedicalEtab)
    .get(getMedicalEtab);

module.exports = router;
