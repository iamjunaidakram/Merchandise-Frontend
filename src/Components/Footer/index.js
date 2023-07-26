import { NavLink } from 'react-bootstrap';
import './footer.scss';
// import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-3 col-xs-12">
            <div className="single_footer">
              <h4>HELP</h4>
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">LOGIN</a>
                </li>
                <li>
                  <a href="#">SIGNUP</a>
                </li>
                <li>
                  <a href="#">HOW TO BUY</a>
                </li>
                <li>
                  <a href="#">PAYMENT</a>
                </li>
                <li>
                  <a href="#">SHIPPING & DELIVERIES</a>
                </li>
                <li>
                  <a href="#">EXCHANGE & RETURNS</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Our COLLECTION</h4>
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">SUMMER COLLECTION</a>
                </li>
                <li>
                  <a href="#">WINTER COLLECTION</a>
                </li>
                <li>
                  <a href="#">ACCESSORIES</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>About Merchandise</h4>
              <ul>
                <li>
                  <a href="#">ABOUT US</a>
                </li>
                <li>
                  <a href="#">RETAIL STORES</a>
                </li>
                <li>
                  <a href="#">CONTACT US</a>
                </li>
                <li>
                  <a href="#">WORK WITH US</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Subscribe today</h4>
              <div className="signup_form">
                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Enter Email Address"
                  />
                  {/* <button type="button" className="subscribe__btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-label="Create a post">
                      <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" fill='#000'></path>
                    </svg>
                  </button> */}
                </form>
              </div>
            </div>
            <div className="social_profile">
              <ul>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48px"
                      height="48px">
                      
                      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48px"
                      height="48px">
                      
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48px"
                      height="48px">
                      <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48px"
                      height="48px">
                      
                      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">
              © 2023,
              <span>
                <NavLink to="/cart">
                  MERCHANDISE
                </NavLink>
              </span>
              /
              <span>
                
                <NavLink to="/terms-conditions">
                  TERMS AND CONDITIONS
                </NavLink>
              </span>
              /
              <span>
                
                <NavLink to="/privacy-policy">
                  PRIVACY POLICY
                </NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
