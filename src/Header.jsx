import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './pages/Loading';
import { getUser } from './services/userAPI';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    const name = await getUser();
    this.setState({ inputName: name, loading: false });
  };

  render() {
    const { loading, inputName } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? (
          <Loading />
        ) : (
          <div>
            <p data-testid="header-user-name">{inputName.name}</p>
            <Link data-testid="link-to-search" to="/search">
              Pesquisa
            </Link>
            <Link data-testid="link-to-favorites" to="/favorites">
              Favoritos
            </Link>
            <Link data-testid="link-to-profile" to="/profile">
              Profile
            </Link>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
