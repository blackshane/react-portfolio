import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './components/Header'
import Footer from './components/Footer';


function App() {
  return (
<>   
  <Router>
    <div className='App'>
      <Header />      
        <Routes>
         <Route path='/' element={<About />} />
         <Route path='/portfolio' element={<Portfolio />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/resume' element={<Resume />} />
      </Routes>
    < Footer />
    </div>
  </Router>   
</>
  );
}

export default App;
