const dbpool = require('../config/database');

const getAllUstad = () => {
    const sql = 'SELECT * FROM ustad';

    return dbpool.query(sql);
}

const createNewUstad = (body) => {
    const sql = `INSERT INTO ustad (nama, alamat) 
                VALUES ('${body.nama}', '${body.alamat}')`;

    return dbpool.query(sql);

}

const updateUstad = (id, body) => {
    const sql = `UPDATE ustad SET nama = '${body.nama}', alamat = '${body.alamat}' WHERE idustad = ${id}`;


    return dbpool.query(sql);
}

const deleteUstad = (id) => {
    const sql = `DELETE FROM ustad WHERE idustad = ${id}`;

    return dbpool.query(sql);
}

module.exports = {
    getAllUstad,
    createNewUstad,
    updateUstad,
    deleteUstad
}