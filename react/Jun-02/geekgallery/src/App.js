import Header from "./components/Header";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Detail from "./components/Detail";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from './components/Home';
// import abcdImage from './abcd.jpg';

function App() {
  return (
    <>
      <Header />
      {/* <img src={abcdImage} style={{maxWidth: "100vw"}}/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/image/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
