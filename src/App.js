import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Crypto from './components/crypto_wallet';
import Test from './components/test_crypto';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/crypto" element={<Crypto/>} />
    <Route exact path="/test" element={<Test/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
