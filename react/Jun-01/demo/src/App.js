import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';

function App() {
  const buttonRef = useRef();
  // const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <p ref={toggle ? buttonRef: undefined}>Elem 1</p>
        <p ref={toggle ?  undefined : buttonRef}>Elem 2</p> */}
        {/* <button onClick={_ => console.log(buttonRef.current)} id="sample_button">Show Ref</button> */}
        {/* <button onClick={_ => setToggle(t => !t)}>Toggle Ref</button> */}
        {/* <Component2 /> */}
        {/* <Component2 ref={buttonRef}>
          <h1>This is the content</h1>
          <p>Something</p>
          <><></></>
        </Component2>
        <Component3 name="Mogambo" marks={100} /> */}
        <Component4 />
      </header>
    </div>
  );
}

export default App;
