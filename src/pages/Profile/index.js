import React from 'react';
import { company, logo, misi, visi } from '../../assets';
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
                                    <img src={logo} className="img-profile" />
                                </div>
                            </div>
                        </div>

                        <hr/>
                        <div style={{paddingTop:50}}>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={visi} className="img-visi-profile" />
                                </div>
                                <div className='col-md'>
                                    <h5 className='description-profile'>
                                        Menjadi salah satu dari 10 pengembang terbaik dan terpercaya di Indonesia
                                        dengan menerapkan konsep syariah, serta mengedepankan kualitas, inovasi, dan 
                                        ketepatan waktu demi memberikan pelayanan maksimal baik bagi investor maupun 
                                        konsumen
                                    </h5>
                                </div>
                            </div>
                            <div className='row' style={{paddingTop:20}}>
                                <div className='col-md'>
                                    <h5 className='description-profile'>
                                        - Menghadirkan properti dengan harga terjangkau dan berkualitas <br/>
                                        - Menjadi solusi dalam mengatasi masalah sulitnya masyarakat dalam memiliki
                                        hunian <br/>
                                        - Mengedepankan nilai amanah dan jujur dalam memberikan pelayanan kepada
                                        investor dan konsumen
                                    </h5>
                                </div>
                                <div className='col-md-4'>
                                    <img src={misi} className="img-visi-profile" />
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