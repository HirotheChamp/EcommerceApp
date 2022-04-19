import React from 'react'

function Navbar() {
    return (
        <><nav className="navbar">
            <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
            
            <ul>
            <input type="search" placeholder="search product" id="search" />
                            <input type="submit" value="search" id="search-btn" />
                <li><a className="nav-link" href="/dashboard">Orders</a></li>
                <li><a className="nav-link" href="/addproduct">Add Product</a></li>
                <li><a className="nav-link " href="/profile">Profile</a></li>
                <li><a className="active" href="/shoppingcart"><i className="fa fa-fw fa-shopping-cart"></i></a></li>
                <li><a className="active" href="/login"><i className="fa fa-fw fa-user"></i></a></li>
            </ul>
        </nav></>
    )
}
export default Navbar;