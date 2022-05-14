import React from 'react';
import { company, company2, logo } from '../../assets';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css'

const News = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar news />
                </div>
                <div className='col-md'>
                    <img src={company2} className="banner-profile" />
                    <div style={{ paddingTop: 20 }}>
                        <h2 style={{ textAlign: "center" }}>Berita</h2>
                        <div style={{ padding: 20 }}>
                            <h3>Headline News</h3>
                            <div>
                                <div className='card-group'>
                                    <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                    <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                    <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
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

export default News;