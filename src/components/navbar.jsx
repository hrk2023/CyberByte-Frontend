import React, {useEffect} from 'react';
import '../static/navbar.css';

function Navbar(){
    useEffect(() => {
        const navbar = document.querySelector('.navbar-container');
        window.addEventListener('scroll',() => {
            if(window.scrollY > 100){
                navbar.classList.add('navbar-active');
            }else{
                navbar.classList.remove('navbar-active');
            }
        });
    },[]);
    return(
        <div className='navbar-container'>
            <img src={require('../static/netflix-logo-png-2562.png')} alt="netflix-logo" className="netflix-logo" />
            <img src={require('../static/avatar.png')} alt="avatar" className="avatar" />
        </div>
    );
}
export default Navbar;
