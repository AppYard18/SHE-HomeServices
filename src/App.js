import './App.css';
import Home from  './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/gallery/gallery';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
