import './App.css';
import SideNav from "./components/Navigation";
import Header from "./components/Header";
import HomePage from './components/Home';

function App() {
  return (
    <div className='app'>
      <div className='flex-left'>
        <SideNav />
      </div>
      <div className='flex-center'>
        <Header />
        <HomePage />
      </div>
      {/* <div className="flex-right"></div> */}
    </div>
  );
}

export default App;
