import './App.css';
import Navigation from './components/NavBar';
import Home from './components/Home';
import Process from './components/Process';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Process />
      <Project />
      <About />
      <Footer year='2024' name='Janiel Apollo Bodiongan'/>
    </div>
  );
}

export default App;
