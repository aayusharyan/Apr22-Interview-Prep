import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import LikeDislike from './components/LikeDislike';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Comp1 text="Prop Class Component"/> */}
        <LikeDislike />
      </header>
    </div>
  );
}

export default App;
