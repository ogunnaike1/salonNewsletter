import { FaBars, FaTimes } from "react-icons/fa"
import { useRef, useState } from "react";
import React from "react";
import SignIn from "./SignIn";
import BookNow from "./BookNow";
import NavRightOne from "./NavRightOne";
import NavRightTwo from "./NavRightTwo";


const Navbar = () => {
    const [menuOpen, setMenuopen] = useState(false)
    const navref = useRef();
    const showNavbar = () => {
        navref.current.classList.toggle('responsive_nav')
    }
    return(

    <div className='nav-bar'>
        <div  className="nav-content">
            <div className='nav-bar-left'>
                <div className="logo">SIMPSTYLE</div>
            </div>
            <NavRightOne/>
                <button className="nav-btn" onClick={() => {setMenuopen(!menuOpen)}}>
                    <FaBars/>
                </button>
            
        </div>
        <div className={menuOpen ? "nav-bar-right-two" : "nav-bar-right-two-close"}>
              <a href="" className="home">Home</a>
              <a href="" className="about">About</a>
              <a href="" className="services">Services</a>
              <a href="" className="contact">Contact</a>
             <div className="nav-book">
            <BookNow></BookNow>
            <SignIn/>
            </div> 
            <button className="nav-btn-close" onClick={() => {setMenuopen(!menuOpen)}}>
                <FaTimes/>
            </button>
            </div>
        
     </div>
    );
}
export default Navbar;