import React from 'react';
import "../components/NavBar.css";

import { NavLink, Link } from 'react-router-dom';

import logo from "../assets/logo.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <a className="navbar-brand" href="#">
                <img src={logo} width="25" height="25" className="d-inline-block align-top " alt="paw-logo" loading="lazy" />
                In K'aatech
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/nosotros">¿Quiénes somos?<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/conocenos">¡Conócelos!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ayudanos">¿Cómo ayudar?</a>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;