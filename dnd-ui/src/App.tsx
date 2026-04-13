import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Hero from './components/Hero';
import Monster from './components/Monster';
import Login from './components/Login';
import Navigation from './components/Navigation'
import IsTokenValid from './components/AuthenticationToken';

function App() {
  const [loggedIn, setLoggedIn] = useState(IsTokenValid);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
          loggedIn ?
            <Navigate to="/" replace />
            :
            <Login setLoggedIn={setLoggedIn} />}
        />
        <Route path='*' element={
          loggedIn ?
            <div className='app'>
              <div className='flex-center'>
                <div className="flex-centre-top">
                  <Header />
                </div>
                <div className="nav-bar">
                  <Navigation setLoggedIn={setLoggedIn} />
                </div>
                <div className="flex-centre-bottom">
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/hero' element={<Hero />} />
                    <Route path='/monster' element={<Monster />} />
                  </Routes>
                </div>
              </div>
            </div>
            :
            <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
