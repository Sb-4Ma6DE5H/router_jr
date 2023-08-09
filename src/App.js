import About from './pages/About';
import Profile from './pages/Profile';
import { useState } from "react";
import { Link, Route, Routes, } from 'react-router-dom';
import { AppContext } from './AppContext';

function App() {
const [state, setState] = useState(20);
  return (
    <div className="App">
      <button>
        <Link to={'/about'}>About</Link>
      </button>
      <Link to={'/profile'}>Profile</Link>
      <AppContext.Provider value={{ data: state }}>
        <Routes>
          <Route path="/about" element={<About />} />
          {/* <Route path="/profile" element={<Profile data={state} ></Profile>} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
