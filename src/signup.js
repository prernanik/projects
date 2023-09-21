import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';

function Signup(props) {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isbuttondisabled,setIsButtonDisabled]= useState(true);


  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
      email,

    };

    axios.post('https://blogapp-csk3.onrender.com/users/register', data)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          props.onLogin();
          console.log("ff");
          navigate('/home'); 
        } else {
          console.log('failed to post');
        }
      })
      // .catch(error => {
      //   console.log('Error posting data:', error);
      // });
  }
  React.useEffect(() => {
    setIsButtonDisabled(!(username && password && email));
}, [username, password,email]);


  return (
    <>
    <div className="login">
       <input type='text' className="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
       <input type='text'className="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

       <input type='text'className="email" placeholder='emailid' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>


         <button className="login-btn" onClick={handleSubmit} disabled={isbuttondisabled}>Signup</button>
         <p className='signup-p'>
          Already have an account?{' '}
          <span className="signup-span" onClick={()=>{props.togglesignup()}} style={{ cursor: 'pointer' }}>
            Log In
          </span>
        </p>         </div>

    </>
  );
}

export default Signup;
