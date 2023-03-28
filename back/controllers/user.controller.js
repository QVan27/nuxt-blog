const User = require('../Models/User.mysql');

exports.create = async function (req, res) {
    const users = new User({
        name: req.body.name,
        role: req.body.role,
    });

    await User.create(users, async (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({ data: data });
    })
}

exports.getAll = async function (req, res) {
    await User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({ data: data });
    })
}

exports.getOne = async function (req, res) {
    await User.getOne(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({ data: data });
    })
}

exports.updateById = async function (req, res) {
    const user = new User({
        name: req.body.name,
        role: req.body.role,
    });

    await User.updateById(req.params.id, user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({ data: data });
    })
}

exports.deleteById = async function (req, res) {
    await User.deleteById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || 'Une erreur est arrive'
            })
        }

        res.json({ data: data });
    })
}