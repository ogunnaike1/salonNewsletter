import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef, useState } from "react";
import SignIn from './SignIn';
import BookNow from './BookNow';

const NavRightTwo = () => {
    const [menuOpen, setMenuopen] = useState(true)
    const navref = useRef();
    const showNavbar = () => {
        navref.current.classList.toggle('responsive_nav')
    }
  return (
    <div></div>

  )
}

export default NavRightTwo