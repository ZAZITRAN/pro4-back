import React from 'react'
import { Table } from 'antd';


const columns = [
    {
      title: 'Tên Bài Tập',
      
    },
    {
      title: 'Mô Tả',
      
    },
    {
      title: 'Khóa học',
      
    },
    {
      title: 'Hạn nộp',
      
    },
  ];
  const data = [
    {
      key: '0',
      name: '[V2.0][M1][Chuẩn bị] Session 02 - HTML5',
      answers: '0/0',
      Time: '00:00 0/0/0',
      result:''
    //   không có gì ///
    },
  ];

export default function AssignmentList() {
    return (
        <div>
            <div className='route-search'>
                <h2>
                    Danh Sách Bài Tập
                </h2>
                <div className='div-search'>
                    <input type="text" placeholder='Search' style={{ backgroundColor: '#f5f5f5' }} />
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        </div>
    )
}
