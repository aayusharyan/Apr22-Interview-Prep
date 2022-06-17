import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/post/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
