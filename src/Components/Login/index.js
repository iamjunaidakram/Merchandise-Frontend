import { Input } from 'antd';
import './login.scss'
import { NavLink } from 'react-router-dom';
function LoginDetails() {
  return (
    <div className="login">
        <div className="login_details">
            <h1>Login</h1>
            <Input placeholder="Enter your email" className='input_login' />
            <Input.Password placeholder="Enter your Password" className='input_login' />
            <NavLink className='recover_btn' to="/account/recover">Forget your Password?</NavLink>
            <NavLink className='login_submit' to="/">Login</NavLink>
            <NavLink className='register_btn' to="/account/register">Create Account</NavLink>
        </div>
    </div>
  );
}

export default LoginDetails;
