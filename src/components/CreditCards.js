import React from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';


import axios from 'axios';
import Header from '../Template/header';
export default class CreditCard extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    email:''
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
   OnRegisterCard = (e) => {
   e.preventDefault()
   //console.log(this.state)
   let creditcard={
    number: this.state.number,
    exp_month: parseInt(this.state.expiry.substring(0,2)),
    exp_year: parseInt(this.state.expiry.substring(2,4)),
    cvc: this.state.cvc,
   }
  
   axios.post('/payment/register_credit_card/'+this.state.name+'/'+this.state.email,creditcard)
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
    console.log(this.state)
  }
  
  render() {
    return (
      <div id="PaymentForm">
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
        <br></br>
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        /><br></br><br></br>
        <form className='position_centered2'>
        	<input
            type="tel"
            variant='outlined'
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          /> <br></br><br></br>
          	<input
            type="tel"
            variant='outlined'
            name="cvc"
            placeholder="cvc"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <br></br><br></br>
          	<input
            type="tel"
            variant='outlined'
            name="expiry"
            placeholder="exp"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
           <br></br><br></br>
          	<input
            type="tel"
            variant='outlined'
            name="name"
            placeholder="name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br></br><br></br>
          	<input
            type="tel"
            variant='outlined'
            name="email"
            placeholder="email"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br></br><br></br>
          <button className='btn btn-dark' onClick={this.OnRegisterCard}>Register Credit Card</button>
        </form>
      </div>
    );
  }
}