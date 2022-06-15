import React, { useContext } from 'react'
import logo from './logo.svg';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeContext from './ThemeContext';

const Main = () => {
  const isLight = useContext(ThemeContext);
  return (
    <div className={`App ${isLight?"light": ""}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeSwitcher />
        <Child1 />
        <ChildA />
      </header>
    </div>
  )
}

export default Main