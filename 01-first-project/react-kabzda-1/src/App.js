import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router-dom";




const App = () => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Dialogs' element={<Dialogs />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}





export default App;
