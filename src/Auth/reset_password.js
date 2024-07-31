import { useState,useEffect,useLocation } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { jwtDecode } from 'jwt-decode' 
import Header from "../Template/header";
export default function ResetPassword(){

    const [password,setpassword]=useState("")
    const [token, setToken] = useState('');
    const handleChange2 = event => {
        setpassword({password:event.target.value})   
    }

const handleSubmit = event => {
    event.preventDefault()
    const getTokenFromQueryString = () => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get('q');
    };

    const tokenFromQuery = getTokenFromQueryString();
    if (tokenFromQuery) {
      setToken(tokenFromQuery);
      console.log(tokenFromQuery)
      const token = tokenFromQuery;
      const user = jwtDecode(token)
      console.log(user)
      const email=user.email
      const headers = {
        "authorization":tokenFromQuery
      }
      console.log(headers)
        const params={
            'email':email,'password':password.password
        }
        console.log(password.password)
        //reset_password_first then login
        axios.put("/auth/set_password",{'password':password.password},{headers:headers}).then((res0)=>{console.log(res0)
        axios.post('/auth/login/',params).then((res)=>{
         console.log(res)
         axios.get('/auth/get_cookie').then((res1)=>{
           console.log(res1.data.token)
           localStorage.setItem('token',res1.data.token)
           console.log(localStorage)
        })
    })   })
}}
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
  <h2 className="display-7 text-dark text-uppercase">Reset_password</h2>
    
    
    <label for="lname">Password:</label>
    <input className="form-control btn-rounded-none" type="password" id="password" name="password" onChange={handleChange2}/>
    <input type="submit" className="btn btn-medium btn-normal text-uppercase" value="change password" onClick={handleSubmit}/> 
    
    </form> </section>
      </div>)
}