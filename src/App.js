import {BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/style/global.css"
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
