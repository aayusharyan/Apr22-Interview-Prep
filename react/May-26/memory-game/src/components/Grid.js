import Card from './Card';
import {useState} from 'react';

const Grid = () => {
  const [flipped, setFlipped] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

  const toggleFlipped = (index) => {
    let flipped_copy = [ ...flipped ]; //A way to create deep copy.

    if(flipped_copy[index] === true) {
      flipped_copy[index] = false;
    } else {
      flipped_copy[index] = true;
    }

    setFlipped(flipped_copy);
  }
  
  return (
    <div className="cards-container">
      {flipped.map((single_data, idx) => {
        return(
          <Card key={idx} isFlipped={single_data} flip={toggleFlipped} index={idx}/>
        )
      })}
    </div>
  )
}

export default Grid;