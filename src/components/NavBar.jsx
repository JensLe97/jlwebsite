import React, {usestate} from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        HOME 
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
