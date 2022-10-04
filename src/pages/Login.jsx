import React from 'react';
import PropTypes from 'prop-types';
import '../css/login.css';
import logo from '../assents/logo.png';

class Login extends React.Component {
  render() {
    const { dissabled, onInputChange, buttonClick } = this.props;

    return (
      <div className="login-container" data-testid="page-login">
        <div className="login-context">
          <div className="logo-header">
            <h2>
              trybe
              {' '}
              <span>tunes</span>
            </h2>

            {' '}
            <img src={ logo } alt="" />
            {' '}
          </div>
          <div className="login-inputs">
            <label htmlFor="input-text">
              <input
                data-testid="login-name-input"
                name="nameInput"
                id="input-text"
                type="text"
                placeholder="Qual é o seu nome ?"
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
