import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Crypto from './components/crypto_wallet';
import Test from './components/test_crypto';
import Login from './Auth/login';
import Register from './Auth/sign_up';
import ConfirmAccount from './Auth/confirm_account';
import Forgot_password from './Auth/forgot_password';
import ResetPassword from './Auth/reset_password';
import CreditCard from './components/CreditCards';
import MetaMaskAccounts from './components/list_metamask_accounts';
import Welcome from './components/welcomePage';
import PlaceOrder from './components/order_product';
import View_Orders from './components/view_orders';
import ProductDetails from './components/ProductDetails';
import PayWithCreditCard from './components/PayWithCreditCard';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/crypto" element={<Crypto/>} />
    <Route exact path="/test" element={<Test/>}/>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/sign_up" element={<Register/>} />
    <Route exact path="/confirm" element={<ConfirmAccount/>} />
    <Route exact path='/forgot_password' element={<Forgot_password/>}/>
    <Route exact path='/reset_password' element={<ResetPassword/>}/>
    <Route exact path="/card" element={<CreditCard/>}/>
    <Route exact path="/testmetamask" element={<MetaMaskAccounts/>} />
    <Route exact path="/welcome" element={<Welcome/>} />
    <Route exact path="/order/:id" element={< PlaceOrder/>} />
    <Route exact path="/orders" element={< View_Orders/>} />
    <Route exact path="/product/:id" element={< ProductDetails/>} />
    
    <Route exact path="/card/:amount"
          element={<PayWithCreditCard/>}
        />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
