import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  constructor() {
    super();

    this.state = {
      validation: false,
    };
  }

  componentDidMount() {
    this.checkedValid();
  }

  /*   onInputChecked = async () => {
    const { favotirs } = this.state;
    this.setState({ loading: true });
    const song = await addSong(favotirs);
    this.setState({
      favotirs: song,
      chec: false,
    });
  }; */

  checkedValid = () => {
    const { check } = this.props;
    this.setState({ validation: check });
  }

  musicAdd = async ({ target }, data) => {
    const { addSongFavorite } = this.props;
    const { checked } = target;
    this.setState({ validation: checked });
    if (checked) {
      addSongFavorite(data);
    }
  }

  render() {
    const { album } = this.props;
    const { validation } = this.state;
    return (
      <div>
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
              onChange={ (event) => this.musicAdd(event, album) }
              checked={ validation }
            />
          </label>
        </div>
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
