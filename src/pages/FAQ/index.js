import React from 'react';
import { company } from '../../assets';
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const Faq = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar faq />
                </div>
                <div className='col-md'>
                    <img src={company} className="banner-profile" />
                    <div style={{ paddingTop: 20 }}>
                        <h2 style={{ textAlign: "center" }}>FAQ</h2>
                        <div style={{ padding: 20 }}>
                            <div>
                                <div>
                                    <Accordion/>
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

export default Faq;