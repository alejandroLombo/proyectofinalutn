import React from "react";
import { NavLink } from "react-router-dom";
import "./../../style/navStyle.css"


const Nav = (props) => {
    return (
        <>
            <nav className="menu">

                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/" >Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/cuentasc" >Cuentas Corrientes</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/usuarios">Usuarios</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="http://localhost:8000/logout">Salir</NavLink>

            </nav>
        </>
    );
}

export default Nav;