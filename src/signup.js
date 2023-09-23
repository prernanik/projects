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
          navigate('/homepage'); 
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

const handleGoogleSignup = () => {
  // Redirect the user to the Google OAuth authorization URL
  window.location.href = 'URL_TO_GOOGLE_OAUTH_AUTHORIZATION';
};

const handleGitHubSignup = () => {
  // Redirect the user to the GitHub OAuth authorization URL

  fetch('https://blogapp-csk3.onrender.com/github-auth')  
      .then((response) => response.json())
      .then((data) => {
         window.location.href = data.githubAuthUrl; // Assuming your server returns the URL as 'githubAuthUrl'
      })
      .catch((error) => {
        console.error('Error fetching GitHub authorization URL:', error);
      });
 // window.location.href = 'URL_TO_GITHUB_OAUTH_AUTHORIZATION';
};

  return (
    <>
    <div className="login">
       <input type='text' className="username" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} /><br></br>
       <input type='text'className="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>

       <input type='text'className="email" placeholder='emailid' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>


         <button className="login-btn" onClick={handleSubmit} disabled={isbuttondisabled}>Signup</button>
         <p className='signup-p'>
          Already have an account?{' '}
          <span className="signup-span" onClick={()=>{props.toggleSignup()}} style={{ cursor: 'pointer' }}>
            Log In
          </span>

        </p>         </div>
        <div className="oauth-buttons">
        <button className="signup-button" onClick={handleGoogleSignup}>
          Sign Up with Google
        </button>
        <button className="signup-button" onClick={handleGitHubSignup}>
          Sign Up with GitHub
        </button>
      </div>
    
    
    </>
  );
}

export default Signup;
