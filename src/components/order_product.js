import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Header from "../Template/header";
import axios from "axios";
import { jwtDecode } from 'jwt-decode' 
import MetaMaskAccounts from "./list_metamask_accounts";
import Crypto from "./crypto_wallet";
import Paypal from "./paypal";
import PaymentMethodsModal from "./ModalPayment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function PlaceOrder(props){
    const [User,setUser]=useState()
    const [Products,setProducts]=useState([])
    let {id}=useParams()
    console.log(id)
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
    
    const handleChange = event => {
        setaddress({address:event.target.value})
      }
    
    const onOrder = event => {

        event.preventDefault()
        const token = localStorage.token;
        const user = jwtDecode(token)
        console.log(user)
       
        const headers = {
          "authorization":token
        }
        const BodyParams={
            'product_id':id,
            'shipment_address':address.address
        }
        axios.post('/orders/place_order',BodyParams,{headers:headers}).then((res)=>{
            console.log(res)
            axios.post('/products/decrease/'+id,{},{headers:headers}).then((res)=>{
              console.log(res)
            })
        })
    }

    useEffect(()=>{

        const token = localStorage.token;
        const user = jwtDecode(token)
        console.log(user)
        const email=user.email
        const headers = {
          "authorization":token
        }
        console.log(headers)
        axios.post('/auth/get_user_data',{},{headers:headers}).then((res)=>{

            console.log(res)
            setUser(res.data)
        })
        
        axios.post('/products/'+id,{},{headers:headers}).then((res1)=>{
            console.log(res1)
            setProducts(res1.data)
            const dataToPass = {
              price: res1.data[0].price,
              
              ...props.additionalProps // If you have additional props to pass
            };
        })
    },[])
   
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
          {User !== undefined ? <h2>Welcome {User.name}</h2> : <p></p>}
          <br></br>
          <section id="billboard" class="position-relative overflow-hidden bg-light-blue">

          </section>
          <section id="mobile-products" class="product-store position-relative  ">
      <div class="container">
        <div class="row">
          
          <div>
            <div >
            <div >
   { Products !== undefined ?  <div> {Products.map(product => (
        <div className="card" key={product._id}>
        <div className="product-card position-relative">
          <div class="image-holder">
                    <img src={product.img}  width="250px" height='200px' alt="product-item" class="img-fluid"/>
                  </div>
          <div className="cart-concern position-absolute">
            <div className="cart-button d-flex">
              <input type='submit' onClick={onOrder} className="btn btn-medium btn-black" value="order"/>
              
                <svg className="cart-outline">
                  
                </svg>
              
            </div>
          </div>
          <div className="card-detail">
            <h3 className="card-title text-uppercase">
              <a href="#">{product.name}</a>
            </h3>
            <span className="text-primary">{product.price}$</span>
           
          </div>
        </div>
        <form className="center">
          <h2 className="display-7 text-dark text-uppercase">Choose Shipment Address</h2>
          <label for="email">Address</label>
          <input className="form-control btn-rounded-none" type="address" name="Address" placeholder="Your  address here" onChange={handleChange} /><br></br></form>
        <div className="box">
      <h1>Choose Payment Method</h1>
              <p>Choose metamask Account</p>
              <MetaMaskAccounts value={Products[0].price}></MetaMaskAccounts>
                    <p>Choose Paypal</p>
                    <Paypal value={Products[0].price}></Paypal>
                    <p>Choose Credit Card</p>
                    <Link to={`/card/${Products[0].price}`}><FontAwesomeIcon icon={faCcVisa} size="4x" style={{ marginRight: '10px' }} /></Link>
                    <p>Pay with metamask wallet</p>
                    <Crypto value={Products[0].price}></Crypto> </div>
                    
       
      
     
      </div> ))}
      

      
      </div> : <p></p>
                    
                    }
      

      </div>
              
              </div>
              <div class="swiper-pagination position-absolute text-center"></div></div></div></div>
            </section>
         
             
               </div>
)
}