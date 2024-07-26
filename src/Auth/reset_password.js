import { useState,useEffect,useLocation } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { jwtDecode } from 'jwt-decode' 
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
    <form>
    
    <label for="lname">Password:</label>
    <input type="password" id="password" name="password" onChange={handleChange2}/>
    <input type="submit" value="sign-in" onClick={handleSubmit}/> 
    
    </form> 
      </div>)
}