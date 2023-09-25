import { useState } from 'react';

const ChallanItemsTable = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'Row 1' },
    { id: 2, name: 'Row 2' },
  ]);

  const addRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      name: `Row ${tableData.length + 1}`,
    };
    setTableData([...tableData, newRow]);
  };
  return (
    <>
      {/* <div>
        <button onClick={addRow}>Add Row</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
      <div className="container mt-5 border rounded-3 p-3 py-4">
        <table className="table  table-striped caption-top table-bordered border-dark table-hover">
          <caption>Challan Items</caption>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col" className="w-50">
                Sub Category
              </th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td className="w-50"> Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChallanItemsTable;
