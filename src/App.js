import './App.css';
import Home from  './components/Home/Home';
import Design from './components/Design/Design';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/design' element={<Design />}/>
          {/* <Route path='/customer/:customerId' element={<Customer />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
