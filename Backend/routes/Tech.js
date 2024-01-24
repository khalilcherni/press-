const express = require('express');
const { getAlltech, getOnetech, addtech } = require('../controllers/Tech');
const { update, fassakh } = require('../controllers/Politics');

const router = express.Router();







router.get('/getAll', getAlltech);
router.get('/:title',getOnetech)
router.post('/add',addtech)
router.put('/put/:id',update)
router.delete('/delete/:id',fassakh)

module.exports = router;