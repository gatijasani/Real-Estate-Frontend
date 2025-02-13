import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {

  return (
    <>
    <footer id='footer' className="z-20 min-h-32 h-fit py-10 px-2 mt-6 bg-black text-white relative text-sm sm-450:text-xl">
        <div className="flex justify-around items-center w-full">
            <div>
                <h2 style={{fontSize:"20px"}} className="text-blue-500 sm-450:text-2xl mb-2 font-bold">Useful Links</h2><br></br>
                <ul style={{fontSize:"14px"}} className="mx-5">
                    <li className='cursor-pointer my-2'><Link to={`/`}>Home</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/Buy`}>Buy</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/Rent`}>Rent</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/About`}>About</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/Contact`}>Contact</Link></li>
                    
                   
                </ul>
            </div>
            <div>
                <h2 style={{fontSize:"20px"}} className="text-blue-500 text-lg sm-450:text-2xl font-bold text-right md:text-left">Contact Us</h2>
                <ul style={{fontSize:"14px"}} className="mx-5 text-right md:text-left"><br></br>
                    <li className='my-2' ><i class="fas fa-phone me-3"></i> 7023672100</li>
                    <li className='my-2' ><i class="fas fa-phone me-3"></i> 9458340172</li>
                    <li className='my-2' ><i class="fas fa-envelope me-3"></i> estate3@gmail.com</li>
                    <li className='my-2' ><i class="fas fa-home me-3"></i> Ahmedabad, India-380050</li>
                </ul>
            </div>
            <div>
                <h2 style={{fontSize:"20px"}} className="text-blue-500 text-lg sm-450:text-2xl font-bold">Social Media Handles</h2>
                <ul style={{fontSize:"14px"}} className="mx-5 "><br></br>
                    <li className='cursor-pointer my-2'><Link to={`/`}><i class="fab fa-facebook-f"></i>  Facebook</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/About`}><i class="fab fa-twitter"></i> Twitter</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/Menu`}><i class="fab fa-linkedin"></i> Linkedin</Link></li>
                    <li className='cursor-pointer my-2'><Link to={`/Menu`}><i class="fab fa-instagram"></i> Instagram</Link></li>
                </ul>
            </div>
        </div>
        <br></br>
        <h6 className="text-center italic m-auto text-2xl">@Copyright reserved</h6>
    </footer>
    </>
  )
}
