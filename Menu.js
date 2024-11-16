import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">АСУ</Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Головна</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">Про сайт</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/gallery">Галерея</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/news">Новини</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Контакти</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Menu;
