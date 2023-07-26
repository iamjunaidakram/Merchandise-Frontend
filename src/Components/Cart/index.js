import './cart.scss';
import { InputNumber } from 'antd';
import { NavLink } from 'react-router-dom';

function Cartdetails() {
  const onChange = (value) => {
    console.log('changed', value);
  };
  return (
    <div className="cart">
      <div className="cart_header">
        <h1>Your cart</h1>
        <NavLink to="/">Continue Shipping</NavLink>
      </div>
      <div className="cart_main">
        <div className="cart_product">PRODUCT</div>
        <div className="cart_quality">QUANTITY</div>
        <div className="cart_total">TOTAL</div>
      </div>
      <div className="cart_content">
        <div className="cart_product">
          <div className="cart_product_details">
            <div className="product_img"></div>
            <div className="product_text">
              <h1>LIGHT WEIGHT RIBBED LADIES SHIRT</h1>
              <h2>Rs. 999.00</h2>
              <h3>
                Size: <span>S</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cart_quality">
          <div className="product_quantity">
            <InputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
              className="product_modal_quantity"
            />
          </div>
        </div>
        <div className="cart_total">₨999.00</div>
      </div>
      <div className="cart_content">
        <div className="cart_product">
          <div className="cart_product_details">
            <div className="product_img"></div>
            <div className="product_text">
              <h1>LIGHT WEIGHT RIBBED LADIES SHIRT</h1>
              <h2>Rs. 999.00</h2>
              <h3>
                Size: <span>S</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cart_quality">
          <div className="product_quantity">
            <InputNumber
              min={1}
              max={10}
              defaultValue={3}
              onChange={onChange}
              className="product_modal_quantity"
            />
          </div>
        </div>
        <div className="cart_total">₨999.00</div>
      </div>
      <div className="cart_subtotal">
        <div>
        <div className='subtotal_section'>
          <h2>Subtotal</h2> <h2>₨1,998.00PKR</h2>
        </div>
        <p>Taxes and shipping calculated at checkout</p>
        <NavLink to="/" className="checkout-btn">
          Checkout
        </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cartdetails;
