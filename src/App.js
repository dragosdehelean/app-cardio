import React, { Component } from "react";
import Header from "./components/Header";
import { PLAYERS } from "./shared/players";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

class App extends Component {
  state = { 
    players: PLAYERS
  };

  handleChangeScore = (id, modifier) => {
    // console.log("scorul este: " + score);
    this.setState(prevState => (
      {
        players: prevState.players.map( (player) => {
          // dc e alt player decat cel cautat, returnez player-ul original
          if (player.id !== id){  
            return player
          } 
          // dc e player-ul cautat, returnez player-ul cu proprietatea score modificata
          else { 
            return Object.assign(player, {score: player.score + modifier}) 
          }
        })
      }
    ))
  }

  handleRemovePlayer = id => {
    this.setState(
      {      
        // Exercitiul 3: obtineti valoarea corecta pentru noul array players
        players: this.state.players
      }
    );
  };

  handleAddPlayer = name => {
    
    // Exercitiul 5 Creati o functie genUniqIncrId 
    // care genereaza un id nou, mai mare cu 1 fata de cel mai mare id din players,
    // indiferent de cum evolueaza players 
    
    
     // Exercitiul 4: adaugati un nou player cu numele primit, score default 0 si un id default ex "6" 
    this.setState({
      players: this.state.players
    });
  };
  
  render() {
    return (
      <div className="scoreboard">

        <Header title="Scoreboard" players = {this.state.players} />

        {/* Players list */}

        {this.state.players.map(player => (
          
          <Player
            name = {player.name}
            id = {player.id}
            key = {player.id.toString()}
            removePlayer = {this.handleRemovePlayer}
            changeScore = {this.handleChangeScore}
            score = {player.score}
          />
        ))}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;

