import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


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
  return (
    <>
    
<Navbar title="Blog" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>  
<div className="container my-3">
  <Contactform heading="Write your content here..." showAlert={showAlert}   mode={mode}/>
  {/* <About/> */}
</div>


    </>
  );
}

export default App;
