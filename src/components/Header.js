import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    currencyField: 'BRL',
  };

  toUpdateTotal = () => {
    const { expenses } = this.props;
    let total = 0;
    if (expenses.length) {
      // const rates = expenses.map((i) => i.exchangeRates);
      // const value = expenses.map((v) => v.value);
      total = expenses.reduce((prev, curr, currIndex) => {
        const rate = expenses[currIndex]
          .exchangeRates[curr.currency].ask;
        return prev + (curr.value * rate);
      }, 0);
    }
    return total.toFixed(2);
  };

  render() {
    const { currencyField } = this.state;
    const { email } = this.props;
    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.toUpdateTotal() }</p>
        <p data-testid="header-currency-field">{ currencyField }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
