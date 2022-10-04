import React from 'react';
import Header from '../Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Content from './Content';
import Loading from './Loading';
import '../css/search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      dissabled: true,
      loading: false,
      album: false,
      input2: '',
      array: [],
    };
  }

  onInputChange = ({ target }) => {
    const numMax = 2;
    const { name, value } = target;
    this.setState({ [name]: value, input2: value });
    if (value.length >= numMax) {
      this.setState({
        dissabled: false,
      });
    } else {
      this.setState({ dissabled: true });
    }
  };

  seachAlbum = async () => {
    const { input2 } = this.state;
    this.setState({ loading: true });
    const banda = await searchAlbumsAPI(input2);
    this.setState({ input: '', loading: false });
    if (input2) {
      this.setState({ input: '', loading: false, album: true, array: banda });
    }
  };

  render() {
    const { dissabled, input, loading, album, array, input2 } = this.state;
    return (
      <div data-testid="page-search" className="container">
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
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
                onClick={ this.seachAlbum }
              >
                Procurar
              </button>
            </div>
            {album ? <Content data={ array } input={ input2 } /> : null}
          </>
        )}
      </div>
    );
  }
}

export default Search;
