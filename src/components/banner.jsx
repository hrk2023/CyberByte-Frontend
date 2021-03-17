import React from 'react';
import '../static/css/banner.css';
import { BiCoffeeTogo } from 'react-icons/bi';

function Banner(){
    return(
        <div className="container-fluid banner">
            <div className="banner-content col-xs-12 col-md-5">
                <div className="banner-title">CypherByte Society</div>
                <div className="banner-subheading">(A.k.a Netflix For Coders)</div>
    
                <div className="banner-desc">
                We are CypherByte Society. It is a free society where beginner level coders can
                get exposure to quality content which is available for free on the internet.    
                </div>

                <React.Fragment>
                    <div className="banner-btn">
                        <button className="btn btn-secondary coffee-btn">
                            <BiCoffeeTogo className="coffee-icon"/>
                            Buy Me a Coffee
                        </button>
                    </div>
                </React.Fragment>
            </div>
            <div className="banner-footer"></div>
            <div className="banner-overlay"></div>
        </div>
    );
}
export default Banner;
