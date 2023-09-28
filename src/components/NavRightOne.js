import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef, useState } from "react";
import SignIn from './SignIn';
import BookNow from './BookNow';

const NavRightOne = () => {
  return (
        <div className="nav-bar-right-one">
              <a href="" className="home">Home</a>
              <a href="" className="about">About</a>
              <a href="" className="services">Services</a>
              <a href="" className="contact">Contact</a>
             <div className="nav-book">
            <BookNow></BookNow>
            <SignIn/>
            </div> 
        </div>
   
  )
}

export default NavRightOne