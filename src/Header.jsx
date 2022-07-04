import React from 'react';
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
          <p data-testid="header-user-name">{inputName.name}</p>
        )}
      </header>
    );
  }
}

export default Header;
