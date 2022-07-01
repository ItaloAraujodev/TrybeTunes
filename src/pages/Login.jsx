import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const { dissabled, onInputChange, buttonClick } = this.props;

    return (
      <div className="login-container" data-testid="page-login">
        <h2>login</h2>
        <div>
          <label htmlFor="input-text">
            <input
              data-testid="login-name-input"
              name="nameInput"
              id="input-text"
              type="text"
              onChange={ onInputChange }
            />
          </label>

          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ dissabled }
            onClick={ buttonClick }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dissabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default Login;
