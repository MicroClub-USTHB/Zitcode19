const express = require("express");
const router = express.Router({ mergeParams: true });

const {
    createZone,
    getZone,
    getZones,
    deleteZone
} = require("../handlers/zones");

// PREFIX - /api/zones/
router
    .route("/")
    .post(createZone)
    .get(getZones);

router
    .route("/:zone_id")
    .delete(deleteZone)
    .get(getZone);

module.exports = router;
