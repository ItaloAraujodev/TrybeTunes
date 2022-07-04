import React from 'react';
import Header from '../Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <h2>Profile</h2>
      </div>
    );
  }
}

export default Profile;
