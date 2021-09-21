import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1e4448';
      showAlert("Dark Mode has been enabled","success");
      // document.title="TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title="TextUtils - Light Mode"
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />    
          {/* </Route> */}
      {/* </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
