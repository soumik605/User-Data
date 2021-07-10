import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import columns from './columns'

const Table = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(resp => (setData(resp)))
      .catch(err => <h1>{err}</h1>);
  }, []);

  const handleBulkDelete = () => {
    const updateData = data.filter((row) => !selectedRows.includes(row));
    setData(updateData);
  };

  

  return (
    <div>
      <h1 align="center">User Table</h1>
      <MaterialTable
        title="User Details"
        data={data}
        columns={columns}
        onSelectionChange={(rows) => setSelectedRows(rows)}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [...data, newRow];
              setData(updatedRows);
              resolve();
            }),

          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setData(updatedRows);
              resolve();
            }),

          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRowContainer = [...data];
              updatedRowContainer[index] = updatedRow;
              setData(updatedRowContainer);
              resolve();
            }),

          onBulkUpdate: (selectedRows) =>
            new Promise((resolve, reject) => {
              const rows = Object.values(selectedRows);
              const updatedRows = [...data];
              let index;
              rows.map((emp) => {
                index = emp.oldData.tableData.id;
                updatedRows[index] = emp.newData;
              });
              setData(updatedRows);
              resolve();
            }),
        }}
        options={{
          search: true,
          paging: false,
          filtering: false,
          actionsColumnIndex: -1,
          addRowPosition: "first",
          grouping: true,
          selection: true,
        }}
        actions={[
          {
            icon: "delete",
            tooltip: "Delete all selected row ?",
            onClick: () => handleBulkDelete(),
          },
        ]}
      />
    </div>
  );
};

export default Table;
