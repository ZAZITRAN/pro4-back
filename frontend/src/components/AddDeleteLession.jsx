import React, { useEffect, useState } from 'react'
import { Button, Form, Select, } from 'antd';

import axios from 'axios';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const AddDeleteLession = () => {
    let [table, setTable]=useState("")
    
    let [message, setMessage] = useState("")

    useEffect(() => {
            axios.get("http://localhost:8000/data/join_user_lession")

            .then(res => {
                console.log(res.data.mess);
                let courseList = []
                let lession={}
                for (let i = 0; i < res.data.mess.length; i++) {
                  courseList.push(res.data.mess[i].nameCourse )
                 
                  /*   const result=res.data.mess.filter(index=>index.res.data.mess[i].nameCourse===courseList[i])
                    console.log(result); */
                }
                let courseLists= new Set(courseList)
                console.log(courseLists);
                let value=[]
                for (let i = 0; i < courseList.length; i++) {
                    for (let j = 0; j < res.data.mess.length; j++) {
                       if(courseList[i]===res.data.mess[j].nameCourse){
                        
                        value.push(res.data.mess[j].lession_name)
                       
                       }
                      
                    }
                    console.log(value);
                    let key=courseList[i]
                    let obj={value}
                    console.log(obj);
                   console.log(lession);
                    /*   const result=res.data.mess.filter(index=>index.res.data.mess[i].nameCourse===courseList[i])
                      console.log(result); */
                  }
        
              })
              .catch(error => console.log(error));

        }, [])
       /*  let result1
        let lessionLists = {}
        let courseLists = []
        for (let i = 0; i < table.length; i++) {
            courseLists.push(table[i].nameCourse )
             result1 = table.filter((index)=>{return index.nameCourse=table[i].nameCourse})
             console.log(result1)
        } */
        /* const result1 = data.filter((index)=>{return index.nameCourse=courseLists[0]}) */
            /* lessionLists.data[0].nameCourse=result1 */
           ;
       /*  console.log(courseLists) */;
     /*    console.log(lessionLists); */
        console.log("data",table);

        return(<>GGGG</>)
   
    /* return (
      
         <>

            <Form direction="vertical"
                onFinish={(value) => {
                    console.log(value);
                    console.log(value.file.file.originFileObj);
                    axios.post("http://localhost:8000/uploads/lessions",

                        {
                            courseId: value.course,
                            lession_name: value.lession,

                        }
                    )
                        .then(function (response) {
                            setMessage(response.data.message)
                            console.log(response.data.message);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                }}>
                <Form.Item name="course" label="Chọn khóa học"
                    rules={[
                        { required: true, message: "Bạn chưa chọn khóa học" }
                    ]}>
                    <Select

                        style={{
                            width: 600,
                        }}
                        onChange={handleCourseChange}
                        options={courseLists.map((courseList) => ({
                            label: courseList,
                            value: courseList,
                        }))}
                    />
                </Form.Item>
                <Form.Item name="lession" label="Chọn tên bài giảng"
                    rules={[
                        { required: true, message: "Bạn chưa chọn tên bài giảng" },
                        <Select
                            style={{
                                width: 120,
                            }}
                            value={secondLession}
                            onChange={onSecondLessionChange}
                            options={lessionLists.map((lessionList) => ({
                                label: lessionList,
                                value: lessionList,
                            }))}
                        />


                    ]}>

                </Form.Item>


                <Form.Item >
                    <Button type='primary' htmlType='submit' danger>Upload</Button>
                </Form.Item>

            </Form>
        </> 
    ) */
}
export default AddDeleteLession;