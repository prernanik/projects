import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";
 import './App.css';

function Login(props) {
  const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginerror, setLoginerror] = useState('');
    const [isbuttondisabled,setIsButtonDisabled]= useState(true);

   
    const navigate = useNavigate(    // const [logout,setLogout]=useState(false);
);


  
    const handleLogin = (event) => {
        event.preventDefault(); 
      axios.post('https://blogapp-csk3.onrender.com/api/login', { username, password })

      .then((response) => {
          setUsers(response.data);
          if (response.data) {  
            console.log(response.data); 
            sessionStorage.setItem('userData',JSON.stringify(response.data))
            props.onLogin();  
             
            navigate('/homepage');
          
        }
        })
        .catch((error) => {
          console.log("Error:", error);
          setLoginerror('Invalid username or password');
        });
    }
    React.useEffect(() => {
      setIsButtonDisabled(!(username && password));
  }, [username, password]);


  // const handleLogout = () => {
  //   localStorage.removeItem('user'); 
  //   setLogout(false);
  //   setUsername('');
    
  // };
  
    return (
      <div className="login">
        <form onSubmit={handleLogin}>
          <input type='text' className="username"placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
          <input type='password'className="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
          <button type='submit' className='login-btn' disabled={isbuttondisabled}>
            Login
          </button>
         <p>Create account{' '}<span onClick={()=>{props.toggleSignup()}} style={{ cursor: 'pointer' }}>Sign up</span></p> 

        </form>
        {loginerror && <p>{loginerror}</p>}
 
      </div>
    );
  }
  
  export default Login;