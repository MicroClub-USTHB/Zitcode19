const db = require("../models");

// POST - /api/zones/:user_id/:zone_id/pharmacy/
exports.createPharmacy = async function(req, res, next) {
    try {
        let pharmacy = await db.Pharmacy.create({
            ...req.body,
            zone: req.params.zone_id
        });

        let zone = await db.Zone.findById(req.params.zone_id);
        zone.pharmacies.push(pharmacy.id);
        await zone.save();

        let foundPharmacy = await db.Pharmacy.findById(pharmacy.id).populate(
            "zone",
            {
                wilaya: true,
                risk_state: true
            }
        );

        return res.status(200).json(foundPharmacy);
    } catch (err) {
        return next(err);
    }
};

// GET - /api/zones/:user_id/:zone_id/pharmacy/
exports.getPharmacies = async function(req, res, next) {
    try {
        let foundPharmacies = await db.Pharmacy.find().populate("zone", {
            wilaya: true,
            risk_state: true
        });

        return res.status(200).json(foundPharmacies);
    } catch (err) {
        return next(err);
    }
};

// GET - /api/zones/:user_id/:zone_id/pharmacy/:pharmacy_id
exports.getPharmacy = async function(req, res, next) {
    try {
        let foundPharmacy = await db.Pharmacy.findById(
            req.params.pharmacy_id
        ).populate("zone", {
            wilaya: true,
            risk_state: true
        });

        return res.status(200).json(foundPharmacy);
    } catch (err) {
        return next(err);
    }
};

// DELETE - /api/zones/:user_id/:zone_id/pharmacy/:pharmacy_id/
exports.deletePharmacy = async function(req, res, next) {
    try {
        let foundPharmacy = await db.Pharmacy.findById(req.params.pharmacy_id);

        await foundPharmacy.remove();

        return res.status(200).json(foundPharmacy);
    } catch (err) {
        return next(err);
    }
};
