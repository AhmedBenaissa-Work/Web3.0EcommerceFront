import { useEffect, useState } from "react";
import Crypto from "./crypto_wallet";
import Paypal from "./paypal";
import MetaMaskAccounts from "./list_metamask_accounts";
export default function Test(){

    const data=700
    return (
        <div>
            <img src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fpublic-files%2FUntitled-141187335794522b44241a1dace1b016.jpg&width=1920"></img>
            <p>price:700$</p>
            <p>pay with your crypto wallet</p>
            <MetaMaskAccounts value={data}></MetaMaskAccounts>
            <Paypal value={data}></Paypal>
        </div>
    )
}