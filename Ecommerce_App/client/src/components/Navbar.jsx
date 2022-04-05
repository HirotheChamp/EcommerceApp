import React from 'react'

function Navbar() {
  return (
    <><nav className="navbar">



          <div className="navbar-brand2">
              <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>


              <a className="nav-link" href="/dashboard">Orders</a>

              <a className="nav-link " href="/addproduct">Sell</a>

              <a className="nav-link " href="/profile">Profile</a>

              <div className="dropdown">
                  <button className="dropbtn">Dropdown
                      <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                  </div>
              </div>
    <div className="cart">
              <a className="active" href="/shoppingcart"><i className="fa fa-fw fa-shopping-cart"></i></a>
              </div>
              <div className="cart">
              <a className="active" href="/login"><i className="fa fa-fw fa-user"></i></a>
              </div>
             
          </div>
      </nav><hr></hr></>
  )
}

export default Navbar;