import React, { useState } from "react";
import axios from "axios";
import './App.css';
function Admin(){
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const userId=JSON.parse(sessionStorage.getItem('userData'))
        const data = {
            title,
            description,
            author:userId._id
        
          };
        axios.post('https://blogapp-csk3.onrender.com/api/posts',data)
        .then(response=>{
            if(response.status===201){

                alert('Posted Successfully');
                setTitle("");
                setDescription("");
            }else{
                console.log('failed to post')
            }
        })
        .catch(error => { 
        
            console.log('Error posting data:', error);
          });
    }
    return(
        <>
       
        <h2 id="blogpost_heading">Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <label className="blogpost_name">
          Title :
          <input type="text" className="blogpost_tittle" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label className="blogpost_name">
          Description:
          <textarea className="blogpost_description"value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="blogpost_button">Post</button>
      </form>
        
        </>
    );
}
export default Admin;

// MAIN END

 