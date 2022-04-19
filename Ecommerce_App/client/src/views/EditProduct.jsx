import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import axios from 'axios'


function EditProduct() {
    const { id } = useParams();
    const [productName, setProductName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [errArray, setErrArray] = useState([])



  

        useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProductName(res.data.productName);
                setImageUrl(res.data.imageUrl);
                setDescription(res.data.description);
                setCategory(res.data.category);
                setPrice(res.data.price);
               
            })
    }, []);

        const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            productName, imageUrl, description, category, price
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <><Navbar />
            <div className='container3'>
                <div className='admin-product-form-container'>
                <form id='form' onSubmit={updateProduct}>
                <h3> Edit Product</h3>
                        <input  name="productName" type="text"  className='box' onChange={(e) => setProductName(e.target.value)} value={productName} />
                        <textarea  name="description" className='box'onChange={(e) => setDescription(e.target.value)} value={description}/>
                      
                         
                        <input  name="category" className='box'  type="text"  onChange={(e) => setCategory(e.target.value)} value={category} />
                        <input name="imageUrl" className='box' type="text" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
                        <input name="price" className='box'  type="number"  onChange={(e) => setPrice(e.target.value)} value={price}/> 

                       
                    <a href="/addproduct">
                        <button className="button" type="button" role="button">Cancel</button>
                    </a>
                    <button className='add-product' type='submit' >Add to products</button>
                </form>
                {
                    errArray.map((err, i) => (<p key={i}> {err}</p>))
                }
                </div>
            </div><Footer /></>
    )
}

export default EditProduct