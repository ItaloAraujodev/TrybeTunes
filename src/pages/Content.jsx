import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Content extends React.Component {
  render() {
    const { data, input } = this.props;
    return (
      <div>
        {data.length === 0 ? (
          <h4>Nenhum álbum foi encontrado</h4>
        ) : (
          <>
            <div>
              <h3>
                Resultado de álbuns de:
                {' '}
                { input }
              </h3>
            </div>
            <ul>
              {data.map((item) => (
                <li key={ item.collectionId }>
                  <Link
                    to={ `/album/${item.collectionId}` }
                    data-testid={ `link-to-album-${item.collectionId}` }
                  >
                    {item.collectionName}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

Content.propTypes = {
  data: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

export default Content;
