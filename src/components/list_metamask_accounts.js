import React, { useState, useEffect } from 'react';
import Web3 from "web3";
import Header from '../Template/header';
import '../App.css';
import axios from 'axios';

const MetaMaskAccounts = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eth_to_usd,seteth_to_usd]=useState("")
  const [eth_price,seteth_price]=useState("")
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const  OnBuy = (account) =>{
  console.log(account)
  const token = localStorage.token;
   
  const headers = {
    "authorization":token
  }
  const params={
    "sender":account,
    "receiver":"0x20d113611E7157611E1a4AeFA76c4d4370C9F3bC",
    "amount":props.value/3345.66 //for now but until then integrate a web service that can convert usd to eth
  }

   axios.post('/payment/crypto_transaction',params,{headers:headers}).then((res)=>{
    console.log(res)
   })

  } 
  useEffect(() => {
    const loadAccounts = async () => {
      axios.get("/exchange/").then((res)=>{

        console.log(res)
        setcoins(res.data)
       // setUser(res.data)
    })
    axios.get("/exchange/ETH_to_USD").then((res)=>{
  
      console.log(res)
      
      seteth_to_usd((res.data))
     // setUser(res.data)
     console.log((res.data))
     console.log(eth_to_usd)
     seteth_price(eth_to_usd.replace(",", ".").substring(1, 6)+eth_to_usd.replace(",", ".").substring(7,9))
     console.log(eth_price)
  },[eth_to_usd])
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Create an ethers provider
         // const provider = new ethers.providers.Web3Provider(window.ethereum);

          // Get list of accounts
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Create a Web3 instance
          const web3 = new Web3(window.ethereum);

          // Get list of accounts
          const accounts = await web3.eth.getAccounts();
          console.log(accounts)
          setAccounts(accounts);
        } else {
          setError('MetaMask is not installed.');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    loadAccounts();
  }, []);

  return (
    <div>
      
      <button id="openModalBtn" className="btn btn-medium btn-normal text-uppercase" onClick={openModal}>Open MetaMask wallet</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Crypto Payment 🦊</h2>
            <p>Accounts</p>
            <ul>
        {accounts.map((account, index) => (<div>
          <li key={index} >{account}</li>
          <button id="openModalBtn" className="btn btn-medium btn-normal text-uppercase" onClick={() => OnBuy(account)}>Buy</button></div>
        ))}
      </ul>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default MetaMaskAccounts;
