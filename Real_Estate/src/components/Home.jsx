import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from './images/icon-1.png';
import icon2 from './images/icon-2.png';
import icon4 from './images/icon-4.png';
import icon5 from './images/icon-5.png';
import icon6 from './images/icon-6.png';
import house1 from "./img/5-1.jpg";
import house2 from "./img/1-1.jpg";
import house3 from "./images/house-img-1.webp";
import Footer from './Footer';
import Nav from './Nav';
import slide4 from './images/slide4.jpg';
const Home = () => {
    document.title = "Home";
    return (
        <>
            <Nav />
            <div class="home">
               <section class="center mb-5">
                <div> 
                 
                        <div class="image">
                        <img src={slide4} alt="" />
                    </div>

                    </div>
                    <form className="rounded-md">
                        <h3>Find your perfect home</h3>
                        <div class="box">
                            <p>Enter location <span>*</span></p>
                            <input type="text" name="location" required maxlength="50" placeholder="enter city name" class="input" />
                        </div>
                        <div class="flex">
                            <div class="box">
                                <p>Property Type <span>*</span></p>
                                <select name="type" class="input" required>
                                    <option value="flat">Flat</option>
                                    <option value="house">House</option>
                                    <option value="shop">Shop</option>
                                </select>
                            </div>
                            <div class="box">
                                <p>How many BHK <span>*</span></p>
                                <select name="bhk" class="input" required>
                                    <option value="1">1 BHK</option>
                                    <option value="2">2 BHK</option>
                                    <option value="3">3 BHK</option>
                                    <option value="4">4 BHK</option>
                                    <option value="5">5 BHK</option>
                                    
                                </select>
                            </div>
                            <div class="box">
                                <p>Minimum Budget <span>*</span></p>
                                <select name="minimum" class="input" required>
                                    <option value="5000000">5 lac</option>
                                    <option value="1000000">10 lac</option>
                                    <option value="2000000">20 lac</option>
                                    <option value="3000000">30 lac</option>
                                    <option value="4000000">40 lac</option>
                                    <option value="4000000">40 lac</option>
                                    <option value="5000000">50 lac</option>
                                    <option value="6000000">60 lac</option>
                                    <option value="7000000">70 lac</option>
                                    <option value="8000000">80 lac</option>
                                    <option value="9000000">90 lac</option>
                                    <option value="10000000">1 Cr</option>
                                    <option value="20000000">2 Cr</option>
                                    <option value="30000000">3 Cr</option>
                                    <option value="40000000">4 Cr</option>
                                    <option value="50000000">5 Cr</option>
                                    <option value="60000000">6 Cr</option>
                                    <option value="70000000">7 Cr</option>
                                    <option value="80000000">8 Cr</option>
                                    <option value="90000000">9 Cr</option>
                                    <option value="100000000">10 Cr</option>
                                    <option value="150000000">15 Cr</option>
                                    <option value="200000000">20 Cr</option>
                                </select>
                            </div>
                            <div class="box">
                                <p>Maximum Budget <span>*</span></p>
                                <select name="maximum" class="input" required>
                                    <option value="5000000">5 lac</option>
                                    <option value="1000000">10 lac</option>
                                    <option value="2000000">20 lac</option>
                                    <option value="3000000">30 lac</option>
                                    <option value="4000000">40 lac</option>
                                    <option value="4000000">40 lac</option>
                                    <option value="5000000">50 lac</option>
                                    <option value="6000000">60 lac</option>
                                    <option value="7000000">70 lac</option>
                                    <option value="8000000">80 lac</option>
                                    <option value="9000000">90 lac</option>
                                    <option value="10000000">1 Cr</option>
                                    <option value="20000000">2 Cr</option>
                                    <option value="30000000">3 Cr</option>
                                    <option value="40000000">4 Cr</option>
                                    <option value="50000000">5 Cr</option>
                                    <option value="60000000">6 Cr</option>
                                    <option value="70000000">7 Cr</option>
                                    <option value="80000000">8 Cr</option>
                                    <option value="90000000">9 Cr</option>
                                    <option value="100000000">10 Cr</option>
                                    <option value="150000000">15 Cr</option>
                                    <option value="200000000">20 Cr</option>
                                </select>
                            </div>
                        </div>
                        <Link to="/search" ><input value="search property" name="search" class="btn" /></Link>
                    </form>

                </section>

         </div>
            <section class="services">

                <h1 class="heading">Our Services</h1>

                <div class="flex flex-row items-center justify-around">

                    <div class="flex flex-col items-center cursor-pointer justify-center">
                        <img src={icon1} alt="" />
                        <h3 className='mt-2 font-semibold text-lg'>Buy House</h3>

                    </div>

                    <div class="flex flex-col items-center cursor-pointer justify-center">
                        <img src={icon2} alt="" />
                        <h3 className='mt-2 font-semibold text-lg'>Rent House</h3>

                    </div>

                    <div class="flex flex-col items-center cursor-pointer justify-center">
                        <img src={icon4} alt="" />
                        <h3 className='mt-2 font-semibold text-lg'>Flats and Buildings</h3>

                    </div>

                    <div class="flex flex-col items-center cursor-pointer justify-center">
                        <img src={icon5} alt="" />
                        <h3 className='mt-2 font-semibold text-lg'>Shops and Malls</h3>

                    </div>

                    <div class="flex flex-col items-center cursor-pointer justify-center">
                        <img src={icon6} alt="" />
                        <h3 className='mt-2 font-semibold text-lg'>24/7 Service</h3>

                    </div>

                </div>

            </section>

            <section class="listings mt-5 mb-5">

                <h1 class="heading">Latest listings</h1>

                <div class="box-container">

                    <div class="box">
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                            <img src={house3} alt="" />
                        </div>
                        <h3 class="name">Akshar Society</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
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
                            <img src={house1} alt="" />
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
                            
                            <img src={house2} alt="" />
                        </div>
                        <h3 class="name">Crystal Heights</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Paldi, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>790sqft</span></p>
                        </div>
                        <Link to="/view_property2" class="btn">View Property</Link>
                    </div>

                </div>

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <Link to="/listings" class="inline-btn">view all</Link>
                </div>

            </section>
            <Footer />

        </>
    )
}

export default Home
