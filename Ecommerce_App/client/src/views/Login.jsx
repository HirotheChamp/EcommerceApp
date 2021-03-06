import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom'
 import '../static/css/LoginRegistration.css';

const Login = (props) => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState(null)
    
    const { id } = useParams();
    const history = useHistory()
    const [refresh, setRefresh] = useState(true)

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/user/')
    //         .then(res=>{
    //             console.log(res.data)
    //             })
    //         .catch(err => console.error(err))
    // },[refresh]);
    const onSubmitHandler = e => {

        e.preventDefault()

        axios.post('http://localhost:8000/api/user/', {
            userName, email, password
        })
            .then(res=> console.log(res))
            .catch(err=>{ 
                console.log(err)
                // const errResponse = err.response.data.errors 
                // let tempArr = []
                // for (const key of Object.keys(errResponse)){
                //     tempArr.push(errResponse[key].message)
                // }
                // setErrArray(tempArr)

  
        })

    }
    return (
        <><div className='body'>
        <div className="home">
 <a href="/"><i className="fa fa-home"  style={{color: "white", fontSize: "50px"}}></i></a>
 </div>
        <div className="center">
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="txt_field">
                    <input type="text" path="email" required="required" onChange={(e) => setEmail(e.target.value)}  />
                    <span></span>
                    <label path="email">Email</label>
                </div>
               
                <div className="txt_field">
                    <input type="password" path="password" required="required" onChange={(e) => setPassword(e.target.value)} />
                    <span></span>
                    <label path="password">Password</label>
                </div>
                
                <div className="pass">Forgot Password?</div>
                <input type="submit" id="completed" value="Login" />
                <div className="signup_link">
                    Not a member?<Link to="/register">Sign up</Link>
                </div>
            </form>

        </div>
        </div></>
    )





}
export default Login;