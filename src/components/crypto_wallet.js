
import web3 from "web3";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
export default function Crypto(props,product_id,quantity)
{

  const [coins,setcoins]=useState([])
  const [eth_to_usd,seteth_to_usd]=useState("")
  const [eth_price,seteth_price]=useState("")
  useEffect(()=>{
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
  })
    console.log(window.ethereum)
    console.log(props)
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts =  window.ethereum.request({ method: 'eth_accounts' });
        const chainId =  window.ethereum.request({ method: 'eth_chainId'});
        // Check if user is connected to Mainnet
        if(chainId != '0x1') {
         console.log("6565656sqdqd")
        } else {
          let wallet = accounts[0];
          console.log(wallet)
        }
      }
    else{
      console.log("error")
    }
  const[user,setUser]=useState("")
  useEffect(()=>{
  console.log("metamask tutorial")    
})
      const [wallet_balance,setWallet_Balance]=useState(0)
      const onBuy=event=>{
        event.preventDefault()
        const price=String((props.value*props.quantity.quantity)/(parseFloat(eth_price)*1000) ) 
        const transactionParameters = {
            
            gasPrice: '10', // customizable by user during MetaMask confirmation.
            gas: '21000', // customizable by user during MetaMask confirmation.
            to: '0x20d113611E7157611E1a4AeFA76c4d4370C9F3bC',
            from: window.ethereum.selectedAddress, // must match user's active address.
            value: parseInt(web3.utils.toWei(price,"ether")).toString(16), // Only required to send ether to the recipient from the initiating external account.
            data:
              '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
          };
          console.log(transactionParameters.value)
          const txHash =  window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
          });
        const balance=window.ethereum.request({
          method : 'eth_getBalance',
          params:[window.ethereum.selectedAddress]          
        })
        console.log(balance.then((res)=>{console.log(parseInt(web3.utils.toHex(res)).toString().substring(0,4))}))
        const token = localStorage.token;
        const user = jwtDecode(token)
        console.log(user)
       
        const headers = {
          "authorization":token
        }
        const payment_details={
          product_id:props.product_id,
          amount:parseFloat(props.value)*parseInt(props.quantity.quantity),
          method:'crypto'                
      }
      axios.post('/payment/save',payment_details,{headers:headers}).then((res)=>{
          console.log(res)})
        //axios.put('/payment/send/'+user+'/'+parseInt(parseInt(web3.utils.toWei("1","ether")).toString())+'/'+transactionParameters.to)
      }
      const connectWallet = async () => {
        // Check if MetaMask is installed on user's browser
        if(window.ethereum) {
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
         const chainId = await window.ethereum.request({ method: 'eth_chainId'});
        } else {
          // Show alert if Ethereum provider is not detected
          alert("Please install Mask");
        }
      }
      const onFundwallet=event=>{
        event.preventDefault()
        const balance=window.ethereum.request({
          method : 'eth_getBalance',
          params:[window.ethereum.selectedAddress]          
        })
        console.log(balance.then((res)=>{console.log(parseInt(web3.utils.toHex(res)).toString().substring(0,4))
           setWallet_Balance(parseInt(parseInt(web3.utils.toHex(res)).toString().substring(0,4)))}))
           
          //axios.put('/payment/fund/'+user+'/'+wallet_balance).then((res)=>{console.log(res)})
      }
    return (<div>
         
         <button  className="btn btn-medium btn-normal text-uppercase"    onClick={onBuy}><img
          src="https://cdn.worldvectorlogo.com/logos/metamask.svg" // Use the URL of the MetaMask logo
          alt="MetaMask"
          style={{ width: '24px', height: '24px', marginRight: '10px' }}
        /></button>
         
    </div>)
}