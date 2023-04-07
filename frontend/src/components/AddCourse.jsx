import React, { useState, useEffect } from 'react'
import { Input, Form, Button, Upload,Select } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios"


const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const AddCourse = () => {
    const [message, setMessage] = useState("");
    const [test, setTest] = useState("");
    useEffect(()=> {

        setTest(message);
    }, [message])

    return (
        <>

            <Form
                onFinish={(value) => {
                    console.log(value);
                    console.log(value.file.file.originFileObj);
                    axios.post("http://localhost:8000/courses/up_course",

                        {
                            nameCourse: value.course,
                            level:value.level,
                            file: value.file.file.originFileObj
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
                            console.log("message", message)
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                    if (message === 0) {
                        alert(`            Khóa học này đã tồn tại
              Nếu muốn thay đổi xin vào phần sửa tài liệu
              Xin cảm ơn`)

                    }
                    if (message === true) {
                        alert( `Thêm vào thư viện thành công`)
                    }
                }}>
                  
                <Form.Item name="course" label="Chọn khóa học"
                    rules={[
                        { required: true, message: "Bạn chưa chọn khóa học" }
                    ]}>
                    <Input placeholder='Nhập tên khóa học'></Input>


                </Form.Item>

                <Form.Item name="level" label="Chọn level cho khóa học">
                    <Select

                        style={{
                            width: 500,
                        }}
                        onChange={handleChange}
                        options={
                            [{value:1,label:"cơ bản"},{value:2, label:"Trung bình"},{value:3,label:"Nâng cao"}]} />
                </Form.Item>

                <Form.Item name="file" label="Ảnh khóa học"
                    rules={[
                        { required: true, message: "Bạn chưa chọn ảnh khóa học" }
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
export default AddCourse