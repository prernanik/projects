import React from "react";
//import { Link } from "react-router-dom";
import {Link, useNavigate } from "react-router-dom";
//import { useState,useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";




function Home() {
   
  const [showBlog, setShowBlog] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const [likes,setLikes]=useState({});


  const navigate=useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem('user'); // Remove user from localStorage
  //   navigate('/login'); // Redirect to the login page after logout
  // };
   

  useEffect(() => {
    if (showBlog) {
      
      axios.get('https://blogapp-csk3.onrender.com/api/get')
        .then(response => {
          setBlogData(response.data);
        })
        .catch(error => {
          console.error('Error fetching blog data:', error);
        });
    }
  }, [showBlog]);

  

  const handleBlog = () => {
    setShowBlog(true); 
  };
  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
        ...prevLikes,
        [postId]: (prevLikes[postId] || 0) + 1,
    }));
};

const handlelogout=()=>{
  navigate('/');
}
  return (<>
  
    <div className="home_parent">
      <div className="home_child_1">
      <h1 id="home_heading">Welcome to the blog app</h1>
      <div className="home_asidebutton"> 
      <Link to="/blogpost" className="button">Create</Link><br></br>
      <button className="button" onClick={handleBlog}>Blog</button> 
      <button className="button"onClick={handlelogout}>Logout</button>
       {/* <button onClick={handleLogout} className="button">Logout</button> */}
       </div>

      <div className="home_child_2">
      {showBlog && (
        <div className='blog-content'>
          <h2 className='heading_blog'>Blog Post</h2>
         
          {blogData.map((post, index) => (
            <div key={index} className='blog-post'>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button className={`like-button ${likes[post.id] > 0 ? 'liked' : ''}`}onClick={() => handleLike(post.id)} >
              <span className="like-icon"><i class="fa-regular fa-heart"></i></span> Like ({likes[post.id] || 0})
              </button>
     

            </div>
          ))}
        </div>
      )}
        </div>
        </div>
        </div>
        </>);
}
   

export default Home;
