import React from 'react';
import Sidebar from '../../components/Sidebar';

const Home = () => {
    return ( 
        <div style={{overflow:"hidden"}}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar home/>
                </div>
                <div className='col-md'>
                    <p>
                        Ini Home
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Home;