import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import { Outlet, Route, Routes } from 'react-router-dom';
import Video from './components/Video';
import Secret from './components/Secret';
import Outlet1 from './components/Outlet1';
import Outlet2 from './components/Outlet2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Video />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navigation />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path="/secret/:username" element={<Secret />} />
          <Route path="/outlet" element={<Outlet />}>
            <Route path='outlet1' element={<Outlet1 />}/>
            <Route path='outlet2' element={<Outlet2 />}/>
          </Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
