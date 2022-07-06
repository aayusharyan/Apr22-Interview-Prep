import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import Content from './components/Content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Context from './components/Context';
import Detail from './components/Detail';
import Navigation from './components/Navigation';
function App() {
  return (
    <BrowserRouter>
      <Context>
        <ThemeSwitcher />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Navigation />
      </Context>
    </BrowserRouter>
  );
}

export default App;
