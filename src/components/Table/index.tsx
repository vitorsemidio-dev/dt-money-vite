import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "../../components/Table/styles";
import { SearchForm } from "../SearchForm";

export function Table() {
  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>10/05/2022</td>
          </tr>
          <tr>
            <td width="50%">Hambúrguer</td>
            <td>
              <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>12/05/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
}
