import { useState,useEffect,useLocation } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
export default function ConfirmAccount(){

    const [token, setToken] = useState('');
  

  useEffect(() => {
    const getTokenFromQueryString = () => {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get('q');
    };

    const tokenFromQuery = getTokenFromQueryString();
    if (tokenFromQuery) {
      setToken(tokenFromQuery);
      console.log(tokenFromQuery)
      localStorage.setItem('token',tokenFromQuery)
    }
  }, [window.location.search]);

}