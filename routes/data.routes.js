
const express=require('express')
const router = express.Router();
const {getCourses, getUsers, getLessions ,getJoinUserLession } = require('../controllers/data.controllers');



router.get('/courses',getCourses)
router.get('/users', getUsers)
router.get('/lessions', getLessions)
router.get ('/join_user_lession',getJoinUserLession)

module.exports = router;