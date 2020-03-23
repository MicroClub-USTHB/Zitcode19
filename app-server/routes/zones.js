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
    createPharmacy,
    getPharmacies,
    getPharmacy,
    deletePharmacy
} = require("../handlers/pharmacies");

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
// PREFIX - /api/zones/:user_id/:zone_id/pharmacy/
router
    .route("/:zone_id/pharmacy")
    .post(createPharmacy)
    .get(getPharmacies);

// PREFIX - /api/zones/:user_id/:zone_id/pharmacy/:pharmacy_id
router
    .route("/:zone_id/pharmacy/:pharmacy_id")
    .delete(deletePharmacy)
    .get(getPharmacy);

module.exports = router;
