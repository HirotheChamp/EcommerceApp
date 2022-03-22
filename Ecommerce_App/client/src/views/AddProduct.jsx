import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
function AddProduct() {
    return (

        <><Navbar/>
        <div className='container'>
            <input type="search" placeholder="search" id="search" />
            <button>Add New Product</button>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Inventory Count</th>
                    <th>Quantity Sold</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td><img src=''></img></td>
                    <td>2</td>
                    <td>T-shirt</td>
                    <td>2 (inventory count)</td>
                    <td>1000 (Quantity sold)</td>
                    <td>
                        <Link to='/edit'>Edit</Link>
                        <button>delete</button>
                    </td>
                </tr>
                <tr>
                    <td><img src=''></img></td>
                    <td>2</td>
                    <td>T-shirt</td>
                    <td>2 (inventory count)</td>
                    <td>1000 (Quantity sold)</td>
                    <td>
                        <Link to='/edit'>Edit</Link>
                        <button>delete</button>
                    </td>
                </tr>
            </table>

            <h3>1</h3> | <h3>2</h3> | <h3>3</h3> | <h3>4</h3>
        </div><Footer /></>
    )
}

export default AddProduct;