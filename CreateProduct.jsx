import React, {useState} from 'react'
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
            productName, imageUrl, description,category
        })
            .then(res=> console.log(res))
            .catch(err=>{ 
                 const errResponse = err.response.data.errors 
                 let tempArr = []
                 for (const key of Object.keys(errResponse)){
                     tempArr.push(errResponse[key].message)
                }
                 setErrArray(tempArr)
               
    })
}
    return (
        <><Navbar/>
        <div className='container'>
        <h1> Create Product</h1>
            <form id='form' onSubmit={onSubmitHandler}>
            
            
                <label>Name
                <input type="text" id='productName' onChange={(e)=>setProductName(e.target.value)}/>
                </label>
                <label>Description
                <textarea name="Text1" cols="40" rows="5" onChange={(e)=>setDescription(e.target.value)}/>
                </label>
            {/* <div>
                <label htmlFor="cars">Categories:</label><br />

                <select name="shirts" id="shirts">
                    <option value="Hat">Hat</option>
                    <option value="saab">Mug</option>
                    <option value="keychain">Key Chain</option>
                    <option value="audi">Audi</option>
                </select>

            </div> */}

           
                <label>or add a new category
                <input type="text" id='category' onChange={(e)=>setCategory(e.target.value)} />
                </label>
            
                <label>Images
                <input type="text" id='imageUrl' onChange={(e)=>setImageUrl(e.target.value)}/>
                </label> 
                {/* <button>upload</button> */}

          
            {/* <div>
                <img src=''>

                </img>

                <button>delete image</button>
                <input type="checkbox" id="imageconfirm" name="imageconfirm"
                    checked />
                <label for="imageconfirm">Main</label>


            </div> */}


           
            {/* <a href="/addproduct">
        <button className="button" type="button" role="button">Cancel</button>
    </a> */}
                
                
                <button className='add-product' type='submit'>Add to products</button>
           
  
            </form>
             {
     errArray.map((err, i)=>(<p key={i}> {err}</p>))
  } 
        </div><Footer /></>
    )
}

export default CreateProduct