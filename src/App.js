import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type  
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);  
  }
  
  

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#1e1a1a";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleRedMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#780404";
      showAlert("Red-Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleBlueMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ="#101e6c";
      showAlert("Blue-Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
<Router>   
<Navbar title="Blog" aboutText="About us" mode={mode} toggleMode={toggleMode} toggleRedMode={toggleRedMode} toggleBlueMode={toggleBlueMode}/>
<Alert alert={alert}/>  
<div className="container my-3">
<Routes>
    <Route path="/about" element={<About mode={mode}/>}/>
      
    <Route path="/" element={<Contactform heading="Write your content here..." showAlert={showAlert}  mode={mode}/>}/>
    
    
</Routes>

</div>
</Router> 

    </>
  );
}

export default App;
