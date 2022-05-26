const Container = () => {
  const [charCount, setCharCount] = React.useState(0);
  const [incNumber, setIncNumber] = React.useState(false);
  const [incSplChars, setIncSplChars] = React.useState(false);
  const [casing, setCasing] = React.useState("");



  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <ConfigurationOptions 
        setCharCount={setCharCount}  
        setIncNumber={setIncNumber} 
        setIncSplChars={setIncSplChars}
        setCasing={setCasing}
      />
      <br />
      <GenerateButton 
        charCount={charCount} 
        incNumber={incNumber} 
        incSplChars={incSplChars} 
        casing={casing}
      />
    </div>
  )
}