import React from 'react'

function Navbar() {
    return (
        <><nav className="navbar">
            <a className="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a>
            <ul>
                <li><a className="nav-link" href="/dashboard">Orders</a></li>
                <li><a className="nav-link" href="/addproduct">Add Product</a></li>
                <li><a className="nav-link " href="/profile">Profile</a></li>
                <li><a class="active" href="/shoppingcart"><i class="fa fa-fw fa-shopping-cart"></i></a></li>
                <li><a class="active" href="/login"><i class="fa fa-fw fa-user"></i></a></li>
            </ul>
        </nav></>
    )
}
export default Navbar;