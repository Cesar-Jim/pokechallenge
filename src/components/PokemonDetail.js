import React, { Component } from "react";
import axios from "axios";
import { Animated } from "react-animated-css";

class PokemonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      height: "",
      weight: "",
      id: ""
    };
  }

  async componentDidMount() {
    const { index } = this.props.match.params;
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${index}/`;

    // Get individual pokemon info
    const res = await axios.get(pokemonUrl);

    const name = res.data.name;
    const height = res.data.height;
    const weight = res.data.weight;
    const id = res.data.id;
    this.setState({ name, height, weight, id });
  }

  render() {
    return (
      <Animated animationIn="slideInLeft" isVisible={true}>
        <div>
          <p className="h1">{this.state.name}</p>
          <p className="h4">Height: {this.state.height}</p>
          <p className="h4">Weight: {this.state.weight}</p>
          <p className="h4">Id: {this.state.id}</p>
        </div>
      </Animated>
    );
  }
}

export default PokemonDetail;
