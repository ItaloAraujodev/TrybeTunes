import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      collection: '',
      data: [],
    };
  }

  componentDidMount() {
    this.spotyAPI();
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

  render() {
    const { data, collection, name } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="album-name">{collection}</p>
        <p data-testid="artist-name">{name}</p>
        {data.map((item, index) => (
          index > 0 ? <MusicCard key={ index } album={ item } /> : null
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({}),
}.isRequired;

export default Album;
