import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from './components/footer';
import MainArea from './components/mainArea';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App">
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <Navbar />
          <Banner shopName="ABCD Shop" />
          <MainArea />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
