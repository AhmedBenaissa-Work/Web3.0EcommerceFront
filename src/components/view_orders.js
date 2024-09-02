import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode' 
import Header from "../Template/header";

import MetaMaskAccounts from "./list_metamask_accounts";
import Crypto from "./crypto_wallet";
import Paypal from "./paypal";
import PaymentMethodsModal from "./ModalPayment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal, faOpencart } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
export default function View_Orders(){
    const [Orders,setOrders]=useState([])
    const [price,setPrice]=useState(0)
    const [quantity,setQuantity]=useState(0)
    const [id,setId]=useState()
    const [selectedItem, setSelectedItem] = useState(null);

    const onSelect = (item) => {

      console.log(item)
      setSelectedItem(item);
      setQuantity({quantity:item.quantity})
      setPrice(item.price)
      setId(item.product_id)
      console.log(quantity,id)
      const token = localStorage.token;
        const user = jwtDecode(token)
       // console.log(user)
        const headers = {
          "authorization":token
        }
      axios.post('/products/'+item.product_id,{},{headers:headers}).then((res1)=>{
        console.log(res1.data[0].price)
        setPrice(res1.data[0].price)
        console.log(price)
    })
    }   
   useEffect(()=>{

        const token = localStorage.token;
        const user = jwtDecode(token)
        console.log(user)
        const headers = {
          "authorization":token
        }
        axios.post("/orders/view_orders",{},{headers:headers}).then((res)=>{
               setOrders(res.data)
               console.log(res.data)
        })
    },[])

    return (
        <div>
        <Header></Header>
        <div className="container">
          <h2>Basic Table</h2>
          <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
       <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Your Orders</h2>
            <div className="btn-right">
              <a href="/welcome" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              <a href="/payments" className="btn btn-medium btn-normal text-uppercase">See your Payment transactions</a>
            </div>
          </div></div></div></section>            
          <table className="table">
            <thead>
              <tr>
                
                <th>product_id</th>
                <th>Order Date</th>
                <th>Shipment Address</th>
                <th>Quantity</th>
                <th>Status</th>
                
              </tr>
            </thead>
            <tbody>
              {Orders.map((item, index) => (
                <tr key={item.product_id}
                
                
                >
               
                  <td><a href={"/product/"+item.product_id}>view Product Details</a></td>
                  <td>{item.timestamp}</td>
                  <td>{item.shipment_address}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td> 

                  <input
                  type="radio"
                  checked={selectedItem === item}
                  onChange={() => onSelect(item)}
                />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="box">
      <h1>Choose Payment Method</h1>
              <p>Choose metamask Account</p>
              <MetaMaskAccounts value={price}></MetaMaskAccounts>
                    <p>Choose Paypal</p>
                    <Paypal value={price} product_id={id} quantity={quantity}></Paypal>
                    <p>Choose Credit Card</p>
                    <Link to={`/card/${price*quantity.quantity}`}><FontAwesomeIcon icon={faCcVisa} size="4x" style={{ marginRight: '10px' }} /></Link>
                    <p>Pay with metamask wallet</p>
                    <Crypto value={price} quantity={quantity} product_id={id} ></Crypto> </div>
      
      </div>
        
      );
} 