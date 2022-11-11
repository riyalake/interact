// import logo from './logo.svg';
// import './App.css';
import "../src/Pages/Footer.css";
import "../src/Components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';


function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
