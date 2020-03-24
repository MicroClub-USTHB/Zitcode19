const express = require("express");
const router = express.Router({ mergeParams: true });

// Import Handlers
const {
    createMedicalEtab,
    getMedicalEtabs,
    getMedicalEtab,
    deleteMedicalEtab
} = require("../handlers/medicalEtabs");

// Pharmacies
// PREFIX - /api/zones/:user_id/medical_etab
router.get("/", getMedicalEtabs);

// PREFIX - /api/zones/:user_id/medical_etab/:zone_id
router.post("/:zone_id", createMedicalEtab);

// PREFIX - /api/zones/:user_id/medical_etab/:medical_etab_id
router
    .route("/:medical_etab_id")
    .delete(deleteMedicalEtab)
    .get(getMedicalEtab);

module.exports = router;
