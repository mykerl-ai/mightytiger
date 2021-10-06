import './Navbar.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <header>
            <div className="gloss"></div>
            <div className="logo"></div>
            <div className="menu">
                <Link to="/" href="#">Home</Link>
                <Link to="/gallery" href="#">Gallery</Link>
                <Link to="/market">For Sale</Link>
                <Link to="/wallet">My Wallet</Link>
            </div>

            <div onClick={()=> setMenu(!menu)} className="hamburger">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7.5H12.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 15H5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 22.5H17.5" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    {menu &&
                <div className="hamMenu">
                    <Link to="/">Home</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/market">For Sale</Link>
                    <Link to="/wallet">My Wallet</Link>
                </div>}
            </div>

            
        </header>
    )
}

export default Navbar