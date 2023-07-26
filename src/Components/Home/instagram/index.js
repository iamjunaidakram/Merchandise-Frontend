import React, { useState } from 'react';
import './instagram.scss';
import { Button, Modal } from 'antd';
import { Row, Col } from 'antd';
import InstaOne from '../../../images/instaone.jpeg';
// import InstaTwo from '../../../images/instatwo.jpeg';
function Instagram() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="instagram">
        <div className="insta_header">
          <h1>Connect with us on Instagram</h1>
        </div>
        <Row>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Button className="insta_pic" onClick={showModal}>
              <img src={InstaOne} alt="" />
            </Button>
            <Modal
              className="insta_modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}>
              <Row>
                <Col lg={14} md={14}>
                  <img src={InstaOne} alt="" />
                </Col>
                <Col lg={10} md={10}>
                  <div className="profile_header">
                    <div className="profile_content">
                      <div className="profile_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="28px"
                          height="28px">
                          {' '}
                          <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                        </svg>
                      </div>
                      <div className="profile_name">MERCHANDISE</div>
                    </div>
                  </div>
                  <div className="profile_body">
                    <div className="profile_description">
                      <p>LIMITED QUANTITY PRE-LAUNCH LIVE ON THE WEBSITE NOW // 007</p>
                    </div>
                    <div className="profile_source">
                      <p>shop via merchandise.com</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal>
          </Col>
          {/* <Col lg={12} md={12} sm={24} xs={24}>
            <Button className="insta_pic">
              <img src={InstaTwo} alt="" />
            </Button>
            <Modal
              className="insta_modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}></Modal>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Button className="insta_pic">
              <img src={InstaOne} alt="" />
            </Button>
            <Modal
              className="insta_modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}></Modal>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <Button className="insta_pic">
              <img src={InstaTwo} alt="" />
            </Button>
            <Modal
              className="insta_modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}></Modal>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default Instagram;
