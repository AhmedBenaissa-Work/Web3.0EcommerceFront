import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
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
     axios.post('/auth/login/',params).then((res)=>{
         console.log(res)
          axios.get('/auth/get_cookie').then((res)=>{
            console.log(res.data.token)
            localStorage.setItem('token',res.data.token)
            console.log(localStorage)
          })
     })      

    }
    return (<div>
  <form>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" onChange={handleChange}/>
  <label for="lname">Password:</label>
  <input type="text" id="password" name="password" onChange={handleChange2}/>
  <input type="submit" value="sign-in" onClick={handleSubmit}/> 
  </form> 
    </div>)

}