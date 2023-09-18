import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import { useState } from "react";
import './App.css';

const Login = ({ toggleSignup }) => {
  const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginerror, setLoginerror] = useState('');
    const [isbuttondisabled,setIsButtonDisabled]= useState(true);
    const [logout,setLogout]=useState(false);

   
    const navigate = useNavigate();


  
    const handleLogin = (event) => {
        event.preventDefault(); 
      axios.post('http://localhost:2000/api/login', { username, password })

      .then((response) => {
          setUsers(response.data);
          if (users) {     
             
            navigate('/home');
          
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


  const handleLogout = () => {
    localStorage.removeItem('user'); 
    setLogout(false);
    setUsername('');
    
  };
  
    return (
      <div class="login">
        <form onSubmit={handleLogin}>
          <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
          <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
          <button type='submit' className='login-btn' disabled={isbuttondisabled}>
            Login
          </button>
         <p>Create account{' '}<span onClick={toggleSignup} style={{ cursor: 'pointer' }}>Sign up</span></p> 

        </form>
        {loginerror && <p>{loginerror}</p>}
 
      </div>
    );
  }
  
  export default Login;