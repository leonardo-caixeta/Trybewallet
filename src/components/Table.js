import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, startEdit } from '../redux/actions';

class Table extends Component {
  tableItems = () => {
    const { expenses, dispatch } = this.props;
    return expenses.map((data) => {
      const exchangeRatesValues = Object.values(data.exchangeRates);
      const currencyRate = exchangeRatesValues
        .find(({ code }) => code === data.currency);

      const value = Math.round(data.value).toFixed(2);
      const total = Number(value * Number(currencyRate.ask)).toFixed(2);
      const exchange = Number(currencyRate.ask).toFixed(2);

      const res = (
        <tr key={ data.id }>
          <td>{ data.description }</td>
          <td>{ data.tag }</td>
          <td>{ data.method }</td>
          <td>{ value }</td>
          <td>{ currencyRate.name }</td>
          <td>{ exchange }</td>
          <td>{ total }</td>
          <td>Real</td>
          <td>
            <button
              data-testid="edit-btn"
              onClick={ () => dispatch(startEdit(data.id)) }
            >
              Editar
            </button>
            <button
              data-testid="delete-btn"
              onClick={ () => dispatch(removeExpense(data.id)) }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
      return res;
    });
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.length ? this.tableItems() : 'Nenhuma despesa foi adicionada' }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
