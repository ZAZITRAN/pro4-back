import React from 'react'

import { Link, Outlet } from 'react-router-dom'


 const AddLession=()=>{
    <>
    <Link to={"http://localhost:3000/admin/lession/add"}>Thêm bài giảng</Link>
    <Link to={"http://localhost:3000/admin/lession/update"}>Chỉnh sửa tài liệu</Link>
    <Link to={"http://localhost:3000/admin/lession/delete"}>Xóa bài giảng</Link>
    <Outlet/>
    </>
    

}
export default AddLession