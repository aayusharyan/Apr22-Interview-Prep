import './App.css';
import { useState } from 'react';
import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './lastNameContext';
import setLastNameContext from './setLastNameContext';
import ThemeContext from './ThemeContext';
import SetThemeContext from './SetThemeContext';
import Main from './Main';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <nameContext.Provider value={name}>
          <lastNameContext.Provider value={lastName}>
            <setNameContext.Provider value={setName}>
              <setLastNameContext.Provider value={setLastName}>
                <Main />
              </setLastNameContext.Provider>
            </setNameContext.Provider>
          </lastNameContext.Provider>
        </nameContext.Provider>
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
