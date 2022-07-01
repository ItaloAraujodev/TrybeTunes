import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';
import Favorites from './Favorites';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album" component={ Album } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default Content;
