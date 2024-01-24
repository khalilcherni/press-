const express = require('express');
const { getAllsports, getOnesports, addsports, update, fassakh } = require('../controllers/Sports');
const router = express.Router();







router.get('/getAll', getAllsports);
router.get('/:title',getOnesports)
router.post('/add',addsports)
router.put('/put/:id',update)
router.delete('/delete/:id',fassakh)

module.exports = router;