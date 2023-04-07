const express = require('express');
const bodyParser=require("body-parser")
const router = express.Router();

const db = require('../utils/database');


const {uploadLession, deleteLession, uploadCourse}=require("../controllers/uploads.controller")

router.get("/up_lessions",(req,res)=>{
    console.log(req.body);
    res.json(
        {mess:"gg"}
    )   
})

router.post("/up_lessions", uploadLession)
router.post("/delete_lessions", deleteLession)
router.post("/up_course", uploadCourse)

module.exports = router;