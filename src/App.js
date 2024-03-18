// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
// import Loader from './Components/Loading';
// import { useState } from 'react';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  // const [staus,setstaus]=useState(false)
  // setTimeout(() => {
  //   setstaus(true)
  // }, 2000);

  return (
    <div className="App">
      <Navbar/>
      <Routes>
   <Route path='/' element={<Main/>}></Route>
   <Route path='/skills' element={<Skills/>}></Route>
   <Route path='/projects' element={<Projects/>}></Route>
    </Routes>
    </div>
  );
}


export default App;
