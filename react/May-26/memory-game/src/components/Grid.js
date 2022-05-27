import Card from './Card';
import {useEffect, useState} from 'react';
import {pair_emojis, initRevealState} from '../Constants';
import {randomizeArr} from '../HelperFunctions';



const Grid = () => {
  const [flipped, setFlipped] = useState(initRevealState);
  const [randomArr, setRandomArr] = useState(pair_emojis);
  const [timerID, setTimerID] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const random_arr = randomizeArr(pair_emojis);
    setRandomArr(random_arr);
    console.log(random_arr);
    console.log("Hello");
  }, []);

  

  const toggleFlipped = (index) => {
    let flipped_copy = [ ...flipped ]; //A way to create deep copy.

    const flipped_count = flipped_copy.reduce((previous, current) => {
      if(current === true) {
        previous++;
      }
      return previous;
    }, 0);

    if(flipped_count >= 2) {
      clearTimeout(timerID);
      setTimerID(0);
      flipped_copy = [ ...initRevealState];
    }

    if(!flipped_copy[index]) {
      flipped_copy[index] = true;
    }

    const flipped_count_after = flipped_copy.reduce((previous, current) => {
      if(current === true) {
        previous++;
      }
      return previous;
    }, 0);

    if(flipped_count_after == 2) {
      const timer_id = setTimeout(() => {
        setFlipped(initRevealState);
      }, 2500);
      setTimerID(timer_id);
      setScore(score + 1);
    }

    setFlipped(flipped_copy);
  }
  
  return (
    <>
    <div className="cards-container">
      {flipped.map((single_data, idx) => {
        const emoji = randomArr[idx];
        return(
          <Card 
            key={idx} 
            isFlipped={single_data} 
            flip={toggleFlipped} 
            index={idx} 
            emoji={emoji} 
          />
        )
      })}
    </div>
    <h3 className='scorecard'>Moves: {score}</h3>
    </>
  )
}

export default Grid;