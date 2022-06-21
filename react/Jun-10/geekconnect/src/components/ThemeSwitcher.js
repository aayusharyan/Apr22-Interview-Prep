import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDark, setThemeLight } from '../slice';
import MaterialUISwitch from './MaterialUISwitch';



const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const changeTheme = e => {
    if(e.target.checked) {
      dispatch(setThemeDark());
    } else {
      dispatch(setThemeLight());
    }
  }

  return (
    <>
      <MaterialUISwitch onChange={changeTheme} theme={theme} />
    </>
  )
}

export default ThemeSwitcher