import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      favotirs: {},
      check: false,
    };
  }

  onInputChecked = async () => {
    const { favotirs } = this.state;
    this.setState({ loading: true });
    const song = await addSong(favotirs);
    this.setState({
      favotirs: song,
      loading: false,
      check: !check.value,
    });
  };

  render() {
    const { album } = this.props;
    const { loading, check } = this.state;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <p>{album.trackName}</p>
            <audio data-testid="audio-component" src="{previewUrl}" controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
            </audio>

            <label htmlFor="check">
              Favorita
              <input
                id="check"
                data-testid={ `checkbox-music-${album.trackId}` }
                type="checkbox"
                checked={ check }
                onClick={ this.onInputChecked }
              />
            </label>
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
  }),
}.isRequired;

export default MusicCard;
