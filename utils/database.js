const mysql = require('mysql2');
const db = mysql.createConnection({
   host: 'localhost', 
   user: 'root', 
   password: '040292Th!', 
   database: 'project4'
}); 

db.connect(() => console.log('Da ket noi database !'));
module.exports = db; 
 