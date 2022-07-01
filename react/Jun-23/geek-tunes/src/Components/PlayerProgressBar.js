import {useRef, useEffect} from 'react';
import '../PlayerProgressBar.css';

const PlayerProgressBar = ({value, changeFn }) => {
  const inputRef = useRef();

  useEffect(() => {
    const val = value / 30 * 100;
    inputRef.current.style.background = `linear-gradient(to right, #1e3a8a 0%, #1e3a8a ${val}%, #777 ${val}%, #777 100%, #444 100%, #444 100%)`;
  }, [value])

  const seek = e => {
    const val = e.target.value;
    changeFn(val);
  }
  
  return (
    <>
      <div className="wrap loaded">
        <input ref={inputRef} onChange={seek} value={value} max={30} min={0} step={0.01} type="range" className="range" />
      </div>
    </>
  )
}

export default PlayerProgressBar