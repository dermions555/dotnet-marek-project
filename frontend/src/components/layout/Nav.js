import React, { Component } from "react";
import { Link } from "react-router-dom";

//TODO Hide this when user is not authenticated
class Nav extends Component {
    render() {
        return (
            <header className="nav-header">
                <Link className="nav-logo" to="/"><img src={"/img/logo.png"} alt="logo"/></Link>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/contacts">Kontakty</Link></li>
                        <li><Link to="/opportunities">Obchody</Link></li>
                        <li><Link to="/companies">Společnosti</Link></li>
                        <li><Link to="/tasks">Úkoly</Link></li>
                        <li><Link to="/reports">Reporty</Link></li>
                    </ul>
                </nav>
                <Link to="/"><button className="nav-button">Můj profil</button></Link>
            </header>
        )
    }
}

export default Nav;
