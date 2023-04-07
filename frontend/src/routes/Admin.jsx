import React from 'react'
import {  Link, Outlet } from "react-router-dom";
import "../styles/Admin.css"




const Admin=()=>{
    return(
        
        <div className='Page'>
  
            <h1>ADDDDDDmmin</h1>
            <nav>
                <ul>
               <li><Link to={"http://localhost:3000/admin/student"}>Quản lý học viên</Link></li> 
                <li><Link to={"http://localhost:3000/admin/course"}>Quản lý khóa học</Link></li>
                <li>  <Link to={"http://localhost:3000/admin/add_lession"}>Thêm bài giảng</Link></li>
                </ul>
            </nav>
            
           
           <Outlet/> 
        </div>
    )
       
  
}
export default Admin;