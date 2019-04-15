import React, { Component } from "react";
import PokemonCell from "./PokemonCell";
import axios from "axios"; // Used to handle http requests more easily

/*This component is like a list that will hold 20 pokemon cells
  per page. Pagination is achieved by manipulating 'offset' in
  the url*/

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: "https://pokeapi.co/api/v2/pokemon/",
      offset: 0,
      page: 1,
      items: null
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.baseUrl); // async and await are used to wait until we get all items before setting the state
    this.setState({ items: res.data["results"] });
  }

  async handleNext(e) {
    let newOffset = this.state.offset + 20;
    let newPage = this.state.page + 1;
    e.preventDefault();
    const nextUrl = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${newOffset}`;
    const res = await axios.get(nextUrl);
    this.setState({
      items: res.data["results"],
      offset: newOffset,
      page: newPage
    });
  }

  async handlePrev(e) {
    e.preventDefault();
    let newOffset, newPage;

    if (this.state.offset === 0) {
      newOffset = 0;
      this.setState({ offset: newOffset, page: 1 });
    } else {
      newOffset = this.state.offset - 20;
      newPage = this.state.page - 1;
      const nextUrl = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${newOffset}`;
      const res = await axios.get(nextUrl);
      this.setState({
        items: res.data["results"],
        offset: newOffset,
        page: newPage
      });
    }
  }

  render() {
    return (
      <section>
        <div>
          <div className="heading">
            <p className="h1">Pokechallenge</p>
          </div>
          <p className="h3">Page {this.state.page}</p>

          {this.state.items ? (
            <div className="row">
              {this.state.items.map(pokemon => (
                <PokemonCell
                  key={pokemon.name}
                  name={pokemon.name}
                  baseUrl={pokemon.url}
                />
              ))}
            </div>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
        <div className="prevNext">
          <button onClick={e => this.handlePrev(e)}> Prev </button>
          <button onClick={e => this.handleNext(e)}> Next </button>
        </div>
      </section>
    );
  }
}

export default PokemonList;
