import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "../../components/Table/styles";
import { Transaction } from "../../pages/Transactions";
import { dateFormatter } from "../../utils/formatter";
import { SearchForm } from "../SearchForm";

interface TableProps {
  transactions: Transaction[];
}

export function Table({ transactions }: TableProps) {
  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  );
}
