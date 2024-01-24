const express = require('express');
const router = express.Router();

const { getAllnews, getOnenews } = require('../controllers/Home');





router.get('/get', getAllnews);
router.get('/:title',getOnenews)

module.exports=router