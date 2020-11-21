import React, { useState, useEffect } from "react";
import axios from "axios";
function Box() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("1");

  useEffect(() => {
    fetchData();
  });

  async function fetchData() {
    const result = await fetch(`https://swapi.dev/api/people/${number}/`);
    console.log(result)
    // setName(result.data.name)
  }

  const handleChange = event => {
    event.preventDefault();
      console.log(event)
      setNumber(event.target.value)

  }

  const handleSubmit = async event => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />
    <input type="submit" value="Submit" />
    </form>
    <h4>The name is {name}</h4>
    <h4>value is {process.env.REACT_APP_MOTTO}</h4>
    </div>
  );
}

export default Box;
