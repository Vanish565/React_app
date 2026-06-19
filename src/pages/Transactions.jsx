import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Transactions() {
  const [transactions, setTransactions] = useState([]); // states

  const addTransaction = (transaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...transaction,
      },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Transactions</h1>

      <TransactionForm onAddTransaction={addTransaction} />

      <TransactionList
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default Transactions;