import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import './style.css';

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
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
                            <h2 className='subtitle'>Berita</h2>
                            <div className='card-group'>
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                                <Card source="https://dummyimage.com/400x300/000/fff" title="Cluster Warakas 7" comment="Lokasi : Jl.Warakas Gg.7, Tanjung Priok, Jakarta Utara" />
                            </div>
                            <center className='other-news'>
                                <a href="#">Lihat berita lainnya ...</a>
                            </center>
                        </div>


                        <div style={{ paddingTop: 50 }}>
                            <h2 className='subtitle'>Proyek Terbaru</h2>
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

                        <div style={{ paddingTop: 50 }}>
                            <h2 className='subtitle'>Galeri Youtube Kami</h2>
                            <div className='row' style={{ marginTop: 20 }}>
                                <div className='col-md'>
                                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/JvXU4tCCxyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/FTHSt4B_vMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div className='col-md'>
                                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/hCaVtdhe2v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <iframe className='w-100' height="315" src="https://www.youtube.com/embed/-WQnr8_TegY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default Home;