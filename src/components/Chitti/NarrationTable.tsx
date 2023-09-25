import { useState } from 'react';

const NarrationTable = () => {
  const [tableData, setTableData] = useState([{ id: 1, name: '' }]);

  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      name: `Row ${tableData.length + 1}`,
    };
    setTableData([...tableData, newRow]);
  };
  return (
    <div className="container mt-2 border rounded-3 p-3 py-4 mb-5">
      <div className="d-flex justify-content-between mb-2">
        <caption>Narration- HUID</caption>
        <button
          className="btn btn-outline-primary py-1 px-2"
          onClick={HandleAddRow}
        >
          Add Row
        </button>
      </div>
      <table className="table table-striped caption-top table-hover">
        <thead>
          <tr className="table-header-row">
            <th scope="col">No</th>
            <th scope="col" className="narration-table-product">
              Product
            </th>
            <th scope="col">HUID Pieces</th>
            <th scope="col">HUID Weight</th>
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
                  <option>product 1</option>
                  <option>product 2</option>
                  <option>product 3</option>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NarrationTable;
