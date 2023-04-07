const express = require('express');
const router = express.Router();
const {findOne, create}=require("../controllers/user.controllers")

/* GET users listing. */
router.get('/:id', findOne )
 router.get("/",create);
/* router.get('/register', function(req, res, next) {
  res.render("register")
});
router.post('/users_list', function(req, res, next) {
});

router.put('/update', function(req, res, next) {
  //nhận dữ liệu từ edit để cập nhật vào db
});
router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  res.send('Form chỉnh loại sách' + id);
});
router.get('/delete/:id', function(req, res) {
  let id = req.params.id;
  res.send('Xóa user');
});
router.get('/login',function(req, res) {
 res.render("login")
});
router.post('/login',function(req, res) {
  
 }); */
module.exports = router;
