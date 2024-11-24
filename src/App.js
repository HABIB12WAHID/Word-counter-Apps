
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="ConstText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="ConstText - Word counter | Character counter | Remove extra spaces | Copy text | Lowercase to Uppercase | Clear text" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
        <footer className="footer bg-dark">
          <p className='text-center text-white p-3 mb-0'>Copyright &copy; 2023. All rights reserved by ConstText. Created by Habib Wahid</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
