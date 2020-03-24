const db = require("../models");

exports.createZone = async function(req, res, next) {
    try {
        let zone = await db.Zone.create(req.body);

        return res.status(200).json(zone);
    } catch (err) {
        return next(err);
    }
};

exports.getZone = async function(req, res, next) {
    try {
        let foundZone = await db.Zone.findById(req.params.zone_id);

        return res.status(200).json(foundZone);
    } catch (err) {
        return next(err);
    }
};

exports.getZones = async function(req, res, next) {
    try {
        let foundZones = await db.Zone.find();

        return res.status(200).json(foundZones);
    } catch (err) {
        return next(err);
    }
};

exports.deleteZone = async function(req, res, next) {
    try {
        let deletedZone = await db.Zone.findByIdAndRemove(req.params.zone_id);

        return res.status(200).json(deletedZone);
    } catch (err) {
        return next(err);
    }
};
