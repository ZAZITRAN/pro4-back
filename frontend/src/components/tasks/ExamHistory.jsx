import React from 'react'
import { Table } from 'antd';


const columns = [
    {
      title: 'Tên Bài Thi',
      
    },
    {
      title: 'Số Câu Trả Lời Đúng',
      
    },
    {
      title: 'Thời Gian Làm Bài',
      
    },
    {
      title: 'Kết Quả',
      
    },
  ];
  const data = [
    {
      key: '0',
      name: '[V2.0][M1][Chuẩn bị] Session 02 - HTML5',
      answers: '0/0',
      Time: '00:00 0/0/0',
      result:''
    //   không có gì///
    },
  ];

export default function ExamHistory() {
    return (
        <div>
            <div className='route-search'>
                <h2>
                    Lịch Sử Bài Thi
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
