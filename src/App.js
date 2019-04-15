import React, { Component } from "react";

import "./App.css";

// Libraries import:
import "bootstrap/dist/css/bootstrap.min.css"; // Used for styling and responsiveness
import { Route } from "react-router-dom"; // Used for routing

// Components import:
import PokemonList from "./components/PokemonList"; // List of Pokemons in chunks of 20
import PokemonDetail from "./components/PokemonDetail"; // Pokemon individual info

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemon/:index" component={PokemonDetail} />
        </div>
      </div>
    );
  }
}

export default App;
