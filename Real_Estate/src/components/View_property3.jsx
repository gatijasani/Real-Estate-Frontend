import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import house1 from './img/3-1.jpeg';
import house2 from './img/3-2.jpg';
import house3 from './img/3-3.jpg';
import flat1 from './images/flat1.webp'
import house5 from './img/3-5.jpeg';
const View_property3 = () => {
    document.title = "View Property";
    return (
        <>
            <Nav />

            <section className="view-property">

                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src={flat1} alt="" />
                        </div>
                        <div className="small-images">
                            <img src={house2} alt="" />
                            <img src={house3} alt="" />
                            <img src={flat1} alt="" />
                            <img src={house5} alt="" />
                        </div>
                    </div>
                    <h3 class="name">Shubham Pleasure</h3>
      <p class="location"><i class="fas fa-map-marker-alt"></i><span>Naroda, Ahmedabad-380050</span></p>
      <div class="info">
         <p><i class="fas fa-tag"></i><span>30 lac</span></p>
         <p><i class="fas fa-user"></i><span>Tarun (owner)</span></p>
         <p><i class="fas fa-phone"></i><a href="tel:1234567890">1234567890</a></p>
         <p><i class="fas fa-building"></i><span>Flat</span></p>
         <p><i class="fas fa-house"></i><span>Sale</span></p>
         <p><i class="fas fa-calendar"></i><span>10-02-2023</span></p>
      </div>
      <h3 class="title">Details</h3>
      <div class="flex">
         <div class="box">
            <p><i>Rooms :</i><span>5 BHK</span></p>
            <p><i>Deposit amount :</i><span>0</span></p>
            <p><i>Status :</i><span>Ready to move</span></p>
            <p><i>Bedroom :</i><span>5</span></p>
            <p><i>Bathroom :</i><span>5</span></p>
            <p><i>Balcony :</i><span>3</span></p>
         </div>
         <div class="box">
            <p><i>Carpet area :</i><span>1350sqft</span></p>
            <p><i>Age :</i><span>3 years</span></p>
            <p><i>Room floor :</i><span>3</span></p>
            <p><i>Total floors :</i><span>22</span></p>
            <p><i>Furnished :</i><span>semi-furnished</span></p>
            <p><i>Loan :</i><span>available</span></p>
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

export default View_property3
