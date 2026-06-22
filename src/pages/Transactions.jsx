// import { useState } from "react";
// import TransactionForm from "../components/TransactionForm";
// import TransactionList from "../components/TransactionList";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataInvoices } from "../data/mockData";
import Header from "../components/header";

function Transactions() {

  // this is to apply the theme
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // this is the data format
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];
  // old code that needs to be refactored to be a feature later
  // const [transactions, setTransactions] = useState([]); // states

  // const addTransaction = (transaction) => {
  //   setTransactions((prev) => [
  //     ...prev,
  //     {
  //       id: crypto.randomUUID(),
  //       ...transaction,
  //     },
  //   ]);
  // };

  // const deleteTransaction = (id) => {
  //   setTransactions((prev) =>
  //     prev.filter((t) => t.id !== id)
  //   );
  // };

  return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Transactions</h1>

    //   <TransactionForm onAddTransaction={addTransaction} />

    //   <TransactionList
    //     transactions={transactions}
    //     onDeleteTransaction={deleteTransaction}
    //   />
    // </div>

     <Box m="20px">
      <Header title="Transactions History" subtitle="List of transaction histories" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}

export default Transactions;
