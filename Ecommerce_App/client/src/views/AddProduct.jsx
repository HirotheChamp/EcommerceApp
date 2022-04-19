
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


function AddProduct() {
    const [products, setProducts] = useState(null)

    // const [refresh, setRefresh] = useState(true)

    useEffect(() => {

        axios.get('http://localhost:8000/api/product/')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err))

    });
    // [refresh]


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {

                // setRefresh(!refresh)
            })
            .catch(err => console.error(err));
    }
    return (

        <><Navbar />
            <div className='container'>
               
              

                <table>
                    <tbody>

                        <tr>
                            <th>Picture</th>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Inventory Count</th>
                            <th>Quantity Sold</th>
                            <th>Action</th>
                        </tr>
                        {products && products.map((product, i) => (
                            <tr className='key' key={product._id} >
                                <td><img src={product.imageUrl}/></td>
                                <td>2</td>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>2 (inventory count)</td>
                                <td>1000 (Quantity sold)</td>
                                <td>
                                <Link to={`/editproduct/${product._id}`}>edit</Link>
                                    <button onClick={() => { deleteProduct(product._id); }} className='close-product delete-button'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to='/createproduct'><button>Add Product</button></Link>
              
            </div><Footer /></>
    )
}

export default AddProduct;