import axios from 'axios';
import React, { useEffect, useState} from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Main() {
const [products, setProducts] = useState(null)

useEffect(() =>{
    axios.get('http://localhost:8000/api/product/')
    .then(res=>setProducts(res.data))
    .catch(err=>console.error(err))
});


return (
    <><Navbar/>
    <div className="container">
    <table>
        
        <tbody>
            {   products && products.map((product, i)=>(
                <tr className='key' key={product._id}>
                     <td><img src={product.imageUrl}/></td>
                     
                    <td><p>Name:</p>{product.productName}</td>
                   
                    <td> <p>price:</p>{product.price}</td>
                    {/* <td><Link to={`/productinfo/${product._id}`} className='btn btn-success'>details</Link> </td> */}
                </tr>
               )) 
            }
        </tbody>
</table>
        </div><Footer /></>

            );
          
}                                    


export default Main;