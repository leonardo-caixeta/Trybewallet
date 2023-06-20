import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa componente Header', () => {
  const password = 'aquisefaz';
  const email = 'leo543863@gmail.com';

  it('testa campos de visualização', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, password);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    act(() => {
      userEvent.click(button);
    });

    const emailField = screen.getByTestId('email-field');
    const totalValue = screen.getByTestId('total-field');
    const currencyField = screen.getByTestId('header-currency-field');

    expect(emailField).toHaveTextContent(email);
    expect(totalValue).toHaveTextContent(0.00);
    expect(currencyField).toHaveTextContent('BRL');
  });
});
