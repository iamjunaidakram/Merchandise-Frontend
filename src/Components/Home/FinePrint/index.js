import './finePrint.scss'
import Portone from '../../../images/port.jpg'
import Porttwo from '../../../images/portwo.jpg'
import Portthree from '../../../images/portthree.jpg'
import { Col, Row } from 'antd';

function FinePrint() {
  return (
    <div className='finePrint'>
        <hr />
        <h1>FinePrint</h1>
        <p>Limited edition seasonal collections embracing the current culture. Locally sourced with an obsessive attention to fit, fabric and fabrication.</p>
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

export default FinePrint;