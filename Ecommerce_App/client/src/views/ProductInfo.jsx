import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
function ProductInfo() {
    return (
        <><Navbar/>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <a href='#'>Go Back</a>

                    <h1>Black Belt for Staff</h1>


                </div>
                {/* larger image  */}
                <img src='#'>

                </img>
                {/* smaller images */}
                <img src='#'>

                </img>
                <img src='#'>

                </img>
                <img src='#'>

                </img>





                <div className='col'>
                    <p>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>

                    <select name="price" id="price">
                        <option value="price1">$199.99</option>
                        <option value="price2">$200.99</option>
                        <option value="price3">$400</option>

                    </select>

                </div>
            </div>
            <div className='row'>
                <div className='col'>

                    <h2>Similar Items</h2>
                    {/* smaller images */}
                    <img src='#'>

                    </img>
                    <p>black belt</p>
                    <img src='#'>

                    </img>
                    <p>black belt</p>
                    <img src='#'>

                    </img>
                    <p>black belt</p>
                </div>
            </div>
        </div><Footer /></>
    )
}

export default ProductInfo