import './App.css';
import Navigation from './components/NavBar';
import Home from './components/Home';
import Process from './components/Process';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Process />
      <Project />
    </div>
  );
}

export default App;
