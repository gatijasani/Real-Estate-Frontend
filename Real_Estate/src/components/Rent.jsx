import React from 'react'
import Nav from './Nav'
import cafe1 from './img/cafe1.jpg'
import res from './img/res.jfif'
import shop from './img/shop.jpg'
import studio from './img/studio.webp'
import hall1 from './img/hall1.jpg'
import office4 from './img/office4.jpg'
import rent1 from './img/rent1.jpg'
import rent2 from './img/rent2.webp'
import rent3 from './img/rent3.jpg'
import rent4 from './img/rent4.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Rent = () => {
    document.title = "Buy";
    return (
        <>
           <Nav />
           <br></br>
           <section class="listings">
            <div class="box-container">

                
            <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Studio Apartment</span></p>
                           <p><i class="text-xl font-bold"></i><span>24000</span></p>
                          
                           <img src={rent1} alt="" />
                       </div>
                       <h3 class="name">Aqua Heights</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Sanand, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>1</span></p>
                           <p><i class="fas fa-bed"></i><span>2</span></p>
                           <p><i class="fas fa-maximize"></i><span>650sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>18000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Apartment</span></p>
                          
                           <img src={rent2} alt="" />
                       </div>
                       <h3 class="name">Rose Apartments</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Vastral, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>2</span></p>
                           <p><i class="fas fa-bed"></i><span>2</span></p>
                           <p><i class="fas fa-maximize"></i><span>450sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>35000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={rent3} alt="" />
                       </div>
                       <h3 class="name">Jal Society</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Bopal, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>3</span></p>
                           <p><i class="fas fa-bed"></i><span>4</span></p>
                           <p><i class="fas fa-maximize"></i><span>1050sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>45000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>3</span></p>
                           <p class="type"><span>House</span></p>
                          
                           <img src={rent4} alt="" />
                       </div>
                       <h3 class="name">Shyam Residency</h3>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Gota, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-bath"></i><span>3</span></p>
                           <p><i class="fas fa-bed"></i><span>2</span></p>
                           <p><i class="fas fa-maximize"></i><span>550sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>38000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

            <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Studio</span></p>
                          
                           <img src={studio} alt="" />
                       </div>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Maninagar, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-toilet"></i><span>1</span></p>
                           <p><i class="fas fa-maximize"></i><span>550sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>19000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

                   <div class="box">
                       
                       <div class="thumb">
                           <p class="total-images"><i class="far fa-image"></i><span>2</span></p>
                           <p class="type"><span>Hall</span></p>
                          
                           <img src={hall1} alt="" />
                       </div>
                       <p class="location"><i class="fas fa-map-marker-alt"></i><span>Nikol, Ahmedabad</span></p>
                       <div class="flex">
                           <p><i class="fas fa-toilet"></i><span>2</span></p>
                           <p><i class="fas fa-maximize"></i><span>550sqft</span></p>
                           <p><i class="fas fa-rupee"></i><span>22000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

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
                           <p><i class="fas fa-rupee"></i><span>23000</span></p>
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
                           <p><i class="fas fa-rupee"></i><span>32000</span></p>
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
                           <p><i class="fas fa-rupee"></i><span>25000</span></p>
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
                           <p><i class="fas fa-rupee"></i><span>26000</span></p>
                       </div>
                       <Link to="/#" class="btn">View Property</Link>
                   </div>

            </div>
            </section>
           <Footer />
           </>
    )
}

export default Rent