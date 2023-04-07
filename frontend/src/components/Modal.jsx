import { Button, Modal } from 'antd';
import { useState } from 'react';

const ModalComponent = (props) => {
    let data=props.data
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  
  const handleOk = () => {
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
     
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[

          <Button key={data===true ? "link": "back"} type= {data===true ?"primary":""}  onClick={data===true ?handleOk:handleCancel} href={ data===true? "http://localhost:3000/home":"" }>
            {data===true ? "Chuyển đến trang chủ" : "Quay lại"}
          </Button>,
        ]}
      >
        {data===true ? "Đăng nhập thành công" : "Mật khẩu hoặc tài khoản không đúng"}

      </Modal>
    </>
  );
};
export default ModalComponent;