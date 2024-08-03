import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Header from "../Template/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
export default function Login(){

    const navigate = useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    
    const handleChange = event => {
        setemail({email:event.target.value})
      }
    
    const handleChange2 = event => {
        setpassword({password:event.target.value})   
    }

    const handleSubmit = event =>{
        event.preventDefault()
     const params={
        'email':email.email,
        'password':password.password
     }
     axios.post('/auth/login/',params).then((res0)=>{
         console.log(res0)
         if("password incorrect" == res0.data){
          window.alert('password incorrect')
        } else{
          axios.get('/auth/get_cookie').then((res)=>{
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            //console.log(localStorage)
            //console.log(res.data)
            navigate("/welcome")
          
          })}
     })      

    }
    const handleGoogleAuth =event =>{

      event.preventDefault()
      try{
      window.open('http://localhost:8000/auth/google', '_blank')

      }catch(error){
        window.alert('error google logi')
      }
    }
    const handleForgotPassword = event =>{
      event.preventDefault()
      navigate("/forgot_password")
      
  }
    return (<div>
     
    <Header></Header>
    <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Login</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div></div></div></section>
          <div className="container">
    <section id="billboard" className="left overflow-hidden bg-light-blue col-md-10">
  <form className="center">
  <h2 className="display-7 text-dark text-uppercase">Login</h2>
  <label for="email">Email:</label>
  <input className="form-control btn-rounded-none" type="email" name="Email" placeholder="Your email address here" onChange={handleChange} /><br></br>
  <label for="lname">Password:</label>
  <input className="form-control btn-rounded-none" type="password" name="Password" placeholder="Your password here" onChange={handleChange2}/><br></br>
  <input type="submit"  className="btn btn-medium btn-normal text-uppercase" value="sign-in" onClick={handleSubmit}/> <br></br>
  <label for="lname">Forget Password click here</label><br></br>
  <input type="submit"  className="btn btn-medium btn-normal text-uppercase" value="forgot password" onClick={handleForgotPassword}/> <br></br>
  <FontAwesomeIcon icon = {faGoogle} size="4x" style={{ marginRight: '10px' , color:'red' ,position:"relative" }}></FontAwesomeIcon>
  <input type="submit"  className="btn btn-medium btn-normal text-uppercase" value="Sign in with Google" onClick={handleGoogleAuth}/> 
  
  
  
  
  
  </form> 
    </section></div></div>)

}