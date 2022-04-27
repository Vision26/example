import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

function Header() {
    return (
        <div className="header-container">
            <a href="#"className="header-h1">SAVE A PAW</a>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/adopt">Adopt</Link>
            </nav>

        </div>
    )
}

export default Header