const db = require("../models");

// POST - /api/zones/:user_id/:zone_id/medical_etab
exports.createMedicalEtab = async function(req, res, next) {
    try {
        let medicEtab = await db.MedicalEtablissement.create({
            ...req.body,
            zone: req.params.zone_id
        });

        let zone = await db.Zone.findById(req.params.zone_id);
        zone.medical_etablissement.push(medicEtab.id);
        await zone.save();

        let foundMedicalEtablissement = await db.MedicalEtablissement.findById(
            medicEtab.id
        ).populate("zone", {
            wilaya: true,
            risk_state: true
        });

        return res.status(200).json(foundMedicalEtablissement);
    } catch (err) {
        return next(err);
    }
};

// GET - /api/zones/:user_id/:zone_id/medical_etab
exports.getMedicalEtabs = async function(req, res, next) {
    try {
        let foundmedicalEtablissements = await db.MedicalEtablissement.find().populate(
            "zone",
            {
                wilaya: true,
                risk_state: true
            }
        );

        return res.status(200).json(foundmedicalEtablissements);
    } catch (err) {
        return next(err);
    }
};

// GET - /api/zones/:user_id/:zone_id/medical_etab/:medical_etab_id
exports.getMedicalEtab = async function(req, res, next) {
    try {
        let foundmedicalEtablissement = await db.MedicalEtablissement.findById(
            req.params.medical_etab_id
        ).populate("zone", {
            wilaya: true,
            risk_state: true
        });

        return res.status(200).json(foundmedicalEtablissement);
    } catch (err) {
        return next(err);
    }
};

// DELETE - /api/zones/:user_id/:zone_id/medical_etab/:medical_etab_id
exports.deleteMedicalEtab = async function(req, res, next) {
    try {
        let foundmedicalEtablissement = await db.MedicalEtablissement.findById(
            req.params.medical_etab_id
        );

        await foundmedicalEtablissement.remove();

        return res.status(200).json(foundmedicalEtablissement);
    } catch (err) {
        return next(err);
    }
};
