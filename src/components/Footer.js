import React from 'react';
import { logo } from '../assets';

const Footer = (props) => {
    return (
        <div className="footer-height">
            <div className='footer-pad'>
                <div className='row'>
                    <div className='col-md'>
                        <img src={logo} className="footer-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;