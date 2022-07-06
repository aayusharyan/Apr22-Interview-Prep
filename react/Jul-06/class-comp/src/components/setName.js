import { useState } from 'react'

const useName = () => {
  const[name, setName] = useState();

  const setSomething = (data) => {
    setName(data);
  }

  return [name, setSomething];
}

export default useName