import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Loader from './Components/Loading';
import { useState } from 'react';

function App() {
  const [staus,setstaus]=useState(false)
  setTimeout(() => {
    setstaus(true)
  }, 2000);
  return (
    <div className="App">
      
      {staus?<Navbar/>:<Loader/>}
    </div>
  );
}

export default App;
