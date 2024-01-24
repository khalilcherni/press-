import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sports from './components/Sports';
import WeatherInfo from './components/WeatherInfo';
function App() {
  return (
    <div className="App">
    <Navbar/>

  
    <WeatherInfo/>
      <Home/>
      <Sports/>
    </div>
  );
}

export default App;
