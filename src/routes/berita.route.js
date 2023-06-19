const express = require('express');

const BeritaController = require('../controller/berita.controller');
const router = express.Router();

//get data

router.get('/', BeritaController.getAllBerita);

router.post('/', BeritaController.createNewBerita);

router.patch('/:id', BeritaController.updateBerita);
router.delete('/:id', BeritaController.deleteBerita);

module.exports = router;