import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from './components/footer';
import MainArea from './components/mainArea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner shopName="ABC Shop" />
        <MainArea />
        <Footer />
      </header>
    </div>
  );
}

export default App;
