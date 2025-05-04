const express = require ('express');
const router = express.Router();
const dataController = require('./dataControllers');

router.get('/', dataController.getAllBarangs);
router.get("/:id", dataController.getBarangById);
router.post('/', dataController.createBarang);
router.put('/:id', dataController.updateBarang);
router.delete('/:id', dataController.deleteBarang);

module.exports = router;