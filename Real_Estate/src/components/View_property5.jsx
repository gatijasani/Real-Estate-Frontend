import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

import house1 from './images/house-img-6.webp';
import house2 from './images/house-img-6.webp';
import house3 from './images/hall-img-6.webp';
import house4 from './images/kitchen-img-6.webp';
import house5 from './images/bathroom-img-6.jpg';
const View_property5 = () => {
    document.title = "View Property";

    return (
        <>
            <Nav />

            <section className="view-property">

                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src={house1} alt="" />
                        </div>
                        <div className="small-images">
                            <img src={house2} alt="" />
                            <img src={house3} alt="" />
                            <img src={house4} alt="" />
                            <img src={house5} alt="" />
                        </div>
                    </div>
                    <h3 class="name">Shilp Residency</h3>
                    <p class="location"><i class="fas fa-map-marker-alt"></i><span>Iscon, Ahmedabad-380050</span></p>
                    <div class="info">
                        <p><i class="fas fa-tag"></i><span>26 lac</span></p>
                        <p><i class="fas fa-user"></i><span>Naman (owner)</span></p>
                        <p><i class="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
                        <p><i class="fas fa-building"></i><span>Flat</span></p>
                        <p><i class="fas fa-house"></i><span>Sale</span></p>
                        <p><i class="fas fa-calendar"></i><span>10-06-2023</span></p>
                    </div>
                    <h3 class="title">Details</h3>
                    <div class="flex">
                        <div class="box">
                            <p><i>Rooms :</i><span>3 BHK</span></p>
                            <p><i>Deposit amount :</i><span>0</span></p>
                            <p><i>Status :</i><span>Ready to move</span></p>
                            <p><i>Bedroom :</i><span>3</span></p>
                            <p><i>Bathroom :</i><span>4</span></p>
                            <p><i>Balcony :</i><span>1</span></p>
                        </div>
                        <div class="box">
                            <p><i>Carpet area :</i><span>1240 sqft</span></p>
                            <p><i>Age :</i><span>3 years</span></p>
                            <p><i>Room floor :</i><span>3</span></p>
                            <p><i>Total floors :</i><span>22</span></p>
                            <p><i>Furnished :</i><span>Semi-furnished</span></p>
                            <p><i>Loan :</i><span>Available</span></p>
                        </div>
                    </div>
                    <h3 class="title">Amenities</h3>
                    <div class="flex">
                        <div class="box">
                            <p><i class="fas fa-check"></i><span>Lifts</span></p>
                            <p><i class="fas fa-check"></i><span>Security guards</span></p>
                            <p><i class="fas fa-times"></i><span>Play ground</span></p>
                            <p><i class="fas fa-check"></i><span>Gardens</span></p>
                            <p><i class="fas fa-check"></i><span>Water supply</span></p>
                            <p><i class="fas fa-check"></i><span>Power backup</span></p>
                        </div>
                        <div class="box">
                            <p><i class="fas fa-check"></i><span>Parking area</span></p>
                            <p><i class="fas fa-times"></i><span>Gym</span></p>
                            <p><i class="fas fa-check"></i><span>Shopping mall</span></p>
                            <p><i class="fas fa-check"></i><span>Hospital</span></p>
                            <p><i class="fas fa-check"></i><span>Schools</span></p>
                            <p><i class="fas fa-check"></i><span>Market area</span></p>
                        </div>
                    </div>
                    <h3 class="title">Description</h3>
                    <p class="description">It is a very budget friendly appartment you will get.</p>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default View_property5
