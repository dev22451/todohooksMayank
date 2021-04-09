import React from 'react'

function Nav(props) {

    const addTodo = () => {
        props.toggleDisplayForm()
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Navbar</a>

                <ul className="nav">
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Nav