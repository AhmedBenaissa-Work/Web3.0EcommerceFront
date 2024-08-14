import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Header from "../Template/header";
export default function Register(){
    const [name,setname]=useState("")
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const handleChangeName = event => {
        setname({name:event.target.value})   
    }
    const handleChangeUserName = event => {
        setusername({username:event.target.value})   
    }
    const handleChangeEmail = event => {
        setemail({email:event.target.value})
      }
     
    const handleChangePassword = event => {
        setpassword({password:event.target.value})   
    }
    const handleSubmit = event =>{
        event.preventDefault()
    const params={
        'name':name.name,
        'username':username.username,
        'email':email.email,
        'password':password.password,
        'role':'customer'
     }
    axios.post('/auth/signup/',params).then((res)=>{
         console.log(res)
          axios.post('/auth/confirm_account',{'email':email.email}).then((res)=>{
            console.log(res)
            
          })
     })      
    }
    return (
    <div>
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
    <label for="name">Name:</label>
    <input type="text" className="form-control btn-rounded-none" id="name" name="name" onChange={handleChangeName}/>
    <label for="name">UserName:</label>
    <input type="text" className="form-control btn-rounded-none" id="username" name="username" onChange={handleChangeUserName}/>
  <label for="email">Email:</label>
  <input type="text" className="form-control btn-rounded-none" id="email" name="email" onChange={handleChangeEmail}/>
  <label for="lname">Password:</label>
  <input type="password" id="password" name="password" className="form-control btn-rounded-none" onChange={handleChangePassword}/>
  <input type="submit"  className="btn btn-medium btn-normal text-uppercase" value="Register" onClick={handleSubmit}/> 
  </form>  </section>   
  </div>
    </div>
    )

}