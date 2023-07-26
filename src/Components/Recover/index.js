import { Input } from 'antd';
import './recover.scss'
import { NavLink } from 'react-router-dom';
function RecoverDetails() {
  return (
    <div className="recover">
        <div className="login_details">
            <h1>Reset your password</h1>
            <p>We will send you an email to reset your password</p>
            <Input placeholder="Enter your email" className='input_login' />
            <NavLink className='login_submit' to="/account/login">Submit</NavLink>
            <NavLink className='register_btn' to="/account/login">Cancel</NavLink>
        </div>
    </div>
  );
}

export default RecoverDetails;
