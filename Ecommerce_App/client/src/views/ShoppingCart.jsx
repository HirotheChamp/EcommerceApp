import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
function ShoppingCart() {
    return (

        <><Navbar />
            <div className='container'>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>Roses</td>
                        <td>29.99</td>
                        <td>3
                        <Link to='/update'>Update</Link>
                            <button>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Broses</td>
                        <td>29.99</td>
                        <td>3
                        <Link to='/update'>Update</Link>
                            <button>delete</button>
                        </td>
                    </tr>
                </table>

                <h3>Total: 29.99</h3>
                <button>continue shopping</button>

                <div className='box1'>
                    <div className='shipping'>
                        {/*---------------------- PAYMENT INFO ----------------- */}
                        <h2> Shipping Information</h2>
                        <form action="" method="POST">
                            <div className="input_group">
                                <div className="input_box">
                                    <input type="text" placeholder="Full Name" className="name" />
                                    <i className="fa fa-user icon"></i>
                                </div>
                                <div className="input_box">
                                    <input type="text" placeholder="Name On Card" className="name" />
                                    <i className="fa fa-user icon"></i>
                                </div>
                            </div>
                            <div className="input_group">
                                <div className="input_box">
                                    <input type="text" placeholder="Email" className="name " />
                                    <i className="fa fa-envelope icon"></i>
                                </div>
                            </div>
                            <div className="input_group">
                                <div className="input_box">
                                    <input type="text" placeholder="Address" className="name" />
                                    <i className="fa fa-map-marker icon" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="input_group">
                                <div className="input_box">
                                    <input type="text" placeholder="City" className="name" />
                                    <i className="fa fa-institution icon" ></i>
                                </div>
                            </div>
                            {/* --------------DOB & Gender---------------- */}
                            <div className="input_group">
                                <div className="input_box">
                                    <h4>Date of Birth</h4>
                                    <input type="text" placeholder="DD" className="dob" />
                                    <input type="text" placeholder="MM" className="dob" />
                                    <input type="text" placeholder="YYYY" className="dob" />
                                </div>
                                <div className="input_box">
                                    <h4>Gender</h4>
                                    <input type="radio" name="gender" id="b1" className="radio" checked />
                                    <label for="b1">Male</label>
                                    <input type="radio" name="gender" required id="b2" className="radio" />
                                    <label for="b2">Female</label>
                                </div>
                            </div>
                            {/* ---------------------PAYMENT DETAILS--------------------- */}
                            <div className="input_group">
                                <div className="input_box">
                                    <h4>Payment Details</h4>
                                    <input type="radio" name="pay" className="radio" id="bc1" checked />
                                    <label for="bc1"><span>
                                        <i className="fa fa-cc-visa"></i>Credit Card
                                    </span></label>
                                    <input type="radio" name="pay" className="radio" id="bc2" />
                                    <label for="bc2"><span>
                                        <i className="fa fa-cc-paypal"></i>Paypal
                                    </span></label>
                                </div>
                            </div>
                            <div className="input_group">
                                <div className="input_box">
                                    <input type="tel" className="name" placeholder="Card Number 1111-2222-3333-4444" requried />
                                    <i className="fa fa-credit-card icon"></i>
                                </div>
                            </div>
                            <div>
                                <div className="input_group">
                                    <div className="input_box">
                                        <input type="tel" className="name" placeholder="Card CVC 632" requried />
                                        <i className="fa fa-credit-card icon"></i>
                                    </div>
                                </div>
                                <div className="input_group">
                                    <div className="input_box">
                                        <input type="tel" className="name" placeholder="Exp Month" requried />
                                        <i className="fa fa-calendar icon"></i>
                                    </div>
                                </div>
                                <div className="input_group">
                                    <div className="input_box">
                                        <input type="tel" className="name" placeholder="Exp Year" requried />
                                        <i className="fa fa-calendar-o icon"></i>
                                    </div>
                                </div>
                                <div className="input_group">
                                    <div className="input_box">
                                        <input type="tel" className="name" placeholder="Enter Amount" requried />
                                        <i className="fa fa-money icon"></i>
                                    </div>
                                </div>
                                <div className="input_group">
                                    <div className="input_box">
                                        <button type="submit">Pay Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div><Footer />
                </div>
            </div>
        </>
    )
}


export default ShoppingCart;