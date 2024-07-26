
import { useState } from "react";
import axios from "axios";

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
        <form>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleChange}/>
      
        <input type="submit" value="forgot password" onClick={handleForgotPassword}/> 
        </form> 
          </div>)
}