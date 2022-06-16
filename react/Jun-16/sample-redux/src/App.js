import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Input from './Components/Input';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './Components/ThemeSwitcher';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const data = "hkjsdghdjhjk";
    dispatch(action(data));
  }, [])
  const isLight = useSelector (state => state.isLight);
  return (
    <div className={`App ${isLight? "light": ""}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeSwitcher />
        <Name />
        <Input />
      </header>
    </div>
  );
}

export default App;
