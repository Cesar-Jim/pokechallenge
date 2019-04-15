import React, { Component } from "react";
import { Link } from "react-router-dom";

// Import animation library for page transitions
import { Animated } from "react-animated-css";

/*This component is like a pokemon card. Each one
  hold the name and an image of a given pokemon*/

class PokemonCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      index: ""
    };
  }

  componentDidMount() {
    const { name, baseUrl } = this.props;
    const index = baseUrl.split("/")[baseUrl.split("/").length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      index
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-3 mb-10">
        <Link to={`pokemon/${this.state.index}`}>
          <Animated animationIn="tada" isVisible={true}>
            <div className="card">
              <h5 className="card-title">{this.state.name}</h5>
              <a href="">
                <img
                  className="card-body"
                  src={this.state.imageUrl}
                  width="150"
                  height="150"
                />
              </a>
            </div>
          </Animated>
        </Link>
      </div>
    );
  }
}

export default PokemonCell;
