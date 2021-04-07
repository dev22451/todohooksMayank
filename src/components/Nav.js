import React from 'react'

function Nav() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Navbar</a>

                <ul className="nav">
                    <li className="nav-item">
                        <button className="btn btn-primary">Add Todo</button>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Nav