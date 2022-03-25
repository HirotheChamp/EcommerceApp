import React, {  Component } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Main() {

return (
    <><Navbar/>
    <div className="container">
            <div className="row mt-5">

                <div className="col">
                
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body">
                            <input type="search" placeholder="search product" id="search" />
                            <input type="submit" value="search" id="search-btn" />
                            <hr></hr>
                            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>T-shirts</a></li>
                            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Shoes</a></li>
                            <li><a href="#" style={{ textDecoration: "none", color: "black" }}>Cups</a></li>

                        </div>
                    </div>

                </div>


                <div className="card mt-5" style={{ width: "50rem" }}>

                    <div className="card mt-5" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Blackbelt</h5>

                            <p className="card-text">19.99</p>
                        </div>
                    </div>
                    <div className="card mt-5" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Blackbelt</h5>

                            <p className="card-text">19.99</p>
                        </div>
                    </div>



                </div>
            </div>
        </div><Footer /></>

            );
          
}                                    


export default Main;