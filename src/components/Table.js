import React, { Component } from 'react';

class Table extends Component {
  render() {
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
            <tr>
              <td>Descrição da despesa 1</td>
              <td>Tag da despesa 1</td>
              <td>Método de pagamento da despesa 1</td>
              <td>Valor da despesa 1</td>
              <td>Moeda da despesa 1</td>
              <td>Câmbio utilizado da despesa 1</td>
              <td>Valor convertido da despesa 1</td>
              <td>Moeda de conversão da despesa 1</td>
              <td>Editar/Excluir</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
