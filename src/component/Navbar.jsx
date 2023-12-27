import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const totacart = useSelector(state =>state.cart)
    return (
        <>
            <div className='container bg-body-tertiary '>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to={'/product'} >Product  {totacart.length}</Link>
                                </li>
                             
                             
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
