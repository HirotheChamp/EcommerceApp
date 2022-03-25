import React from 'react'

function Navbar() {
  return (
    <><nav className="navbar">



          <div className="navbar-brand2">
              <a class="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a>


              <a className="nav-link" href="/dashboard">Orders</a>


              <a className="nav-link " href="/profile">Profile</a>

              <div class="dropdown">
                  <button class="dropbtn">Dropdown
                      <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                  </div>
              </div>
    <div class="cart">
              <a class="active" href="/shoppingcart"><i class="fa fa-fw fa-shopping-cart"></i></a>
              </div>
              <div class="cart">
              <a class="active" href="/login"><i class="fa fa-fw fa-user"></i></a>
              </div>
             
          </div>
      </nav><hr></hr></>
  )
}

export default Navbar;