import './App.css';
import Home from  './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/customer/:customerId' element={<Customer />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
