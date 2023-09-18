import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './App.css';

const Signup = ({ toggleSignup }) => {
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

    axios.post('http://127.0.0.1:2000/users/register', data)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
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
       <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
       <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

       <input type='text' placeholder='emailid' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>


         <button  onClick={handleSubmit} disabled={isbuttondisabled}>Signup</button>
         <p>Already have an account?{' '}<span onClick={toggleSignup} style={{ cursor: 'pointer' }}>Log In</span></p>
         </div>

    </>
  );
}

export default Signup;
