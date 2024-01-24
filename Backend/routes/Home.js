const express = require('express');
const router = express.Router();

const { getAllnews, getOnenews, fassakh, addHome } = require('../controllers/Home');





router.get('/get', getAllnews);
router.get('/:title',getOnenews)
router.delete('/delete/:id',fassakh)
router.post('/add',addHome)
module.exports=router