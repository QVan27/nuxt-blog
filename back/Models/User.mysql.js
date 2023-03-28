const sql = require('../config/mysql');

const User = function (User) {
    this.name = User.title;
    this.role = User.author;
}

User.create = (newUser, result) => {
    sql.query('INSERT INTO User SET ?', newUser, (err, res) => {
        if (err) {
            result(err, null)
            return;
        }
        result(null, { id: res.insertId, ...newUser })
    })
}

User.getAll = (result) => {
    sql.query('SELECT * FROM User', (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { data: res })
    })
}

User.getOne = (id, result) => {
    sql.query(`SELECT * FROM User WHERE id=${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { data: res })
    })
}

User.updateById = (id, User, result) => {
    sql.query(`UPDATE User SET name = ? ,  role = ?  WHERE id = ${id} `,
        [User.name, User.role], (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, { data: res })
        })
}

User.deleteById = (id, result) => {
    sql.query(`DELETE FROM User WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { data: res })
    })
}

module.exports = User;