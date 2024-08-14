
import { useState } from "react";
import axios from "axios";
import Header from "../Template/header";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={5} style={{
    width:'20%',position: "absolute",textAlign:"center","top":"50%","left":"50%","right":"50%",bottom:"50%",height:"10%"
  }}
      variant="filled" {...props} />;
}

export default function Forgot_password(){
    const [email,setemail]=useState("")
    const [emailsent,setemailsent]=useState("")
    const handleChange = event => {

        setemail({email:event.target.value})
      }
    
  
    const handleForgotPassword = event =>{
        event.preventDefault()
        axios.post("/auth/forgot_password",{'email':email.email}).then((res)=>{
            console.log(res)
            setemailsent("sent")
            console.log(emailsent)
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
          <div className="container">
          <section id="billboard" className="left overflow-hidden bg-light-blue col-md-10">
          <form className="center">
  <h2 className="display-7 text-dark text-uppercase">Forgot_password</h2>
  <label for="email">Email:</label>
  <input className="form-control btn-rounded-none" type="email" name="Email" placeholder="Your email address here" onChange={handleChange} /><br></br>
        
      
        <input type="submit"  className="btn btn-medium btn-normal text-uppercase"  value="forgot password" onClick={handleForgotPassword}/> 
        </form> </section></div>
        {emailsent !== 'sent' ? <p></p> : <Alert severity="success">Check your inbox 📧</Alert>}
          </div>)
}