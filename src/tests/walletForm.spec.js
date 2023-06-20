import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testa componente WalletForm', () => {
  const selectedValue = '25';
  const selectedDescription = 'Dola';
  const selectedCurrency = 'EUR';
  const selectedMethod = 'Dinheiro';
  const selectedTag = 'Lazer';

  const editedValue = '50';
  const editedDescription = 'Dolona';

  it('Testa campos do form e funções do table', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const valueInput = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = await screen.findByTestId('currency-input');
    const method = await screen.findByTestId('method-input');
    const tag = await screen.findByTestId('tag-input');
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });

    expect(valueInput).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
    expect(method).toBeInTheDocument();
    expect(tag).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    act(() => {
      userEvent.type(valueInput, selectedValue);
      userEvent.type(description, selectedDescription);
      userEvent.selectOptions(method, selectedMethod);
      userEvent.selectOptions(tag, selectedTag);
    });
    await waitFor(() => {
      userEvent.selectOptions(currency, selectedCurrency);
      userEvent.click(addButton);
    });

    // Testes do Table

    expect(await screen.findByRole('cell', { name: /dola/i })).toBeInTheDocument();

    const editBtn = await screen.findByRole('button', { name: /editar/i });
    const deleteBtn = await screen.findByRole('button', { name: /deletar/i });

    expect(editBtn).toBeInTheDocument();

    act(() => {
      userEvent.type(valueInput, editedValue);
      userEvent.type(description, editedDescription);
      userEvent.click(editBtn);
    });

    const editDoneBtn = await screen.findByRole('button', { name: /editar despesa/i });

    expect(editDoneBtn).toBeInTheDocument();

    userEvent.click(editDoneBtn);

    expect(await screen.findByRole('cell', { name: /dolona/i })).toBeInTheDocument();

    expect(await screen.findByRole('cell', { name: /50\.00/i })).toBeInTheDocument();

    act(() => {
      userEvent.click(deleteBtn);
    });

    expect(deleteBtn).not.toBeInTheDocument();

    expect(await screen.findByText(/nenhuma despesa foi adicionada/i)).toBeInTheDocument();
  });
  // it('', () => {});
  // it('', () => {});
});
