const dbpool = require('../config/database');

const getAllPengajian = () => {
    const sql = 'SELECT * FROM pengajian';

    return dbpool.query(sql);
}

const createNewPengajian = (body) => {
    const sql = `INSERT INTO pengajian (lokasi, waktu) 
                VALUES ('${body.lokasi}', '${body.waktu}')`;

    return dbpool.query(sql);
}

const updatePengajian = (id, body) => {
    const sql = `UPDATE pengajian SET lokasi = '${body.lokasi}', waktu = '${body.waktu}' WHERE idpengajian = ${id}`;

    return dbpool.query(sql);
}

const deletePengajian = (id) => {
    const sql = `DELETE FROM pengajian WHERE idpengajian = ${id}`;

    return dbpool.query(sql);
}

module.exports = {
    getAllPengajian,
    createNewPengajian,
    updatePengajian,
    deletePengajian
}