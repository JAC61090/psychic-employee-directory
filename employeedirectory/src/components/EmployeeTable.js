import React, { useState, useEffect } from "react";
import API from "../utils/API.js";

function EmployeeTable() {
  const [randomUser, setRandomUser] = useState([]);

  useEffect(() => {
    fillEmployeeTable();
  }, []);

  const fillEmployeeTable = async () => {
    const res = await API.getRandomUsers();
    await setRandomUser(res.data.results);
    console.log(...randomUser);
  };

  const sortAlphabetically = (e) => {
    function compare(a, b) {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    }
    var sortedUser = randomUser.sort(compare);
    setRandomUser([...sortedUser]);
  };
  
  const filterAge = (e) => {
    var peopleSeventyTwo = [];
    for (let index = 0; index < randomUser.length; index++) {
      const element = randomUser[index];
      if (randomUser[index].dob.age > 72) {
        peopleSeventyTwo.push(randomUser[index]);
      }
    }
    // var sortedUser = randomUser.sort(compare);
    setRandomUser([...peopleSeventyTwo]);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col"> <button onClick={sortAlphabetically}>Last</button></th>
          <th scope="col">
            <button onClick={filterAge}>Age</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* map around this row */}
        {randomUser.map((result) => (
          <tr>
            <th scope="row">
              <img src={result.picture.thumbnail} alt=""></img>
            </th>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.dob.age}</td>
          </tr>
        ))}
        {/* end map */}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
