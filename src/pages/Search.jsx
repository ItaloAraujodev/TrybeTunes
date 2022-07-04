import React from 'react';
import Header from '../Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      dissabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const numMax = 2;
    const { name, value } = target;
    this.setState({ [name]: value });
    if (value.length >= numMax) {
      this.setState({
        dissabled: false,
      });
    } else {
      this.setState({ dissabled: true });
    }
  }

  render() {
    const { dissabled, input } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          name="input"
          value={ input }
          data-testid="search-artist-input"
          type="text"
          onChange={ this.onInputChange }
        />
        <button
          disabled={ dissabled }
          data-testid="search-artist-button"
          type="button"
        >
          Procurar
        </button>
      </div>
    );
  }
}

export default Search;
