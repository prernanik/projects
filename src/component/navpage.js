import React from "react";
import { Route, Routes } from "react-router-dom";
// import Homepage from "./homepage";
import Admin from "../blogpost";
import Blog from "../post";

const Navpage=()=>{
   return(<>
    <section>

        <Routes>
        <Route path="/" element={<Blog/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
        </Routes>



    </section>
   
   </>)
}
export default Navpage;