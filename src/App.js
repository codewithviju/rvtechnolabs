
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Services />} />

      </Routes>
      <Footer />

    </>
  );
}

export default App;
