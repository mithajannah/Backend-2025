const express = require ('express');
const router = express.Router();
const dataBarangController = require('./dataBarangControllers');

router.get('/', dataBarangController.getAllBarangs);
router.get("/:id_barang", dataBarangController.getBarangById);
router.post('/', dataBarangController.createBarang);
router.put('/:id_barang', dataBarangController.updateBarang);
router.delete('/:id_barang', dataBarangController.deleteBarang);

module.exports = router;