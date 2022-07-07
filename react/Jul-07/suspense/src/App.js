import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import { useState, Suspense, lazy, useMemo } from 'react';
import Memo from './components/Memo';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import Buttons from './components/Buttons';
import Counter from './components/Counter';

const Content = lazy(_ => import('./components/Content'));

const store = createStore(reducer);

function App() {

  // const fn = useMemo((a, b) => {
  //   return a + b
  // }, [a, b]);
  // fn(10, 25);

  const [showComp, setShowComp] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <br />
        {/* <Memo />
        <Button clickFn={_ => setShowComp(true)} />
        {showComp ? (
          <Suspense fallback={<p>Loading...</p>}>
            <Content />
          </Suspense>
        ) : false} */}
        <Buttons />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
