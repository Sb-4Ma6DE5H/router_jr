import './App.css';
import About from './pages/About';
import Profile from './pages/Profile';
// import { useState } from "react";
import { Link, Route, Routes, } from 'react-router-dom';

function App() {
  // const [state, setState] = useState('');
  return (
    <div className="App">
        <Link to={'/about'}>About</Link>
        <Link to={'/profile'}>Profile</Link>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
