import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../static/navbar.css';

function Navbar(){

    useEffect(() => {
        const navbar = document.querySelector('.navbar-container');
        window.addEventListener('scroll',() => {
            if(window.scrollY > 80){
                navbar.classList.add('navbar-active');
            }else{
                navbar.classList.remove('navbar-active');
            }
        });
    },[]);

    const displayDropdown = () => {
        let el = document.querySelector('.dropdown-menu');
        el.classList.toggle('display-drop');
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
    }
    return(
        <React.Fragment>
            <div className='navbar-container'>
                <img src={require('../static/netflix-logo-png-2562.png')} alt="netflix-logo" className="netflix-logo" />
                <div className="caret-wrapper">
                    <span className="glyphicon glyphicon-search"></span>
                    <img src={require('../static/avatar.png')} alt="avatar" className="avatar" />
                    <span className="glyphicon glyphicon-triangle-bottom" onClick={() => displayDropdown()}></span>
                </div>
            </div>
            <div className="dropdown-menu">
                <ul className='list'>
                    <li>Profile</li>
                    <li>My List</li>
                    <Link to="/login">
                        <li onClick={() => handleLogout()}>Logout</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    );
}
export default Navbar;
