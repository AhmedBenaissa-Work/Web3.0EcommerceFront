import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
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
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" onChange={handleChangeName}/>
    <label for="name">UserName:</label>
    <input type="text" id="username" name="username" onChange={handleChangeUserName}/>
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" onChange={handleChangeEmail}/>
  <label for="lname">Password:</label>
  <input type="password" id="password" name="password" onChange={handleChangePassword}/>
  <input type="submit" value="sign-in" onClick={handleSubmit}/> 
  </form>     
    </div>
    )

}