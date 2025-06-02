const express = require('express');
const router = express.Router();
const jadwalControllers = require('../controllers/jadwalControllers');

router.get('/', jadwalControllers.get);
router.get('/:id', jadwalControllers.get);
router.post('/', jadwalControllers.post);
router.put('/:id', jadwalControllers.put);
router.delete('/:id', jadwalControllers.delete);

module.exports = router;