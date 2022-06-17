import React from 'react';
import '../ThemeSwitcher.css';
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../Actions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const setTheme = e => {
    if(e.target.checked) {
      dispatch(setLightTheme);
    } else {
      dispatch(setDarkTheme);
    }
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