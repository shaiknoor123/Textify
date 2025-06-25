import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import About from './components/About'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    });
  setTimeout(() => {
    setalert(null);
  }, 1500);

  }

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#E0E0E0';
      showAlert("Dark Mode is Enabled","success")
      document.title="Textify-Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is Enabled","success")
      document.title="Textify-Light Mode"
    }
  };

  return (
    <>
      
      <NavBar title="Textify" home="Home" about="About Us" mode={mode} toggle={toggle} />
      <div className="container">
        <Alert alert={alert}/>
          
      
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />

        
        
      
    
        
      </div>
    
    </>
  );
}

export default App;
                                                                                                         