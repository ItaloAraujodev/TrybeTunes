import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './pages/Loading';
import { getUser } from './services/userAPI';
import './css/search.css';
import logo from './assents/logo.png';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      /* loading: true, */
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const name = await getUser();
    this.setState({ inputName: name/* , loading: false */ });
  };

  render() {
    const { inputName } = this.state;
    return (
      <header data-testid="header-component" className="aside">
        <div className="logo-search">
          <h2>
            trybe
            {' '}
            <span>tunes</span>
          </h2>

          {' '}
          <img src={ logo } alt="" />
          {' '}
        </div>
        <div className="links">
          <Link data-testid="link-to-search" to="/search">
            <span>Pesquisa</span>
          </Link>
          <Link data-testid="link-to-favorites" to="/favorites">
            <span>Favorites</span>
          </Link>
          <Link data-testid="link-to-profile" to="/profile">
            <span>Profile</span>
          </Link>
        </div>
        <p data-testid="header-user-name">{inputName.name}</p>
      </header>
    );
  }
}

export default Header;
