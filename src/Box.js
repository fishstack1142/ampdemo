import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Box() {
    const [name, setName] = useState('');

    useEffect(() => {

        async function fetchData() {
        const result = await axios('https://swapi.dev/api/people/5/',);

        console.log(result)
        console.log(result.data.name)
        setName(result.data.name)
        }
        fetchData();
    }, []);

  return (
    <div>
      <h4>The name is {name}</h4>
    </div>
  );
}

export default Box;
