import './App.css';
import Home from  './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/gallery/gallery';
import ContactUs from './components/contactUs/contactUs';
import Footer from './components/Footer/footer';
import Bedroom from './components/Bedroom/Bedroom';
import LivingRoom from './components/LivingRoom/LivingRoom';
import Kitchen from './components/Kitchen/Kitchen';
import Others from './components/Others/Others';
import PaintGallery from './components/PaintGallery/PaintGallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/bedroom' element={<Bedroom />}/>
          <Route path='/living-room' element={<LivingRoom />}/>
          <Route path='/kitchen' element={<Kitchen />}/>
          <Route path='/others' element={<Others />}/>
          <Route path='/paint' element={<PaintGallery />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
