import React from 'react'

function Navbar() {
  return (
    <><nav className="navbar">



          <div className="navbar-brand2">
              <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>


              <a className="nav-link" href="#">Orders</a>


              <a className="nav-link " href="#">Profile</a>

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


              <a href="/login"><i className="" style={{ color: "black", fontSize: "20px" }}></i></a>
          </div>
      </nav><hr></hr></>
  )
}

export default Navbar;