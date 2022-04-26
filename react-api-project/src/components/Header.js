import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

function Header(){
    return(
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/register">Register</Link>
                <Link to="/adopt">Adopt</Link>
            </nav>
        </div>
    )
}

export default Header