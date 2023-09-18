import React, { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts when the component mounts
    axios.get("http://127.0.0.1:2000/api/get")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const likepost= async(postId)=>{
    try{
      const response= await axios.post(`http://127.0.0.1:2000/api/posts/like/${postId}`);
      if(response.status===200){
        setPosts((prevposts)=>
        prevposts.map((post)=>
        post._id===postId ?{...post,likes:post.likes+1}:post));
      }
      else{
        console.log("error");
      }
    }
    catch(error){
      console.log("errorr");
    }
  };

  return (<>
    <div>
      <h2 id="post_heading">Blog Posts</h2>
      
        {posts.map((post) => (
          <div class="post"key={post._id}>
            <h3 id="post_tittle">{post.title}</h3>
            <p id="post_description">{post.description}</p>
            <button className="Like"onClick={()=>likepost(post._id)}>Likes</button>
            <p>Likes:{post.likes}</p>
          </div>
          
           
        ))}
    
    </div>
    </>);
}

export default Blog;