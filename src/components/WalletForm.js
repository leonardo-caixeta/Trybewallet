import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { successFetch } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    await this.getCurrencies();
  }

  getCurrencies = async () => {
    const { dispatch } = this.props;
    const API = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(API)
      .then((response) => response.json());
    const dataKeys = Object.keys(await data);
    const removedUSDT = dataKeys.filter((currency) => currency !== 'USDT');
    dispatch(successFetch(removedUSDT));
  };

  render() {
    const { currencies } = this.props;
    const options = currencies.map((currency, index) => (
      <option key={ index } value={ currency }>
        { currency }
      </option>
    ));

    return (
      <div>
        <h4 data-testid="value-input">valor da despesa</h4>
        <p data-testid="description-input">descrição da despesa</p>
        <select name="currency" data-testid="currency-input">
          {currencies && options}
        </select>
        <select name="paymentMethod" data-testid="method-input">
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
        <select name="expenseCategory" data-testid="tag-input">
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
