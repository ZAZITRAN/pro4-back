const { create, createOne, findByProperty } = require('../models/users.models');
const { check, validationResult, Result } = require('express-validator');
const brcypt = require("bcryptjs");
const { findOne } = require('./user.controllers');
const db = require('../utils/database');
const cookie =require("cookie-parser")



module.exports.postLogin = async (req, res) => {
    let { email, password} = req.body
    try {
        db.query("SELECT * FROM tbl_users WHERE email=?", [email], (error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length>0) {
                console.log(111,results);
                let hash=results[0].password;
                console.log(hash);
                let pass=brcypt.compareSync(password, hash)
                if (pass) {          
                    res.json({
                        message:true,
                        userId:results[0].userId,
                        username:results[0].username
                    })              
                }else{
                    res.json({
                        message:false
                    })
                }              
            }else{
                res.json({
                    message:false
                })
            }           
            }               
        )
    } catch (error) {
        
    }
}

module.exports.postRegister = async (req, res) => {  
    try {   
        let { email, username,  password } = req.body
        db.query("SELECT email FROM tbl_users WHERE email=?", [email], (error, results) => {
            if (error) {
                console.log(error);
            }   
            console.log(results);
            if (results.length > 0) {           
                console.log(results);
                return res.send({ message: 0 });     
            } else {
                let salt = brcypt.genSaltSync(5);
                let hashPassword = brcypt.hashSync(password, salt)
                let userId = Math.floor(Math.random() * 1000000);
                db.query("INSERT INTO tbl_users SET ?", { userId: userId, email: email, username: username, password: hashPassword }, (error, results) => {
                    if (error) {
                        console.log(error);
                    }else{
                    res.send({
                        message:"ok"
                    })}
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.postChangePass=(req,res)=>{
    let {userId,password}=req.body
    console.log(userId,password);
    let salt = brcypt.genSaltSync(5);
    let hashPassword = brcypt.hashSync(password, salt)
    console.log(hashPassword);
    db.query("UPDATE `tbl_users` SET `password` = ? WHERE (`userId` = ?);", [hashPassword,userId], (error) => {
        if (error) {
            console.log(error);
        }else{
        res.send({
            message:true
        })}})
}