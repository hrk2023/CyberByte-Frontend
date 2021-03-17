import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../static/css/navbar.css';

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
    return(
        <React.Fragment>
            <div className='navbar-container'>
                <Link to="/">
                    <img src={require('../static/assets/cypherbytelogo.png')} alt="logo" className="cypherbyte-logo" />
                </Link>
                <div className="caret-wrapper">
                    <span className="glyphicon glyphicon-search"></span>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Navbar;
