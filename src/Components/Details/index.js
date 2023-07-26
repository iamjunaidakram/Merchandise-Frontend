import './detail.scss';
import { Col, Row, Button, Card, Modal, Radio, InputNumber } from 'antd';
import { useState } from 'react';

const { Meta } = Card;
function Details() {
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
  const onChange = (value) => {
    console.log('changed', value);
  };

  return (
    <div className="summer_section">
      {/* <h1>{props.title}</h1> */}
      <div className="filter_wrap">
        <div className="filter_area"></div>

        <div className="filter_dtails"></div>
      </div>
      <div className="products_grid">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary" onClick={showModal}>
                Choose Options
              </Button>
              <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}  className="product_modal">
                <div className="product_modal">
                  <div className="product_img">
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  </div>
                  <div className="product_detail">
                    <h1>Name of the Product Name of the Product Name of the Product</h1>
                    <h2>Rs. 999.00</h2>
                    <div className="product_sizes">
                      <h3>Size</h3>
                        <Radio.Group defaultValue="a" buttonStyle="solid" className="product_modal_sizes">
                            <Radio.Button value="a">S</Radio.Button>
                            <Radio.Button value="b">M</Radio.Button>
                            <Radio.Button value="c">L</Radio.Button>
                            <Radio.Button value="d">XL</Radio.Button>
                        </Radio.Group>
                    </div>
                    <div className="product_quantity">
                        <h3>Quantity</h3>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} className="product_modal_quantity" />
                    </div>
                    <div className='button_group'>
                    <Button type="primary" className='cart_btn'>
                      Add to Cart
                    </Button>
                    <Button type="primary" className='buy_btn'>
                     Buy it now
                    </Button>
                    <Button type="primary" className='details_btn'>
                      View Full Details
                    </Button>
                    </div>
                  </div>
                </div>
              </Modal>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{
                width: 240
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }>
              <Meta title="Europe Street beat" description="Rs. 999" />
              <Button type="primary">Choose Options</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Details;
