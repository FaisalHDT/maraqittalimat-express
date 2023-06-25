const dbpool = require('../config/database');

const getAllPengajian = () => {
    const sql = 'SELECT * FROM pengajian';

    return dbpool.query(sql);
}

const createNewPengajian = (body) => {
    const sql = `INSERT INTO pengajian (nama_ustad, lokasi_acara, waktu, keterangan)
                VALUES ('${body.nama_ustad}', '${body.lokasi_acara}', '${body.waktu}', '${body.keterangan}')`;

    return dbpool.query(sql);
}

const updatePengajian = (id, body) => {
    const sql = `UPDATE pengajian SET nama_ustad = '${body.nama_ustad}', lokasi_acara = '${body.lokasi_acara}', waktu = '${body.waktu}', keterangan = '${body.keterangan}' WHERE idpengajian = ${id}`;

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