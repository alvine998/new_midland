import React from 'react';
import { GoLocation } from 'react-icons/go';
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineMail} from 'react-icons/ai'
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css'

const Contact = (props) => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar contact />
                </div>
                <div className='col-md'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.42217448029!2d106.84367547910158!3d-6.123600499999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ff81c6262df%3A0x4f0d4b3f64afd2e3!2sKantor%20Pusat%20PT.%20Midland%20Kreator%20Properti!5e0!3m2!1sid!2sid!4v1652282004888!5m2!1sid!2sid" className='w-100' height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div style={{ paddingTop: 20 }}>
                        <div className='row'>
                            <div className='col-md'>
                                <h2 style={{ textAlign: "center" }}>Pesan untuk kami :</h2>
                                <div className='form-margin'>
                                    <input type={"text"} placeholder="Nama Lengkap" className='form-control' />
                                </div>
                                <div className='form-margin'>
                                    <input type={"email"} placeholder="Email" className='form-control' />
                                </div>
                                <div className='form-margin'>
                                    <textarea placeholder="Pesan" className='form-control form-textarea' />
                                </div>
                                <div className='form-margin'>
                                    <button className='btn btn-primary w-100'>Kirim</button>
                                </div>
                            </div>
                            <div className='col-md'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <GoLocation className='icon-location' />
                                    </div>
                                    <div className='col-md'>
                                        <h5 className='title'>Alamat</h5>
                                        <p className='p-contact'>
                                            Jl. Warakas Gg.8, Warakas, Tanjung Priok, Jakarta Utara.
                                        </p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-2'>
                                        <IoPhonePortraitOutline className='icon-location' />
                                    </div>
                                    <div className='col-md'>
                                        <h5 className='title'>Telepon</h5>
                                        <p className='p-contact'>
                                            021 5374-2555
                                        </p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-2'>
                                        <AiOutlineMail className='icon-location' />
                                    </div>
                                    <div className='col-md'>
                                        <h5 className='title'>Email</h5>
                                        <p className='p-contact'>
                                            info@midlandproperti.com<br/>
                                            midland.properti@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingTop:50}}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;