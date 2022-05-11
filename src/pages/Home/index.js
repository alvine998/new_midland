import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css';

const Home = () => {
    return (
        <div style={{ overflow: "hidden", backgroundColor: "#666464" }}>
            <div className='row'>
                <div className='col-md-2 height-100'>
                    <Sidebar home />
                </div>
                <div className='col-md'>
                    <div className="upper">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://dummyimage.com/600x300/000/fff" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dummyimage.com/600x300/000/fff" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dummyimage.com/600x300/000/fff" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div style={{ paddingTop: 50 }}>
                            <h2 className='subtitle'>BERITA</h2>
                            <Card />
                        </div>

                        <div style={{ paddingTop: 50 }}>
                            <h2 className='subtitle'>Proyek Kami</h2>
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

export default Home;