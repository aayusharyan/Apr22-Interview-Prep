const ConfigurationOptions = () => {
  const [charCount, setCharCount] = React.useState(0);
  const [incNumber, setIncNumber] = React.useState(false);
  const [incSplChars, setIncSplChars] = React.useState(false);
  const [casing, setCasing] = React.useState("");

  return(
    <>
      <div>
        <label htmlFor="no_of_chars">Number of Characters</label>
        <input type="number" id="no_of_chars" className="f-right" onKeyUp={e => setCharCount(e.target.value)} />
      </div>

      <div>
        <label htmlFor="include_numbers">Include Number</label>
        <input type="checkbox" id="include_numbers" className="f-right" onChange={e => setIncNumber(e.target.checked)} />
      </div>

      <div>
        <label htmlFor="include_spl_chars">Include Special Characters</label>
        <input type="checkbox" id="include_spl_chars" className="f-right" onChange={e => setIncSplChars(e.target.checked)} />
      </div>

      <div>
        <label htmlFor="casing">Casing</label>
        <select id="casing" className="f-right" onChange={e => setCasing(e.target.value)}>
          <option disabled selected>Select Casing</option>
          <option value="lower">Lowercase</option>
          <option value="upper">Uppercase</option>
          <option value="mixed">Mixedcase</option>
        </select>
      </div>
    </>
  )
}