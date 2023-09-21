import React from "react";
import Navbar from "./navbar";
import Navpage from "./navpage";
import Sidebar from "./sidebar";
import "./homepage.css";

const Homepage=({onLogout})=>{
    return (<>
     
     
        <div>
            <Navbar onLogout={onLogout}/>
        </div>
     

     
        <div className="sidemainclass">
        <div className="side2">
            <Sidebar/>
        </div>
        </div>
     

     
        <div className="side3">
            <Navpage/>
            
        </div>
     

     
    </>)

}
export default Homepage;