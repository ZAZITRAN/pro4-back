// import React from 'react';
import {Link, Outlet} from "react-router-dom"





const AdminCourse =() =>{
    return (
    <>
      <h1>Course</h1>
      <Link to={"http://localhost:3000/admin/course/add_course"}>Thêm khóa học</Link>
    
   
      <Outlet/>
    </>
    )
}
export default AdminCourse;