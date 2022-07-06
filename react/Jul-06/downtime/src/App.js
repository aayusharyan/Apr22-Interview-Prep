import './App.css';
import useNetwork from './components/useNetwork';

function App() {
  const {isOnline} = useNetwork();
  return (
    <div className="App">
      <h3>Internet Status (🌐) - {isOnline ? "✔️" : "❌"}</h3>
    </div>
  );
}

export default App;
