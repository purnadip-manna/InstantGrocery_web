import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
      </header>
    </div>
  );
}

export default App;
