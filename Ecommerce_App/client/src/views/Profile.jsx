import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
function Profile() {
  return (
    <><Navbar />
    <div className="container">
          <div className="row">

              <div className="col">
                  <div className="card" style="width: 25rem;">
                      <div className="card-body">
                          <div className="container">
                              <div className="picture-container">
                                  <div className="picture">
                                      <img
                                          src="https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no"
                                          class="picture-src" id="wizardPicturePreview" title="" /> <input
                                          type="file" id="wizard-picture" class="" />
                                  </div>
                                  <p className="profile-pic">Choose Profile Picture</p>



                                  <hr></hr>

                              </div>
                          </div>
                      </div>

                  </div>




                  <div className="card" style="width: 25rem;">
                      <div className="card-body">
                          <h5 className="card-title">Description</h5>

                          <p className="card-text">Hello! My name is Jane Doe and I am here
                              to help you walk your dogs after a long day! I've been walking
                              dogs since a young age and have become to enjoy it as a side
                              hobby. if you are willing enough, I would love to take your dog
                              for a walk.</p>

                          <hr></hr>

                          <h5 className="card-title">Languages</h5>

                          <ul>
                              <li>English</li>
                              <li>Spanish</li>

                          </ul>

                          <hr></hr>

                          <h5 className="card-title">Skills</h5>

                          <ul>
                              <li>Can build a website from scratch</li>
                              <li>Can do mental math</li>

                          </ul>

                          <hr></hr>

                          <h5 className="card-title">Education</h5>

                          <p className="card-text">San Francisco State University</p>



                      </div>


                  </div>



              </div>


              <div className="col">
                  <div className="card" style="width: 45rem;">
                      <div className="card-body">
                          <h5 className="card-title">Reviews as Buyer</h5>

                          <ul>
                              <li>This product is awesome!</li>
                              <li>I didnt like this product</li>

                          </ul>

                      </div>

                  </div>

              </div>
          </div>
      </div>
      <Footer /></>
  )
}

export default Profile