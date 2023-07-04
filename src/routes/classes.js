const express = require('express');
const router = express.Router();
const classesController = require('../classes/classes.controller');

router.get('/all', classesController.getClasses);
router.post('/create', classesController.createClasses);
router.delete('/delete/:id', classesController.deleteClassById);

module.exports = router;
