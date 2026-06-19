function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id} style={{ marginBottom: "10px" }}>
          <span>
            {t.description} | {t.type} | R{t.amount}
          </span>

          <button
            onClick={() => onDeleteTransaction(t.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;