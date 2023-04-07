const db = require("../utils/database");
const bodyParser=require("body-parser")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dhknvtaq2",
    api_key: "536311875473995",
    api_secret: "kRp_WUvXGZvIqTizithrdO8VxJA"

})

module.exports.uploadLession = (req, res) => {
    let { courseId, lession_name } = req.body
    try {
        db.query("SELECT * FROM tbl_lessions WHERE lession_name=? and courseId=?", [lession_name, courseId], (error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                console.log(111,results.length);
                res.json({ message: 0 });
            } else {
                let lessionId = Math.floor(Math.random() * 1000)
                const obj = JSON.parse(JSON.stringify(req.files));
                let file = obj.file
                console.log(obj);
                cloudinary.uploader.upload(file.tempFilePath, { folder: "lession" }, function (err, result) {
                    console.log("ERR", err);
                    console.log("result", result);
                    let lession_url = result.url

                    db.query("INSERT INTO tbl_lessions SET ?", { lessionId: lessionId, lession_name: lession_name, lession_url: lession_url, courseId: courseId }, (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            res.json({
                                message: true
                            })
                        }
                    })


                })
            };
    })
    } catch (error) {
        console.log(error);
}
}
module.exports.uploadCourse=(req,res)=>{
    let { nameCourse,level  } = req.body
    try {
        db.query("SELECT * FROM tbl_courses WHERE  nameCourse=?", [nameCourse], (error, results) => {
            if (error) {
                console.log(error);
            }
            if (results.length > 0) {
                console.log("check>>>>>>>",results.length);
                res.status(200).json({message: "aaaaaa"});
            } 

            else {
                let courseId = Math.floor(Math.random() * 1000)
                const obj = JSON.parse(JSON.stringify(req.files));
                let file = obj.file
                
                cloudinary.uploader.upload(file.tempFilePath, { folder: "courses" }, function (err, result) {
                    console.log("ERR", err);
                    console.log("result", result);
                    let imgCourse = result.url

                    db.query("INSERT INTO tbl_courses SET ?", { courseId: courseId, nameCourse: nameCourse, imgCourse: imgCourse, level: level }, (error, results) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log("true");
                            res.json({
                                message: true
                            })
                        }
                    })


                })
            }; 
    })
    } catch (error) {
        console.log(error); 
}}
module.exports.deleteLession=(req,res)=>{
    
}



    
