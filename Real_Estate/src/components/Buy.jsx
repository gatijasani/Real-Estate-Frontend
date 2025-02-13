import React from 'react'
import Nav from './Nav'
import house1 from "./images/house-img-1.webp";
import house7 from './images/RE1.jpg'
import house9 from './images/RE2.webp'
import house10 from './images/RE3.webp'
import house11 from './images/RE4.jpg'
import house12 from './images/RE5.jpg'
import house13 from './images/RE6.jpg'
import house14 from './images/RE7.webp'
import house15 from './images/RE8.jpg'
import house2 from "./img/5-1.jpg";
import house3 from "./img/1-1.jpg";
import flat1 from './images/flat1.webp'
import flat2 from './images/flat2.jpg'
import flat3 from './images/flat3.jpg'
import flat4 from './images/flat4.jpg'
import flat5 from './images/flat5.webp'
import house5 from "./img/4-1.jpg";
import house16 from './images/slide2.jpg'
import office1 from './img/office1.jpg'
import office2 from './img/office2.jpg'
import office3 from './img/office3.jpeg'
import office4 from './img/office4.jpg'
import office5 from './img/office5.jpg'
import house8 from './images/house-img-4.webp';
import house6 from './images/house-img-6.webp';
import cafe1 from './img/cafe1.jpg'
import res from './img/res.jfif'
import shop from './img/shop.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Buy = () => {
    document.title = "Buy";
    return (
        <>
           <Nav />
           <br></br>
           

            {/* Flats Session */}
            <section class="listings">
            <h1 class="heading">Flats</h1>
            <div class="box-container">

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
                           <p class="type"><span>Flat</span><span>Sale</span></p>
                           
                           <img src={house2} alt=""/>
                       </div>
                       <h3 class="name">Kalash</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Bopal, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>2</span></p>
                           <p><i class="fas fa-bath"></i><span>3</span></p>
                           <p><i class="fas fa-maximize"></i><span>800sqft</span></p>
                       </div>
                       <Link to="/view_property1" class="btn">View Property</Link>
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
                            <p><i class="fas fa-bed"></i><span>2</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>1050sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>8</span></p>
                            <p class="type"><span>Flat</span></p>
                           
                            <img src={flat2} alt="" />
                        </div>
                        <h3 class="name">Aqua Blue</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Isanpur, Ahmeadbad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1265sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>6</span></p>
                            <p class="type"><span>Flat</span></p>
                           
                            <img src={flat3} alt="" />
                        </div>
                        <h3 class="name">Mahadev Heights</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Narol, Ahmeadbad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1450sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
                            <p class="type"><span>Flat</span></p>
                           
                            <img src={flat4} alt="" />
                        </div>
                        <h3 class="name">Lotus</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Naroda, Ahmeadbad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1300sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
                            <p class="type"><span>Flat</span></p>
                           
                            <img src={flat5} alt="" />
                        </div>
                        <h3 class="name">Shubham Pleasure</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>2</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>1050sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

            </div>
            </section>
            <br></br>

            {/* House Session */}
           <section class="listings">
           <h1 class="heading">Houses</h1>
           <div class="box-container">
           <div class="box">
                        
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
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
                            <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                           
                            <img src={house11} alt="" />
                        </div>
                        <h3 class="name">Dev Bunglows</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Express Way, Ahmedabad</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1540sqft</span></p>
                        </div>
                        <Link to="/#" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>6</span></p>
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
                           <p class="total-images"><i class="far fa-image"></i><span>5</span></p>
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
                           <p class="total-images"><i class="far fa-image"></i><span>6</span></p>
                           <p class="type"><span>House</span><span>Sale</span></p>
                          
                           <img src={house7} alt="" />
                       </div>
                       <h3 class="name">Hari Residency</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Gota, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>4</span></p>
                           <p><i class="fas fa-bath"></i><span>5</span></p>
                           <p><i class="fas fa-maximize"></i><span>1240sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>8</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={house12} alt="" />
                       </div>
                       <h3 class="name">Alok Residency</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>3</span></p>
                           <p><i class="fas fa-bath"></i><span>4</span></p>
                           <p><i class="fas fa-maximize"></i><span>1140sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={house13} alt="" />
                       </div>
                       <h3 class="name">Pushpak Bunglows</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Vastral, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>3</span></p>
                           <p><i class="fas fa-bath"></i><span>4</span></p>
                           <p><i class="fas fa-maximize"></i><span>1050sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>7</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={house14} alt="" />
                       </div>
                       <h3 class="name">Chandra Bunglows</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Gota, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>3</span></p>
                           <p><i class="fas fa-bath"></i><span>4</span></p>
                           <p><i class="fas fa-maximize"></i><span>1450sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>6</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={house15} alt="" />
                       </div>
                       <h3 class="name">Om Residency</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Bopal, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>3</span></p>
                           <p><i class="fas fa-bath"></i><span>4</span></p>
                           <p><i class="fas fa-maximize"></i><span>1340sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   
                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>8</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={house16} alt="" />
                       </div>
                       <h3 class="name">Radhe Bunglows</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Naroda, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bed"></i><span>5</span></p>
                           <p><i class="fas fa-bath"></i><span>6</span></p>
                           <p><i class="fas fa-maximize"></i><span>1550sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

           </div>
            </section>
            <br></br>

            {/* Office Session */}
            <section class="listings">
            <h1 class="heading">Offices</h1>
            <div class="box-container">

            <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>office</span></p>
                          
                           <img src={office1} alt="" />
                       </div>
                       <h3 class="name">Raj Complex</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Prahladnagar, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>950sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>office</span></p>
                          
                           <img src={office2} alt="" />
                       </div>
                       <h3 class="name">Nesco Tower</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Sarkhej, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>1100sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>office</span></p>
                          
                           <img src={office3} alt="" />
                       </div>
                       <h3 class="name">Kiran Complex</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Iscon, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>850sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>office</span></p>
                          
                           <img src={office4} alt="" />
                       </div>
                       <h3 class="name">Om Heights</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Narol, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>office</span></p>
                          
                           <img src={office5} alt="" />
                       </div>
                       <h3 class="name">Shilp Industries</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>1050sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   </div>
                   </section>
                   <br></br>

                   {/* Other */}

                   <section class="listings">
            <h1 class="heading">Other</h1>
            <div class="box-container">

            <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Cafe</span></p>
                          
                           <img src={cafe1} alt="" />
                       </div>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Nikol, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-toilet"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>550sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Restaurant</span></p>
                          
                           <img src={res} alt="" />
                       </div>
                       
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Bopal, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-toilet"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Shop</span></p>
                          
                           <img src={shop} alt="" />
                       </div>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-toilet"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>650sqft</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>
                   
            </div>
            </section>
            <Footer />
            </>
    )
}
export default Buy