import React, { Component, createContext } from 'react';

const AppContext = createContext();
export {AppContext};

export default class Context extends Component {
  constructor() {
    super();
    this.state = {
      isDarkTheme: false,
    }
  }

  setDarkTheme = () => {
    this.setState({isDarkTheme: true});
  }

  setLightTheme = () => {
    this.setState({isDarkTheme: false});
  }

  render() {
    let ctxObj = {
      isDarkTheme: this.state.isDarkTheme,
      setDarkTheme: this.setDarkTheme,
      setLightTheme: this.setLightTheme 
    };
    return (
      <AppContext.Provider value={ctxObj}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
