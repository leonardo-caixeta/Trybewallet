import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, addExpense } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: [],
  };

  async componentDidMount() {
    await this.fetchApi();
  }

  removeUSDT = (dataKeys) => {
    const { dispatch } = this.props;
    const removedUSDT = dataKeys.filter((currency) => currency !== 'USDT');

    dispatch(getCurrencies(removedUSDT));
  };

  turnToInitialState = () => {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    }));
  };

  fetchApi = async () => {
    const API = 'https://economia.awesomeapi.com.br/json/all';
    const data = await fetch(API)
      .then((response) => response.json());

    const dataKeys = Object.keys(await data);

    this.removeUSDT(dataKeys);
    return data;
  };

  handleChange = async ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleAddExpense = async () => {
    const exchangeRates = await this.fetchApi();
    const { dispatch } = this.props;
    this.setState((state) => ({
      id: state.id,
      exchangeRates,
    }), () => {
      dispatch(addExpense(this.state));
      this.turnToInitialState();
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const options = currencies.map((curr, index) => (
      <option key={ index } value={ curr }>
        { curr }
      </option>
    ));

    return (
      <div>
        <label htmlFor="value-input">
          valor
          <input
            data-testid="value-input"
            id="value-input"
            name="value"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="description-input">
          descrição
          <input
            type="text"
            data-testid="description-input"
            id="description-input"
            name="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <select
          name="currency"
          data-testid="currency-input"
          onChange={ this.handleChange }
          value={ currency }
        >
          {currencies && options}
        </select>
        <select
          name="method"
          data-testid="method-input"
          onChange={ this.handleChange }
          value={ method }
        >
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao-credito">Cartão de crédito</option>
          <option value="cartao-debito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          data-testid="tag-input"
          onChange={ this.handleChange }
          value={ tag }
        >
          <option value="alimentacao">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
        <button onClick={ this.handleAddExpense }>Adicionar despesa</button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  price: state.wallet.price,
});

export default connect(mapStateToProps)(WalletForm);
