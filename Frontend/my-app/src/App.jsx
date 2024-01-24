import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sports from './components/Sports';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Home/>
      <Sports/>
    </div>
  );
}

export default App;
