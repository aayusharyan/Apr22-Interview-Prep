import React, { Component } from 'react'
import { AppContext } from './Context';
import setName from './setName';

export default class ThemeSwitcher extends Component {
  setTheme = (e) => {
    // const [nm, setNm] = setName();

    if(e.target.checked) {
      this.context.setDarkTheme();
    } else {
      this.context.setLightTheme()
    }
  }
  render() {
    console.log(this.context);
    return (
      <>
      <input type="checkbox" id='theme_checkbox' checked={this.context.isDarkTheme} onChange={this.setTheme} />
      <label htmlFor='theme_checkbox'>Make it Night Time</label>
      </>
    )
  }
}

ThemeSwitcher.contextType = AppContext;
