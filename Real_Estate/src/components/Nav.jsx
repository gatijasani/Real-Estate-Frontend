// Navbar Section
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header className="header">

                <nav className="navbar nav-1">
                    <section className="flex">
                            <ul>
                                <li>
                            <Link to="/home" className="logo"><i className="fas fa-house"></i>MyHome</Link>
                                </li>
                                <li className='hover:text-zinc-700'><Link to="/Buy">Buy</Link>
                                    {/* <ul className='Dropdown' style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}} >
                                        <li><Link to="#">house</Link></li>
                                        <li><Link to="#">flat</Link></li>
                                        <li><Link to="#">shop</Link></li>
                                        <li><Link to="#">ready to move</Link></li>
                                        <li><Link to="#">furnished</Link></li>
                                    </ul> */}
                                </li>
                                
                                <li><Link to="/Rent">Rent</Link>
                                    <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                        
                                    </ul>
                                </li>
                                <li><Link to="#">Help<i className="fas fa-angle-down"></i></Link>
                                    <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                        <li><Link to="/about">About us</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        <ul>
                            <li><Link to="#">account <i className="fas fa-angle-down"></i></Link>
                                <ul className='Dropdown'  style={{boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.1)"}}>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>

            
            </header>

        </>
    )
}

export default Nav
