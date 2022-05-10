import React from 'react';
import Sidebar from '../../components/Sidebar';

const Profile = () => {
    return ( 
        <div style={{overflow:"hidden"}}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar profile/>
                </div>
                <div className='col-md'>
                    <p>
                        Ini Profile
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Profile;