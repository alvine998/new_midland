import React from 'react';
import { company, logo } from '../../assets';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css'

const Profile = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar profile />
                </div>
                <div className='col-md'>
                    <img src={company} className="banner-profile" />
                    <div style={{ paddingTop: 20 }}>
                        <h2 style={{ textAlign: "center" }}>Tentang Midland Properti</h2>
                        <div>
                            <div className='row'>
                                <div className='col-md'>
                                    <h5 className='description-profile'>
                                        PT. Midland Kreator Properti adalah sebuah perusahaan yang bergerak
                                        di bidang developer properti khususnya real estate dengan mengutamakan kualitas,
                                        ketepatan waktu, dan harga yang terjangkau dengan sistem dan konsep syariah. Kami 
                                        hadir sebagai developer perumahan terjangkau dan berkomitmen dalam memberikan 
                                        pelayanan untuk rumah idaman anda.
                                    </h5>
                                </div>
                                <div className='col-md-4'>
                                    <img src={logo} className="img-profile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: 50 }}>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;