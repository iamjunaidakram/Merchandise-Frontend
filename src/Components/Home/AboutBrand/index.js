import React from 'react';
import { Col, Row } from 'antd';
import './aboutBrand.scss';
import { Select, InputNumber } from 'antd';
import Portone from '../../../images/port.jpg';
import Porttwo from '../../../images/portwo.jpg';
import Portthree from '../../../images/portthree.jpg';

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
const onChange = (value) => {
  console.log('changed', value);
};

function AboutBrand() {
  return (
    <>
      <div className="main_section">
        <div className="container">
          <div className="about_brand">
            <hr />
            <h1>REPRESENT</h1>
            <p>Welcome to the grey area between fashion and streetwear.</p>
          </div>
          <div className="star_Product">
            <div className="product">
              <div className="product_content">
                <Row>
                  <Col span={12}>
                    {' '}
                    <div className="product_img">
                      <img src={Portone} />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="product_detail_wrap">
                      <div className="product_details">
                        <div className="product_logo"></div>
                        <h2 className="product_title">'coordinates' Black Hoodie | 007</h2>
                        <h3 className="product_pricing">Rs.3,399.00</h3>
                        <div className="product_order_section">
                          <div className="product_size">
                            <Select
                              defaultValue="Select Size"
                              style={{ width: 120 }}
                              allowClear
                              options={[
                                {
                                  value: '1',
                                  label: 'Size- Small'
                                },
                                {
                                  value: '2',
                                  label: 'Size- Medium'
                                },
                                {
                                  value: '3',
                                  label: 'Size- Large'
                                },
                                {
                                  value: '4',
                                  label: 'Size- xLarge'
                                }
                              ]}
                            />
                          </div>
                          <div className="product_quantity">
                            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                          </div>
                        </div>
                        <div className="product_Btn">Add to Cart</div>
                        <div className="product_Link_Btn">
                          <div className="product_Detail_Btn"></div>
                          <div className="product_Share"></div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="product">
              <div className="product_content">
                <Row>
                  <Col span={12} style={{ order: '2' }}>
                    {' '}
                    <div className="product_img">
                      <img src={Porttwo} />
                    </div>
                  </Col>
                  <Col span={12} style={{ order: '1' }}>
                    <div className="product_detail_wrap">
                      <div className="product_details">
                        <div className="product_logo"></div>
                        <h2 className="product_title">'coordinates' Black Hoodie | 007</h2>
                        <h3 className="product_pricing">Rs.3,399.00</h3>
                        <div className="product_order_section">
                          <div className="product_size">
                            <Select
                              defaultValue="Select Size"
                              style={{ width: 120 }}
                              allowClear
                              options={[
                                {
                                  value: '1',
                                  label: 'Size- Small'
                                },
                                {
                                  value: '2',
                                  label: 'Size- Medium'
                                },
                                {
                                  value: '3',
                                  label: 'Size- Large'
                                },
                                {
                                  value: '4',
                                  label: 'Size- xLarge'
                                }
                              ]}
                            />
                          </div>
                          <div className="product_quantity">
                            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                          </div>
                        </div>
                        <div className="product_Btn">Add to Cart</div>
                        <div className="product_Link_Btn">
                          <div className="product_Detail_Btn"></div>
                          <div className="product_Share"></div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="product">
              <div className="product_content">
                <Row>
                  <Col span={12}>
                    {' '}
                    <div className="product_img">
                      <img src={Portthree} />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="product_detail_wrap">
                      <div className="product_details">
                        <div className="product_logo"></div>
                        <h2 className="product_title">'coordinates' Black Hoodie | 007</h2>
                        <h3 className="product_pricing">Rs.3,399.00</h3>
                        <div className="product_order_section">
                          <div className="product_size">
                            <Select
                              defaultValue="Select Size"
                              style={{ width: 120 }}
                              allowClear
                              options={[
                                {
                                  value: '1',
                                  label: 'Size- Small'
                                },
                                {
                                  value: '2',
                                  label: 'Size- Medium'
                                },
                                {
                                  value: '3',
                                  label: 'Size- Large'
                                },
                                {
                                  value: '4',
                                  label: 'Size- xLarge'
                                }
                              ]}
                            />
                          </div>
                          <div className="product_quantity">
                            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
                          </div>
                        </div>
                        <div className="product_Btn">Add to Cart</div>
                        <div className="product_Link_Btn">
                          <div className="product_Detail_Btn"></div>
                          <div className="product_Share"></div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutBrand;
