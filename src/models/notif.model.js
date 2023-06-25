 const dbpool = require('../config/database');

const getNofti = () => {
    const sql = 'SELECT * FROM notifikasi';
    return dbpool.query(sql);
}

const createNewNoti = (body) => {
    
    const sql = `INSERT INTO notifikasi (judul, isi)
                VALUES ('${body.judul}', '${body.isi}')`;

    return dbpool.query(sql);
}

const updateNoti = (id, body) => {
    const sql = `UPDATE notifikasi SET judul = '${body.judul}', isi = '${body.isi}' WHERE idnotif = ${id}`;

    return dbpool.query(sql);
}

const deleteNoti = (id) => {
    const sql = `DELETE FROM notifikasi WHERE idnotif = ${id}`;

    return dbpool.query(sql);
}

module.exports = {
    getNofti,
    createNewNoti,
    updateNoti,
    deleteNoti
}
