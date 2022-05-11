import React from 'react';
import Sidebar from '../../components/Sidebar';
import './style.css';

const Home = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div className='row'>
                <div className='col-md-2'>
                    <Sidebar home />
                </div>
                <div className='col-md'>
                    <div className="upper w-100">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://dummyimage.com/600x400/000/fff" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dummyimage.com/600x400/000/fff" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://dummyimage.com/600x400/000/fff" class="d-block w-100" alt="..."/>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;