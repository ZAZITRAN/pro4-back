import React, { useState } from 'react';
import { Form, Button, Input, Spin, Modal } from "antd";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/Login.css"



const Login = () => {
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);


  console.log(15, data);
  const handleOk = () => {
    console.log(11);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Spin spinning={loading}>
        <Form
          layout="vertical"
          autoComplete='off'
          onFinish={async (value) => {
            setLoading(false)
            setOpen(true)
            await axios.post("http://localhost:8000/auth/login",
              {
                email: value.email,
                password: value.password
              })
              .then(function (response) {
                setOpen(true)

                setData(response.data.message)
                if (response.data.message === true) {
                  let person = {
                    email: value.email,
                    password: value.password,
                    username: response.data.username,
                    userId: response.data.userId,
                  }
                  console.log(person);
                  localStorage.userLogin = JSON.stringify(person)
                };
              })
              .catch(function (error) {
                console.log(error);
              });
            console.log(data)

          }}>

          <Form.Item name="email" label="Email"
          rules={[
            {
                required: true,
                message: "Vui lòng nhập Email đăng nhập"
            },
            { type: "email", message: "Vui lòng nhập email đúng định dạng" }]}>
            <Input placeholder='Nhập email' />
          </Form.Item>
          <Form.Item name="password" label="Nhập mật khẩu"
            rules={[
              {
                  required: true,
                  message: "Vui lòng nhập mật khẩu"
              },
              { whitespace: true },
              { min: 6, message:"Yêu cầu nhập tối thiểu 6 ký tự" }
          ]}
          >
            <Input.Password placeholder='Nhập mật khẩu' />
          </Form.Item>
          <Form.Item >
            <Button type='primary' htmlType='submit'danger >Login</Button>
          </Form.Item>
        </Form>
        <div>Bạn chưa có tài khoản?  <Link to="/register" >Dang ky</Link></div>
        <Modal
          closable={false}
          open={open}
          title="Thông báo"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key={data === true ? "link" : "back"} type="primary" onClick={data === true ? handleOk : handleCancel} href={data === true ? "http://localhost:3000/home" : ""} danger>
              {data === true ? "Chuyển đến trang chủ" : "Quay lại"}
            </Button>,
          ]}
        >
          {data === true ? "Đăng nhập thành công" : "Mật khẩu hoặc tài khoản không đúng"}

        </Modal>
      </Spin>
    </>

  )
}
export default Login;