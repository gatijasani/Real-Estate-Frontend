import React from 'react'
import Nav from './Nav'
import house1 from "./images/house-img-1.webp";
import house2 from "./img/5-1.jpg";
import house3 from "./img/1-1.jpg";
import flat1 from './images/flat1.webp'
import house5 from "./img/4-1.jpg";
import house6 from './images/house-img-6.webp';
import house7 from './images/RE1.jpg'
import house9 from './images/RE2.webp'
import house10 from './images/RE3.webp'
import house11 from './images/RE4.jpg'
import house8 from './images/house-img-4.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Listings = () => {
    document.title = "All Listings";
    return (
        <>
            <Nav />
            <section class="listings">

                <h1 class="heading">All Latest Listings</h1>

                <div class="box-container">

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                            <img src={house1} alt="" />
                        </div>
                        <h3 class="name">Akshar Society</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
                        </div>
                        <Link to="/view_property" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                            
                            <img src={house2} alt=""/>
                        </div>
                        <h3 class="name">Kalash</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Bopal, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>2</span></p>
                            <p><i class="fas fa-bath"></i><span>2</span></p>
                            <p><i class="fas fa-maximize"></i><span>800sqft</span></p>
                        </div>
                        <Link to="/view_property1" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                           
                            <img src={house3} alt="" />
                        </div>
                        <h3 class="name">Crystal Heights</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Paldi, Ahmeadbad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1100sqft</span></p>
                        </div>
                        <Link to="/view_property2" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                           
                            <img src={flat1} alt="" />
                        </div>
                        <h3 class="name">Shubham Pleasure</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Naroda, Ahmeadbad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>5</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1350sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>flat</span><span>sale</span></p>
                            
                            <img src={house5} alt="" />
                        </div>
                        <h3 class="name">Swarnim Sun</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Paldi, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>790sqft</span></p>
                        </div>
                        <Link to="/view_property4" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                           
                            <img src={house6} alt="" />
                        </div>
                        <h3 class="name">Shilp Residency</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Iscon, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1240sqft</span></p>
                        </div>
                        <Link to="/view_property5" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                           
                            <img src={house7} alt="" />
                        </div>
                        <h3 class="name">Hari Residency</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Gota, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1240sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                           
                            <img src={house8} alt="" />
                        </div>
                        <h3 class="name">Ganga Flats</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Prahladnagar, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1240sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                           
                            <img src={house9} alt="" />
                        </div>
                        <h3 class="name">Siddhi Bunglows</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Prahladnagar, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1150sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                           
                            <img src={house10} alt="" />
                        </div>
                        <h3 class="name">Riddhi Residency</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Sanand, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1350sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                           
                            <img src={house11} alt="" />
                        </div>
                        <h3 class="name">Dev Bunglows</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Express Way, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1540sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Listings
