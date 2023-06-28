const dbpool = require('../config/database');

const getAllBerita = () => {
    const sql = 'SELECT * FROM berita';

    return dbpool.query(sql);
}

const showBerita = (id) => {
    const sql = `SELECT * FROM berita WHERE idberita = ${id}`;

    return dbpool.query(sql);
}

const createNewBerita = (body) => {
    const sql = `INSERT INTO berita (judul, konten, gambar) 
                VALUES ('${body.judul}', '${body.konten}', '${body.gambar}')`;

    return dbpool.query(sql);
}


const updateBerita = (id, body) => {
    const sql = `UPDATE berita SET judul = '${body.judul}', konten = '${body.konten}', gambar = '${body.gambar}' WHERE idberita = ${id}`;

    return dbpool.query(sql);
}


const deleteBerita = (id) => {
    const sql = `DELETE FROM berita WHERE idberita = ${id}`;

    return dbpool.query(sql);
}

module.exports = {
    getAllBerita,
    createNewBerita,
    updateBerita,
    deleteBerita,
    showBerita
}