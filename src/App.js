import './App.css';
import Navbar from './components/Navbar';
import Contactform from './components/Contactform';
// import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode]=useState('light'); //whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    
<Navbar title="Blog" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <Contactform heading="Write your content here..."/>
  {/* <About/> */}
</div>


    </>
  );
}

export default App;
