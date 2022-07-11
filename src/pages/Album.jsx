import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      collection: '',
      data: [],
      favoriteSongs: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.spotyAPI();
    this.addSongFavorite();
  }

  addSongFavorite = (obj) => {
    this.setState({ loading: true }, async () => {
      await addSong(obj);
      const fov = await getFavoriteSongs();
      this.setState((prev) => (
        { favoriteSongs: [...prev.favoriteSongs, ...fov], loading: false }
      ));
    });
  }

  spotyAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getMusics(id);
    const { artistName, collectionName } = data[0];
    this.setState({
      data,
      collection: collectionName,
      name: artistName,
    });
  };

  valid = (item) => {
    const { favoriteSongs } = this.state;
    return favoriteSongs.some(({ trackId }) => trackId === item.trackId);
  }

  render() {
    const { data, collection, name, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Loading /> : (
          <>
            <p data-testid="album-name">{collection}</p>
            <p data-testid="artist-name">{name}</p>
            {data.map((item, index) => (
              index > 0 ? <MusicCard
                key={ index }
                album={ item }
                addSongFavorite={ this.addSongFavorite }
                check={ this.valid(item) }
              /> : null
            ))}
          </>
        ) }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({}),
}.isRequired;

export default Album;
