import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/styles.scss';


const Navigation = (props) => (
    <nav className="main-nav">
        <div className="main-nav__logo">
            <h1>Tokyo Salsa</h1>
        </div>
        <div className="main-nav__links">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink to="/events" activeClassName="is-active">Events</NavLink>
                </li>
                <li className="main-nav__item">
                    <NavLink to="/venues" activeClassName="is-active">Venues</NavLink>
                </li>
            </ul> 
        </div>
            
    </nav>
);

export default Navigation;
