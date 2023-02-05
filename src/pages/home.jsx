import React from "react";
import { Link, Outlet } from "react-router-dom";

import './homecss.css';


function Home() {
  return(
    
    <div className="container">
      
      <div className="">
            
          
          <div className="container1">
            <Link to="/potrait"><button className="button">Potrait</button></Link>
            </div>
          <div className="container1">
            <Link to="/landscape"><button className="button">Landscape</button></Link>
            </div>
          <div className="container1">
          <button className="button" >
            <a href="https://dcalloc.opmsales.com/" target="_blank"  rel="external" className="button">
            Allocation Calculator
            </a>
            </button>
            </div>
       
      
</div>
      
      <Outlet/>
    </div>
  );
}

export default Home;