import React, { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import './NavBar.css'

function NavBar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => { showButton()}, [])
    
    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink className="navbar-logo" to="/" onClick={closeMobileMenu}>
                        JL <i className="fas fa-magic"></i>
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact activeClassName="nav-links active" className="nav-links" to="/" onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-links active" className="nav-links" to="/about" onClick={closeMobileMenu}>
                                Über mich
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-links active" className="nav-links" to="/contact" onClick={closeMobileMenu}>
                                Kontakt
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-links active" className="nav-links" to="/disclosure" onClick={closeMobileMenu}>
                                Impressum
                            </NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline" to="/project-view">Projektansicht</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
