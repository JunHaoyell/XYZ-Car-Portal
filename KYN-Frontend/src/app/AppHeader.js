import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header" style={{backgroundColor:'white'}}>
                <div className="container">
                    <div className="app-branding" style={{backgroundColor:'white'}}>
                        <Link to="/" className="app-title">Know Your Neighborhook</Link>
                    </div>
                    <div className="app-options" style={{backgroundColor:'white'}}>
                        <nav className="app-nav" style={{backgroundColor:'white'}} >
                                { this.props.authenticated ? (
                                    <ul style={{backgroundColor:'white'}}>
                                        <li>
                                            <NavLink to="/profile">PROFILE</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/stores">STORES</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/term">Term & Condition</NavLink>
                                        </li>
                                        
                                        <li>
                                            <a onClick={this.props.onLogout}>LOGOUT</a>
                                        </li>
                                        
                                    </ul>
                                ): (
                                    <ul style={{backgroundColor:'white'}}>
                                         <li>
                                            <NavLink to="/about">About Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/term">Term & Condition</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/login">LOGIN</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">SIGNUP</NavLink>        
                                        </li>
                                    </ul>
                                )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;