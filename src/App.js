import React, { Component } from "react";

import "./App.css";

// Libraries import:
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

// Components import:
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

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
