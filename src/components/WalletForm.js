import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { apiFetch } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies = () => {
    const { dispatch } = this.props;
    dispatch(apiFetch());
  };

  render() {
    // const { currencies } = this.props;
    return (
      <div>
        <h4 data-testid="value-input">valor da despesa</h4>
        <p data-testid="description-input">descrição da despesa</p>
        <select name="currency" data-testid="currency-input">
          {/* {
            currencies.foreach((currency) => (
              <option value={ currency }>
                { currency }
              </option>
            ))
          } */}
        </select>
        <button onClick={ () => this.getCurrencies }>tt</button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // currencies: PropTypes.arrayOf(
  //   PropTypes.string.isRequired,
  // ).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
