import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [token, setToken] = useState('')

  const getToken = async () => {

    const url_api = "https://pruebasruesapi.rues.org.co/token";
    const urlEncoded = "grant_type=password&username=SIIUser&password=Webapi2017*";
    const resp = await axios.post(url_api, urlEncoded, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    console.log("getToken ============================>", resp);
    setToken(resp);
    
  }



  useEffect(() => {
  getToken();
}, []);



return (
  <div className="App">

    <h2>React App</h2>
    <h2>Guillermo Guzman </h2>
    <h2>{JSON.stringify(token)}</h2>
  </div>




)
}

export default App
