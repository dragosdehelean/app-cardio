import React from "react";

const Stats = props => {


  // Exercitiul 1: obtineti valoarea corecta pentru totalPlayers
  const totalPlayers = 1;

  // Exercitiul 2: obtineti valoarea corecta pentru totalScore
  const totalScore = 2; 
  

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
