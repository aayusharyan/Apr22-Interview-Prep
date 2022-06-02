import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Component4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setData(res.data.data);
    })
  }, []);

  return (
    <>
    <div>Component4</div>
    <ol>
      {data.map((single_data, idx) => {
        return (
          <li key={idx}>{single_data.first_name} {single_data.last_name} ({single_data.email})</li>
        )
      })}
    </ol>
    </>
  )
}

export default Component4