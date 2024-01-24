const express = require('express');
const { getAllmusic, getOnemusic, addmusic, updateMu, fassakhm } = require('../controllers/Music');

const router = express.Router();







router.get('/get', getAllmusic);
router.get('/:title',getOnemusic)
router.post('/add',addmusic)
router.put('/put/:id',updateMu)
router.delete('/delete/:id',fassakhm)
module.exports=router