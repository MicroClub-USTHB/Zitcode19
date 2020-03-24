const express = require("express");
const router = express.Router({ mergeParams: true });

// Importing handlers
const {
    createZone,
    getZone,
    getZones,
    deleteZone
} = require("../handlers/zones");

// - Zones -
// PREFIX - /api/zones/
router
    .route("/")
    .post(createZone)
    .get(getZones);

// - Zones - Delete and Get a Zone -
router
    .route("/:zone_id")
    .delete(deleteZone)
    .get(getZone);

module.exports = router;
