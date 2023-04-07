const db = require('../utils/database');


module.exports.getCourses=(req, res)=>{
    try { 
        db.query("SELECT* FROM tbl_courses",  (error, results) => {
            if (error) {
                console.log(error);
            }  
            res.json({mess:results}) 
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.getUsers=(req, res)=>{
    try { 
        db.query("SELECT* FROM tbl_users",  (error, results) => {
            if (error) {
                console.log(error);
            }  
            res.json({mess:results}) 
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports.getLessions=(req, res)=>{
    try { 
        db.query("SELECT* FROM tbl_lessions",  (error, results) => {
            if (error) {
                console.log(error);
            }  
            res.json({mess:results}) 
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.getJoinUserLession=(req,res)=>{
    try { 
        db.query(`SELECT tbl_courses.nameCourse, tbl_lessions.lession_name FROM tbl_courses INNER JOIN tbl_lessions ON tbl_courses.courseId=tbl_lessions.courseId`, 
         (error, results) => {
            if (error) {
                console.log(error);
            }  
            res.json({mess:results}) 
        })
    } catch (error) {
        console.log(error);
    }
}
