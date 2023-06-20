import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa página Login', () => {
  const password = 'aquisefaz';
  const email = 'leo543863@gmail.com';
  const incorrenctPassword = 'no';
  const incorrenctEmail = 'leo543863';

  it('testa rota "/"', () => {
    renderWithRouterAndRedux(<App />);

    const button = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it('Validação dos campos de email e password (senha e email incorretos)', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, incorrenctEmail);
      userEvent.type(passwordInput, incorrenctPassword);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  it('Validação dos campos de email e password (senha incorreta', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, incorrenctPassword);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  it('Validação dos campos de email e password (email incorreto', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, incorrenctPassword);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  it('Validação dos campos de email e password (senha ou email corretos', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, password);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    expect(button).toBeEnabled();
  });

  it('testa redirect', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByText(/insira o email/i);
    const passwordInput = screen.getByText(/insira a senha/i);

    act(() => {
      userEvent.type(emailInput, email);
      userEvent.type(passwordInput, password);
    });

    const button = screen.getByRole('button', { name: /entrar/i });

    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');
  });
});
