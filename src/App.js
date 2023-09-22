 
import React from "react";
import "./App.css";
import Login from "./login";
import Signup from "./signup";
import { useState } from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import Homepage from "./component/homepage";
import Blog from "./post";
import Admin from "./blogpost";

function App(){
    const [showLogin, setShowLogin] = useState(true);
    const[isAuthenticated, setIsAuthenticated]= useState(false);

    const toggleSignup = () => {
    setShowLogin(!showLogin);
    console.log(`showLogin is now ${!showLogin}`);
  };
   const handleLogin=()=>{
      setIsAuthenticated(true);
   };
   const handlelogout=()=>{
      setIsAuthenticated(false)
   }

    
     return(<>
        <BrowserRouter>    
        <Routes>
       {/* <Route path="/login" element={<Login/>}/>  */}

       <Route path="/"element={showLogin ? (isAuthenticated ?(<Navigate to="/homepage"/>) :(<Login onLogin={handleLogin} toggleSignup={toggleSignup} />)) : (isAuthenticated ? ( <Navigate to="/homepage"/>):(<Signup onLogin={handleLogin} toggleSignup={toggleSignup} />))}/>
       {/* <Route path='/signup' element={<Signup/>}/>  */}

        


       <Route path="homepage" element={isAuthenticated ? <Homepage onLogout={handlelogout}/> : <Navigate to="/"/>}/>
      <Route path="post" element={isAuthenticated ? <Blog/> : <Navigate to="/"/>}/>
      <Route path="blogpost" element={isAuthenticated ? <Admin/> : <Navigate to="/"/>}/>

        </Routes>
        </BrowserRouter>
     
     </>)
}
export default App;