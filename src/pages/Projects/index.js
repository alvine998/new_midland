import React from 'react';
import { company, company2, logo } from '../../assets';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css'

const Projects = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar projects />
                </div>
                <div className='col-md'>
                    <img src={company2} className="banner-profile" />
                    <div style={{ paddingTop: 20 }}>
                        <h2 style={{ textAlign: "center" }}>Proyek Kami</h2>
                        <div style={{ padding: 20 }}>
                            <p style={{color:"black"}}>
                                Kami telah memiliki proyek mini cluster yang sudah terjual
                                puluhan unit di sekitar daerah Jakarta Utara. Kini kami melakukan
                                expansi ke daerah Cikarang Sukaasih untuk mengembangkan proyek cluster terbaru kami.
                            </p>
                            <center>
                                <div className='row'>
                                    <div className='col-md'>
                                        <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                    </div>
                                    <div className='col-md'>
                                        <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Swasembada 5" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                    </div>
                                    <div className='col-md'>
                                        <Card source="https://dummyimage.com/400x300/000/fff" title="Mini Cluster Cikarang" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                    </div>
                                </div>
                            </center>
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

export default Projects;