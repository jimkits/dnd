import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import Home from './components/Home';
import Hero from './components/Hero';
import Monster from './components/Monster';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='flex-left'>
          <SideNav />
        </div>
        <div className='flex-center'>
          <div className="flex-centre-top">
            <Header />
          </div>
          <div className="flex-centre-bottom" >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hero' element={<Hero />} />
              <Route path='/monster' element={<Monster />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
