import React from 'react'
import Upload from '../extra/Upload'
import FromInput from '../extra/FromInput'


export default function Account() {
    return (
        <div className='account-container'>
            <div className='account-title'>
                <h2>
                    Chỉnh sửa hồ sơ
                </h2>
            </div>
            <div className='account-img-ipt'>
                <div className='account-title-img'>
                    <p>Cập nhật ảnh đại diện</p>
                    <Upload />
                </div>
                <FromInput />
            </div>
        </div>
    )
}
