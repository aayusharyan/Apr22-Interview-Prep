const setFirstName = (firstName) => {
  return {
    type: "SET_FIRST_NAME",
    payload: firstName
  }
}

const setLastName = (lastName) => {
  return {
    type: "SET_LAST_NAME",
    payload: lastName
  }
}

const setDarkTheme = {
  type: "SET_DARK_THEME"
}

const setLightTheme = {
  type: "SET_LIGHT_THEME"
}

export {setFirstName, setLastName, setDarkTheme, setLightTheme};