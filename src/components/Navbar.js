import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <NavLink to="/">
                        <img src="/FakeShop.png" alt="logo" style={{ height: "50px" }} />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;