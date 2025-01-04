import "./App.css";
import NavRespon from "./NavRespon";
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <div className="Header">
      <NavRespon/>
      {/* <Navbar/> */}
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
