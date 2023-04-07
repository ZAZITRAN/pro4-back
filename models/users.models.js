const mysql=require("mysql2")
const db=require("../utils/database")

module.exports.findByProperty=(key,value)=>{
   let sql="SELECT * FROM ?? WHERE ?? = ?";
   let inserts=('tbl_user', key, value);
   /* console.log(sql); */
   sql=mysql.format(sql, inserts);
   console.log(sql);
  /*  return db.execute(sql); */
};
module.exports.createOne=(user_id, email, username, fullname, password)=>{
   console.log(user_id, email, username, fullname, password);
   return db.execute( `INSERT INTO tbl_user VALUES (?, ?, ?, ?, ?)`,[user_id, email, username, fullname, password])
}
