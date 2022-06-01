const App = () => {
  const [showPosition, setShowPosition] = React.useState(true);

  return (
    <div className="App">
      {showPosition ? <Position /> : false}
      <button onClick={(_) => setShowPosition(false)}>Do not track</button>
    </div>
  );
}
