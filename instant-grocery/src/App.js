import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import ControlBar from './components/controlBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner shopName="ABC Shop"/>
        <div className='row'>
          <div className='col-sm-2 mr-0 pr-2 mt-1 mp-1 mb-1 mp-1 ml-1 pl-2'>
              <ControlBar/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
