import './App.css';
import Home from  './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/login' element={<Login />}/>
          <Route path='/customer/:customerId' element={<Customer />}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
