import React from 'react'

function Footer() {
  return (
    <div className="page-wrapper">
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>

                    <div className="socials">
                        <a href="#"><i className="fa fa-spotify" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-apple" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-facebook" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-instagram" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-twitter" style={{color: "white", fontSize: "20px"}}></i></a>
                        <a href="#"><i className="fa fa-youtube-play" style={{color: "white", fontSize: "20px"}}></i></a>
                    </div>



                </div>
                <div className="footer-section links">
                    <h2>Contact Us</h2>
                    <div className="contacts">
                        <span><i className="fa fa-phone"></i> &nbsp; 408-888-6532</span>
                        <span><i className="fa fa-envelope"></i> &nbsp; kyleyoungins94@gmail.com</span>
                    </div>


                </div>
                <div className="footer-section contact-form">

                    {/* <li><a href="#" style={{textDecoration: "none", color: "white"}}>Food</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Apparel</a></li> */}
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Miscelaneous</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Need Help?</a></li>
                    <li><a href="#" style={{textDecoration: "none", color: "white"}}>Business</a></li>

                </div>
                <div className="footer-section email-form">
                    <h2>Join our newsletter</h2>
                    <input type="email" placeholder="Enter your email address" id="footer-email"/>
                        <input type="submit" value="Sign Up" id="footer-email-btn"/>
                        </div>

                        <div className="footer-bottom">
                            &copy; EcommerceApp.com | Designed by Kyle Young and Duy Pham
                        </div>
                    </div>
            </div>
            </div>
  )
}

export default Footer