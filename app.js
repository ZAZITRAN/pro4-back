const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser=require("body-parser")
const cors= require("cors")
const port= 8000
const db = require('./utils/database');

const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');
const courseRouter = require('./routes/course.routes');
const dataRouter =require('./routes/data.routes')
 const fileUpload=require("express-fileupload")





const app = express();

// view engine setup

app.use(fileUpload({
  useTempFiles:true
}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3001']
}))

app.use('/data',dataRouter)
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/courses', courseRouter);




app.get("/", (req,res)=>{

  res.send({message:1111})
})

app.get("/home", async=(req,res)=>{
  
  let {email}=req.cookies.user
  console.log(email);
  try {
    db.query("SELECT * FROM tbl_user WHERE email=?", [email], (error, results) => {
      if (error) {
          console.log(error);
      }
      console.log(2222);
      let username=results[0].username
      res.render("home", {username:username} )
    })

    
  } catch (error) {
    
  }
 
})
/* app.post("/", (req,res,next)=>{
    if(req.cookies.user==null){
      req.url="/login"
    }else{
      req.url="/home"
    }
    next()
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

