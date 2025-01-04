import './App.css';
import Alert from './Components/Alert';
// import Darkmode from './Components/Darkmode';
//import Background from './Components/Background';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import {  useState } from 'react';

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const Showalert=(msg,type)=>{
   setalert({
    msg:msg,
    type:type
    
   } )
  setTimeout(()=>setalert(null),2000)
  }

  const handledarkmode = () => {
    setmode(mode === "dark" ? "light" : "dark");
    if(mode==="light")
      {
        document.body.style.backgroundColor= "#042743"
        Showalert("Dark Mode Enabled  ","success")
        document.title="Textutils-Dark mode"
      }
      
    else{
      document.body.style.backgroundColor= "white"
      Showalert(" Light Mode Enabled  ","success")
      document.title="Textutils-Light mode"
    }
  };
  const handlegreenmode = () => {
    setmode(mode === "green" ? "light" : "green");
    if(mode==="light")
      {
        document.body.style.backgroundColor= "green"
        Showalert("Dark Mode Enabled  ","success")
      }
      
    else{
      document.body.style.backgroundColor= "white"
      Showalert(" Light Mode Enabled  ","success")
    }
  };

  return (
    <>
    <h1>
      <center><p> YOU LOOOOSER!!🤣🤣🤣🤣😝😜🤪😛</p></center>

    </h1>
      {/* <Navbar 
        title="Adarsh" 
        search="Search" 
        mode={mode} 
        handledarkmode={handledarkmode} 
        handlegreenmode={handlegreenmode} 
        name={mode === "light" ? "dark" : "light"} 
        color={mode === "dark" ? "white" : "black"}
      />
      <Alert alert={alert}/>
      <Textbox color={mode === "dark" ? "grey" : "white"} mode={mode} Showalert={Showalert}/> 

      {/* <Routes>
        <Route path="/" element={} />
        <Route path="/about" element={<Darkmode/>} />
      </Routes> */}
 

    
    
    {/* <Background/> */} 
    
      
    </>
  );
}

export default App;
