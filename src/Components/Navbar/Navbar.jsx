import React from 'react'
import './Navbar.css'
import navlogo from "../../assets/logo2.png"

const Navbar = () => {
  return (
    <>
    <div className="h-navbar">
        <div className="h1-navbar">
            <a href="#"><i class="fa-solid fa-phone"></i>+91-6374556308</a>
            <a href="#"><i class="fa-solid fa-envelope"></i>zeospitshop@gmail.com</a>
        </div>

        <div className="h2-navbar">
            <a href="#">Become a Francise</a>
            <a href="#">Language<i class="fa-solid fa-angle-down"></i></a>
        </div>
    </div>

    <nav>
        <div className="nav-1">
            <a href="index.html"><img src={navlogo} alt="logo" /></a>
        </div>

        <div className="nav-2">
            <ul>
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Become Partner</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

    </nav>
    </>
  )
}

export default Navbar