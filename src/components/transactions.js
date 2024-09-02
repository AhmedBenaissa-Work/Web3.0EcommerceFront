import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode' 
import Header from "../Template/header";
export default function Transactions(){
    const [Orders,setOrders]=useState([])
   useEffect(()=>{

        const token = localStorage.token;
        const user = jwtDecode(token)
        console.log(user)
       
        const headers = {
          "authorization":token
        }
        axios.post("/payment/transactions",{},{headers:headers}).then((res)=>{
               setOrders(res.data)
        })
    })
    return (
        <div>
        <Header></Header>
        <div className="container">
          <h2>Basic Table</h2>
          <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
       <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Your Payment Transactions</h2>
            <div className="btn-right">
              <a href="/welcome" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              <a href="/payments" className="btn btn-medium btn-normal text-uppercase">See your Payment transactions</a>
            </div>
          </div></div></div></section>            
          <table className="table">
            <thead>
              <tr>
                
                <th>product_id</th>
                <th>Payment Date</th>
                <th>amount</th>
                <th>payment method</th>
              </tr>
            </thead>
            <tbody>
              {Orders.map((item, index) => (
                <tr key={index}>
                  <td><a href={"/product/"+item.product_id}>view Product Details</a></td>
                  <td>{item.timestamp}</td>
                  <td>{item.amount}</td>
                  <td>{item.payment_method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      );
} 