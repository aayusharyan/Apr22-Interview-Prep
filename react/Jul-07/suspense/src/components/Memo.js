import React, { useCallback, useMemo, useState } from 'react'

const Memo = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(15);

  // const sum = (a, b) => {
  //   console.log("Function called");
  //   return a + b;
  // }

  const sum = useMemo(_ => {

    console.log("Function called");
    return num1 + num2;

  }, [num1, num2]);

  return (
    <>
      <ul>
        {Array(1000).fill(-1).map((_, id) => {
          return <li key={id}>{sum}</li>
        })}
      </ul>
    </>
  )
}

export default Memo