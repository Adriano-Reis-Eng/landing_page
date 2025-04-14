import React from 'react';
import '../css/Navbar.css'; 
const Navbar = () => {
    return (
        <header className="navbar">
            <a href="#banner" className="logo">Adriano Reis</a>

            <input type="checkbox" id="menu-toggle" className="navbar-menu-checkbox" />
            <label htmlFor="menu-toggle"  className="navbar-menu-icon"></label>

            <nav className="navbar-nav">
                <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#cards">Serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#tecnologias">Tecnologias</a></li>
                    <li><a href="#interacao">Site</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;