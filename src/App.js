// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
// import Loader from './Components/Loading';
// import { useState } from 'react';
import Main from './Components/Main';

function App() {
  // const [staus,setstaus]=useState(false)
  // setTimeout(() => {
  //   setstaus(true)
  // }, 2000);
  return (
    <div className="App">
      
      <Navbar/>
    <Main/>
    </div>
  );
}

export default App;
