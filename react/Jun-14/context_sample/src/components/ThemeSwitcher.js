import React, {useContext} from 'react';
import SetThemeContext from '../SetThemeContext';
import '../ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const setThemeContext = useContext(SetThemeContext);

  const setTheme = e => {
    console.log(e.target.checked);
    setThemeContext(e.target.checked);
    //true -> light mode
    //false -> dark mode
  }
  return (
    <div className="container">
      <div className="toggle-switch">
        <input 
          type="checkbox" 
          className="checkbox" 
          name="theme" 
          id="theme"
          onChange={setTheme} 
        />
        <label className="label" htmlFor="theme">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}

export default ThemeSwitcher