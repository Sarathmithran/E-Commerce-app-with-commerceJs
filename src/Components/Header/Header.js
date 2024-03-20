import { NavLink } from 'react-router-dom';
import './Header.css';
import mainlogo from './Images/pngaaa.com-8324834.png'
import { useState } from 'react';

const Header = ({searchTextCB , cartProducts}) => {

    function searchText($event){
        searchTextCB($event.target.value);
    }

    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-sty" style={{minHeight:80}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={mainlogo} className='main-logo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ps-5 search-box" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchText}/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-5">
                            <NavLink to={'/'} className="nav-link fw-bold" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item ps-4">
                            <NavLink to={'/Products'} className="nav-link fw-bold">Products</NavLink>
                            </li>
                            <li className="nav-item ps-4">
                            <NavLink to={'/Contact'} className="nav-link fw-bold">Contact Us</NavLink>
                            </li>
                            <li className="nav-item ps-4">
                            <NavLink to={'/About'} className="nav-link fw-bold">About Us</NavLink>
                            </li>
                            <li className="nav-item ps-4">
                            <NavLink to={'/Cart'} className="nav-link fw-bold" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 16 17"
                                    >
                                    <path d={"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"} />
                                </svg>
                                {
                                    //number of items in cart
                                    cartProducts.total_unique_items > '' && (
                                        <span className="bg-danger rounded-circle mt-5 cart-icon">
                                            {cartProducts.total_unique_items}
                                        </span>
                                    )}    
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Header;