import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import ChildA from './components/ChildA';
import { useState } from 'react';
import nameContext from './NameContext';
import setNameContext from './SetNameContext';
import lastNameContext from './lastNameContext';
import setLastNameContext from './setLastNameContext';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <nameContext.Provider value={name}>
      <lastNameContext.Provider value={lastName}>
        <setNameContext.Provider value={setName}>
          <setLastNameContext.Provider value={setLastName}>
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Child1 />
                <ChildA />
              </header>
            </div>
          </setLastNameContext.Provider>
        </setNameContext.Provider>
      </lastNameContext.Provider>
    </nameContext.Provider>
  );
}

export default App;
