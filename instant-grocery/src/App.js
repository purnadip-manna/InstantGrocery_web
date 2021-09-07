import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner shopName="ABC Shop" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
