import { Input } from 'antd';
import './register.scss'
import { NavLink } from 'react-router-dom';
function RegisterDetail() {
  return (
    <div className="login">
        <div className="login_details">
            <h1>Create account</h1>
            <Input placeholder="First Name" className='input_login' />
            <Input placeholder="Last Name" className='input_login' />
            <Input placeholder="Email" className='input_login' />
            <Input.Password placeholder="Password" className='input_login' />
            <NavLink className='login_submit' to="/account/login">Create</NavLink>
        </div>
    </div>
  );
}

export default RegisterDetail;
