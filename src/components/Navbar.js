import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="menu_bar">
            <span onClick={() => navigate('/home')}>Home</span>
            <span onClick={() => navigate('/projects')}>Projects</span>
            <span onClick={() => navigate('/resume')}>Resume</span>
            <span onClick={() => navigate('/contact')}>Contact</span>
        </div>
    );
};

export default Navbar;
