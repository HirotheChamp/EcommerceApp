import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import axios from 'axios'

function CreateProduct() {

    const [productName, setProductName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [errArray, setErrArray] = useState([])

    const onSubmitHandler = e => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/product/', {
            productName, imageUrl, description, category
        })
            .then(res => console.log(res))
            .catch(err => {

                const errResponse = err.response.data.errors
                let tempArr = []
                for (const key of Object.keys(errResponse)) {
                    tempArr.push(errResponse[key].message)
                }
                setErrArray(tempArr)

            })
    }
    return (
        <><Navbar />
            <div className='container3'>
                <div className='admin-product-form-container'>
                <form id='form' onSubmit={onSubmitHandler}>
                <h3> Create Product</h3>
                        <input placeholder="Name" type="text" id='productName' className='box' onChange={(e) => setProductName(e.target.value)} />
                        <textarea  placeholder="Description"name="Text1" className='box'onChange={(e) => setDescription(e.target.value)} />
                        <label htmlFor="cars">Categories:</label><br />
                        <select name="shirts" id="shirts">
                            <option value="Hat">Watch</option>
                            <option value="saab">Mug</option>
                            <option value="keychain">Key Chain</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input  className='box' placeholder="Add New Category"type="text" id='category' onChange={(e) => setCategory(e.target.value)} /> 
                        <input className='box' placeholder="Image URL"type="text" id='imageUrl' onChange={(e) => setImageUrl(e.target.value)} />
                    <a href="/addproduct">
                        <button className="button" type="button" role="button">Cancel</button>
                    </a>
                    <button className='add-product' type='submit'>Add to products</button>
                </form>
                {
                    errArray.map((err, i) => (<p key={i}> {err}</p>))
                }
                </div>
            </div><Footer /></>
    )
}

export default CreateProduct