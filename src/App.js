import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banners from './Components/Banners';
import News from './Components/News';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banners/>
      <News country="in" category="general" />
      
    </div>
  );
}

export default App;
