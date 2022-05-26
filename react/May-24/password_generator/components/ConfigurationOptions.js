const ConfigurationOptions = (props) => {

  return(
    <>
      <div>
        <label htmlFor="no_of_chars">Number of Characters</label>
        <input type="number" id="no_of_chars" className="f-right" onKeyUp={e => props.setCharCount(e.target.value)} />
      </div>

      <div>
        <label htmlFor="include_numbers">Include Number</label>
        <input type="checkbox" id="include_numbers" className="f-right" onChange={e => props.setIncNumber(e.target.checked)} />
      </div>

      <div>
        <label htmlFor="include_spl_chars">Include Special Characters</label>
        <input type="checkbox" id="include_spl_chars" className="f-right" onChange={e => props.setIncSplChars(e.target.checked)} />
      </div>

      <div>
        <label htmlFor="casing">Casing</label>
        <select defaultValue="" id="casing" className="f-right" onChange={e => props.setCasing(e.target.value)}>
          <option disabled value="">Select Casing</option>
          <option value="lower">Lowercase</option>
          <option value="upper">Uppercase</option>
          <option value="mixed">Mixedcase</option>
        </select>
      </div>
    </>
  )
}