import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Crypto from './crypto_wallet';
import MetaMaskAccounts  from './list_metamask_accounts';
import Paypal from './paypal';
function PaymentMethodsModal({ show, handleClose ,price}) {
    console.log("here"+price)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Methods</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="payment-method">
          <h5>Credit Card</h5>
          <p>Visa, MasterCard, American Express</p>
        </div>
        <div className="payment-method">
          <h5>PayPal</h5>
          <p>Use your PayPal account</p>
        </div>
        <div className="payment-method">
          <h5>Crypto</h5>
          <p>Pay with Crypto</p>
          <Crypto value={price}></Crypto> 
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentMethodsModal;
