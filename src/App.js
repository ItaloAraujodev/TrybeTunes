import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import { createUser } from './services/userAPI';
import Loading from './pages/Loading';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      dissabledButton: true,
      loading: false,
      search: false,
    };
  }

    buttonValid = () => {
      const numMax = 3;
      const { nameInput } = this.state;
      const stringValid = nameInput.length >= numMax;

      this.setState({
        dissabledButton: !stringValid,
      });
    }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.buttonValid());
  }

  createUser = async () => {
    const { nameInput } = this.state;
    this.setState({ loading: true },
      async () => {
        await createUser({ name: nameInput });
        this.setState({ loading: false, search: true });
      });
  }

  render() {
    const { dissabledButton, loading, search } = this.state;
    return (
      <BrowserRouter>
        {loading ? <Loading /> : null }
        {search ? <Redirect to="/search" /> : null}
        <div>
          <p>TrybeTunes</p>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Login
                  onInputChange={ this.onInputChange }
                  dissabled={ dissabledButton }
                  buttonClick={ this.createUser }
                />) }
            />
            <Route path="/search" component={ Search } />
            <Route path="/album" component={ Album } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="/profile" component={ Profile } />
            <Route path="/favorites" component={ Favorites } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
