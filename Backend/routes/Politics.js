const express = require('express');
const { getAllpolitics, getOnepolitics, fassakh, update, addpolitics } = require('../controllers/Politics');
const router = express.Router();







router.get('/get', getAllpolitics);
router.get('/:title',getOnepolitics)
router.post('/add',addpolitics)
router.put('/put/:id',update)
router.delete('/delete/:id',fassakh)
module.exports=router