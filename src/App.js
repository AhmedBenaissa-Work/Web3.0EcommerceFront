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
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
