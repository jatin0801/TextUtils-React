//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
//import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light') //wether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils is the best'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now'
      }, 1200);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Navbar title="TextUtils" aboutText="Aboutus"/>*/}
          <Navbar title="TextUtils" about="About me" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className='container my-3'>
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          
              {/* <Routes>
                <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> } />
                <Route path="/about" element={<About/>} />
              </Routes> */}

          </div>
    {/* </BrowserRouter> */}
    </>
  );
}



export default App;

