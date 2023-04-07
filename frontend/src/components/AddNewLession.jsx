import React, { useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Upload, } from 'antd';
import { useState } from 'react';

import axios from 'axios';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const AddNewLession = () => {
  let [courseLists, setCourseLists] = useState("")
  let [message, setMessage]=useState("")
  console.log(message);
  console.log(courseLists);
  useEffect(()  => {

    axios.get("http://localhost:8000/data/courses")

      .then(res => {
        console.log(res.mess);
        let courseList = []
        for (let i = 0; i < res.data.mess.length; i++) {
          courseList.push({ value: res.data.mess[i].courseId, label: res.data.mess[i].nameCourse })
        }
        console.log(courseList);
        setCourseLists(1111,courseList)

      })
      .catch(error => console.log(error));

    
  }, [])


  return (
    <>

      <Form
        onFinish={(value) => {
          console.log(value);
          console.log(value.file.file.originFileObj);
          axios.post("http://localhost:8000/courses/up_lessions",

            {
                    courseId:value.course,
                    lession_name:value.lession,
                    file:value.file.file.originFileObj
            }
            ,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }

          )
          .then(function (response) {
            setMessage(response.data.message)
            console.log(response.data.message);
          })
          .catch(function (error) {
            console.log(error);
          });
          if (message===0){
            alert(`            Bài giảng này đã tồn tại
            Nếu muốn thay đổi xin vào phần sửa tài liệu
            Xin cảm ơn`)
           
          }
          if (message===true) {
            alert ("Thêm bài giảng thành công")
          }
         
            
          
        }}>
        <Form.Item name="course" label="Chọn khóa học"
          rules={[
            { required: true, message: "Bạn chưa chọn khóa học" }
          ]}>
          <Select

            style={{
              width: 500,
            }}
            onChange={handleChange}
            options={
              courseLists} />


        </Form.Item>
        <Form.Item name="lession" label="Nhập tên bài giảng"
          rules={[
            { required: true, message: "Bạn chưa nhập tên bài giảng" },
            
                 
                
          ]}>
          <Input placeholder='Nhập tên bài giảng' />
        </Form.Item>

        <Form.Item name="file" label="Upload"
          rules={[
            { required: true, message: "Bạn chưa chọn tài liệu" }
          ]} >
          <Upload listType="picture" maxCount={1}>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >

              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item >
          <Button type='primary' htmlType='submit' danger>Upload</Button>
        </Form.Item>

      </Form>
    </>
  )
}
export default AddNewLession;