import './App.css';
import Navigation from './components/NavBar';
import Home from './components/Home';
import Process from './components/Process';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Process />
    </div>
  );
}

export default App;
