import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    allExpenses: 0,
    currencyField: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { allExpenses, currencyField } = this.state;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ allExpenses }</p>
        <p data-testid="header-currency-field">{ currencyField }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
