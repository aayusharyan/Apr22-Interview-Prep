import React, { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom";

const Secret = () => {
  let [searchParams, _] = useSearchParams();
  const [queryItems, setQueryItems] = useState([]);
  const params = useParams();
  console.log(params.username);
  
  useEffect(() => {
    const keys = [];
    searchParams.forEach((val, idx) => {
      keys.push({
        key: idx,
        value: val
      });
    })
    setQueryItems(keys);
    console.log(searchParams.get("key"));
  }, [searchParams]);

  return (
    <>
      <div>This is a secret page</div>
      <ul>
        {queryItems.map((val, key) => {
          return (
            <li key={key}> {val.key} -&gt; {val.value} </li>
          )
        })}
      {/* {searchParams.map((value, key) => {
        return (<li> {key} -&gt; {value}</li>)
      })} */}
      </ul>
    </>
  )
}

export default Secret