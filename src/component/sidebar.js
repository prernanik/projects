 
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="container">
        <div className="sidebar">
          {/* <br></br>
                            <Link to="/">HOME</Link> 
                        <br></br>
                        <br></br>
                        <br></br> */}

          <Link to="/blogpost" className="button-css">
            Admin
          </Link>
          <br></br>
          <br></br>
          <br></br>

          <Link to="/post" className="button-css">
            blogs
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
