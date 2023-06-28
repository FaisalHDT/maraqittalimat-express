const express = require('express');
const PengajianController = require('../controller/pengajian.controller');
const router = express.Router();

router.get('/', PengajianController.getAllPengajian);
router.get('/:id', PengajianController.getPengajianId);
router.post('/', PengajianController.createNewPengajian);
router.put('/:id', PengajianController.updatePengajian);
router.delete('/:id', PengajianController.deletePengajian);

module.exports = router;