import './App.css';
// import ReactLogo from "./components/ReactLogo";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <div className="App">
        {/* <ReactLogo /> */}
        This is the main page
      </div>
      <div className="nav-menu" style={{ position: "relative" }}>
        <SideNav />
      </div>
    </>
  );
}

export default App;
