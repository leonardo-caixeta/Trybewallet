import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addEmail } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  dispatchAddEmail = () => {
    const { dispatch } = this.props;
    const { email } = this.state;

    dispatch(addEmail(email));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { email, password } = this.state;
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
    const minLength = 5;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (emailRegex.test(email) && password.length >= minLength) {
      this.setState((prevState) => ({
        ...prevState,
        disabled: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        disabled: true,
      }));
    }
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <p>Insira suas informações</p>
        <div className="identifyInputs">
          <label htmlFor="email-input">
            Insira o email
            <input
              type="email"
              name="email"
              id="email-input"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Insira a senha
            <input
              type="text"
              name="password"
              id="password-input"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <Link to="/carteira">
            <button
              disabled={ disabled }
              onClick={ this.dispatchAddEmail }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
