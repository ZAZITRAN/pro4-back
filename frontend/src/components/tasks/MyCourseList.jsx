import React from 'react'
import Card from 'react-bootstrap/Card';

export default function MyCourseList() {
    return (
        <div>
            <div className='route-search'>
                <h2>
                    Khóa học gần đây
                </h2>
                <div className='div-search'>
                    <input type="text" placeholder='Search' style={{ backgroundColor: '#f5f5f5' }} />
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div style={{height:'max-content', display:'flex', flexWrap:'wrap'}}>
                <Card className='dvRoadmap' style={{ width: '400px', height: '120px', display: 'flex', flexDirection: 'row', margin: '25px 30px' }}>
                    <Card.Img variant="top" src="../img/ảnh 1.jpg" style={{ width: '165px', height: '100px', margin: '10px 10px', borderRadius: '6px' }} />
                    <Card.Body>
                        <Card.Title>Web Fullstack Java V2.0</Card.Title>
                        <div>
                            ...
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
