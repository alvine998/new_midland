import React from 'react';
import { logo } from '../assets';
import './style.css';

const Sidebar = (props) => {
    return (
        <div>
            <div className='sider'>
                <img src={logo} className="img-logo-size" />
                <nav>
                    <ul>
                        <li className='over-height'>
                            <a className={props.home ? 'coloring active' : "coloring"} href='/'>Home</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.profile ? 'coloring active' : "coloring"} href='/profile'>Profile</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.project ? 'coloring active' : "coloring"} href='#'>Our Projects</a>
                        </li>
                        <li className='over-height'>
                            <a className={props.join ? 'coloring active' : "coloring"} href='#'>Join Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;