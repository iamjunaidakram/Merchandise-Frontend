import { Col, Row } from 'antd';
import './packaging.scss'
import Portone from '../../../images/port.jpg'
import Porttwo from '../../../images/portwo.jpg'
import Portthree from '../../../images/portthree.jpg'

function Packaging() {
  return (
    <div className='packaging'>
        <hr />
        <h1>Luxurious Branding</h1>
        <p>We are available through email. </p>
        <p>Monday - Friday from 10 AM - 5 PM PKT</p>
        <h2>hello@scnzcrew.com</h2>
        <div className='portfolio'>
          <Row>
            <Col md={8} ><div className='portfolio_img'><img src={Portone} /></div></Col>
            <Col md={8} ><div className='portfolio_img'><img src={Porttwo} /></div></Col>
            <Col md={8} ><div className='portfolio_img'><img src={Portthree} /></div></Col>
          </Row>
        </div>      
    </div>
  );
}

export default Packaging;