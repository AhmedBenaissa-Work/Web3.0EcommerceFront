
import { useState } from "react";
import axios from "axios";
import Header from "../Template/header";

export default function Forgot_password(){
    const [email,setemail]=useState("")
    const handleChange = event => {

        setemail({email:event.target.value})
      }
    
  
    const handleForgotPassword = event =>{
        event.preventDefault()
        axios.post("/auth/forgot_password",{'email':email.email}).then((res)=>{
            console.log(res)
        })
    
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
          <section id="billboard" className="center overflow-hidden bg-light-blue col-md-5">
        <form className="center">
  <h2 className="display-7 text-dark text-uppercase">Forgot_password</h2>
  <label for="email">Email:</label>
  <input className="form-control btn-rounded-none" type="email" name="Email" placeholder="Your email address here" onChange={handleChange} /><br></br>
        
      
        <input type="submit" value="forgot password" onClick={handleForgotPassword}/> 
        </form> </section>
          </div>)
}