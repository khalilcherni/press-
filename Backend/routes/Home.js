const express = require('express');
const router = express.Router();

const { getAllnews, getOnenews, fassakh } = require('../controllers/Home');





router.get('/get', getAllnews);
router.get('/:title',getOnenews)
router.delete('/delete/:id',fassakh)
module.exports=router