import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home'; 
import BlogPost from "./blogpost";
import Blog from './post';
import Signup from './signup';


function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleSignup = () => {
    setShowLogin(!showLogin);
    console.log(`showLogin is now ${!showLogin}`);
  };
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/"element={showLogin ? (<Login toggleSignup={toggleSignup} />) : (<Signup toggleSignup={toggleSignup} />)}/>

        {/* <Route path='/' element={<Login />} />  */}
        <Route path='/home' element={<Home/>} />
        <Route path="/blogpost" element={<BlogPost/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/post' element={<Blog/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
