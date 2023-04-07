const bodyParser = require('body-parser');
const express = require('express');

const { postRegister, postLogin,postChangePass } = require('../controllers/auth.controllers');
const router = express.Router();
const db = require('../utils/database');

router.get('/', (req, res) => {
    res.json({
        message: "gg"
    })
})
router.get('/login', (req, res) => {
    res.json({
        message: "gg"
    })
})
router.post('/login', postLogin)

router.post('/register', postRegister)

router.get('/change_pass', (req, res) => {
    res.json({
        mess:"gg"
    })   
})
module.exports = router

router.post('/change_pass', postChangePass)