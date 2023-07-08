import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Nav from './components/Nav';
import Contact from './pages/Contact';

function App() {
  return (
<>
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />

        </Routes>
      </Router>
    </div>
</>
  );
}

export default App;
