 


import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./post.css";
import Homepage from "./component/homepage";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    let userobj = JSON.parse(sessionStorage.getItem("userData"));
    console.log(userobj._id);
    // Fetch the posts when the component mounts
    axios
      .get(`https://blogapp-csk3.onrender.com/api/get?userId=${userobj._id}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleAddComment = (postId, commentText) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), commentText],
    }));
  };

  return (
    <>
      <div className="blog-container">
        <div className="blog-content">
          {/* Render blog posts */}
          {posts.map((post) => (
            <div className="blog-post" key={post._id}>
              <h3 className="post_title">{post.title}</h3>
              <p className="post_description">{post.description}</p>

              {/* Render comments */}
              <div className="comments">
                <h4>Comments:</h4>
                {comments[post._id] &&
                  comments[post._id].map((comment, index) => (
                    <div key={index} className="comment">
                      {comment}
                    </div>
                  ))}
              </div>

              {/* Comment input form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const commentText = e.target.commentText.value;
                  handleAddComment(post._id, commentText);
                  e.target.commentText.value = ""; // Clear the input field
                }}
              >
                <input
                  type="text"
                  name="commentText"
                  placeholder="Add a comment"
                />
                <button type="submit">Submit</button>
              </form>

              <button
                className={`like-button ${
                  likes[post._id] > 0 ? "liked" : ""
                }`}
                onClick={() => handleLike(post._id)}
              >
                <span className="like-icon">
                  <i className="fa-regular fa-heart"></i>
                </span>{" "}
                Like ({likes[post._id] || 0})
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;


 