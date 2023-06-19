import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  deleteTask = () => {
    // const taskItems = this.tableItems();
    // const
  };

  editTask = () => {};

  tableItems = () => {
    const { expenses } = this.props;
    return expenses.map((data, index) => {
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
              data-testid="delete-btn"
              value={ index }
              onClick={ this.deleteTask }
            >
              Deletar
            </button>
          </td>
          <td>
            <button
              data-testid="edit-btn"
              value={ index }
              onClick={ this.editTask }
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
            { expenses ? this.tableItems() : 'Nenhuma despesa foi adicionada' }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
