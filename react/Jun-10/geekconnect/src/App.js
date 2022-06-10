import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
