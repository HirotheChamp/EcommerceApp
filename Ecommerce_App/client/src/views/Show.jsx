import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Show() {
  return (
    <><Navbar/>
    <div className='container'>
          <div className='row'>

              <div className='col'>
                  <div className="card" style={{ width: "25rem" }}>
                      <div className="card-body">
                          <h2>Order ID: 1</h2>

                          <h3>Customer Billing</h3>
                          <p>name: bob</p>
                          <p>address: 123 dojo way</p>
                          <p>city: seattle</p>
                          <p>state: wa</p>
                          <p>zip: 90000</p>
                      </div>
                  </div>
              </div>

              <div className='col'>
                  <table>
                      <tr>
                          <th>ID</th>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>

                      </tr>
                      <tr>
                          <td>100</td>
                          <td>Cup</td>
                          <td>9.99</td>
                          <td>2</td>
                          <td>1000$</td>

                      </tr>
                      <tr>
                          <td>100</td>
                          <td>Cup</td>
                          <td>9.99</td>
                          <td>2</td>
                          <td>1000$</td>

                      </tr>
                  </table>

                  <div className="card" style={{ width: "25rem" }}>
                      <div className="card-body">



                          <p>Status: shipped</p>

                      </div>

                      <div className="card" style={{ width: "25rem" }}>
                          <div className="card-body">



                              <p>Sub total: 30.00</p>
                              <p>Shipping: 100$</p>
                              <p>Total Price: 300$</p>

                          </div>
                      </div>
                  </div>


              </div>

          </div>
      </div><Footer /></>
  )
}

export default Show;