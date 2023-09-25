import { useState } from 'react';

const ChallanItemsTable = () => {
  const [tableData, setTableData] = useState([{ id: 1, name: '' }]);

  const HandleAddRow: any = () => {
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
      <div className="container mt-2 border rounded-3 p-3">
        <div className="d-flex justify-content-between mb-2">
          <caption>Challan Items</caption>
          <button
            className="btn btn-outline-primary py-1 px-2"
            onClick={HandleAddRow}
          >
            Add Row
          </button>
        </div>
        <table className="table  table-striped caption-top table-hover">
          <thead>
            <tr className="table-header-row">
              <th scope="col">No</th>
              <th scope="col" className="w-50">
                Sub Category
              </th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
              {/* <th scope="col"></th> */}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <select
                    id="category"
                    name="category"
                    className="form-select "
                    aria-label=".form-select-sm example"
                  >
                    <option></option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </td>
                {/* <td className="d-flex align-items-center delete-link">
                  <div>delete</div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ChallanItemsTable;
