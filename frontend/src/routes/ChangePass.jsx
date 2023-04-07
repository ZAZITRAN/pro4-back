import React from 'react'
import {Form, Input, Button} from "antd"
import axios from 'axios';


const ChangePass=()=>{
    let userLogin=JSON.parse(localStorage.getItem("userLogin"))
    console.log(userLogin);
    return(
    <Form
                layout="vertical"
                autoComplete='off'
                onFinish={ (value) => {
                    userLogin.password=value.newPassword
                    localStorage.setItem("userLogin",JSON.stringify(userLogin))
                    axios.post('http://localhost:8000/auth/change_pass', {
                        userId: userLogin.userId,
                        password: userLogin.password,
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      }); 
                }}>
                
                <Form.Item name="oldPassword" label="Mật khẩu cũ"
                 rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu cũ"
                    },
                    ({getFieldValue})=>({
                        validator(_,value){
                            if(userLogin.password===value){
                                return Promise.resolve()
                            }
                            return Promise.reject('Mật khẩu cũ không chính xác')
                        }
                    })
                 
                ]}>
                    <Input placeholder='Nhập mật khẩu cũ' />
                </Form.Item>
                <Form.Item name="newPassword" label="Nhập mật khẩu"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu"
                    },
                    { whitespace: true },
                    { min: 6, message:"Yêu cầu nhập tối thiểu 6 ký tự" }
                ]}>
                    <Input.Password placeholder='Nhập mật khẩu mới' />
                </Form.Item>
                <Form.Item name="confirmNewPassword" label="Nhập mật khẩu"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu"
                    },
                    { whitespace: true },
                    { min: 6, message:"Yêu cầu nhập tối thiểu 6 ký tự" },
                    ({getFieldValue})=>({
                        validator(_,value){
                            if(!value || getFieldValue("newPassword")===value){
                                return Promise.resolve()
                            }
                            return Promise.reject('Mật khẩu xác nhận không trùng khớp')
                        }
                    })
                ]}>
                    <Input.Password placeholder='Xác nhận mật khẩu mới' />
                </Form.Item>
                <Form.Item >
                    <Button type='primary' htmlType='submit' >Login</Button>
                </Form.Item>
            </Form>
    )
}
export default ChangePass;