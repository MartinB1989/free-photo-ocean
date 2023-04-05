import {BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/style/normalize.css"
import "./assets/style/global.css"
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search';
import Error404 from './pages/Error404';
import Photo from './pages/Photo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/photo/:photo_id' element={<Photo />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
