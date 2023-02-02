import React from "react";
import Navbar from "../component/navbar";
import Landscape from "./landscape";
import Potrait from "./potrait";
import './homecss.css';
import { Label } from "semantic-ui-react";
import Footer from "../component/footer";

function Home () {
    return(
        <>
        <div className="container">
            <div className="nav">
                
                <Navbar/>
            </div>
            <div className="potrait"> 
                <Potrait/>
            </div>
            <div className="landscape">
                
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
        </>
    );
}

export default Home;