import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <h2>login</h2>
        <div>
          <input type="text" />
          <button type="button">Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
