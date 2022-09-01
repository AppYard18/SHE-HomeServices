import './App.css';
import Home from  './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/gallery/gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
