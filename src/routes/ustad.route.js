const express = require('express');

const UstadController = require('../controller/ustad.controller');
const router = express.Router();


router.get("/",UstadController.getAllUstad);
router.post("/",UstadController.createNewUstad);
router.patch("/:id",UstadController.updateUstad);
router.delete("/:id",UstadController.deleteUstad);

module.exports = router;