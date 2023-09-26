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

  const HandleDeleteRow: any = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData = tableData.filter((row) => row.id !== id);
      setTableData(updatedData);
    }
  };

  const handleKeyDown = (event: any, id: any) => {
    if (event.key === 'Tab' && id === tableData[tableData.length - 1].id) {
      HandleAddRow();
    }
  };
  return (
    <>
      <div className="container mt-1 border rounded-3">
        <div className="d-flex justify-content-between table-heading-row">
          <caption>Challan Items</caption>
          <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
            Add Row
          </p>
        </div>
        <div className="table-responsive">
          <table className="table table-striped caption-top table-hover">
            <thead>
              <tr className="table-header-row">
                <th scope="col">No.</th>
                <th scope="col" className="w-50">
                  Sub Category
                </th>
                <th scope="col">Gross Weight</th>
                <th scope="col">Net Weight</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
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
                      className="form-select p-0 custom-input-field"
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
                      className="form-control custom-input-field"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control custom-input-field"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control custom-input-field"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      onKeyDown={(e) => handleKeyDown(e, row.id)}
                    />
                  </td>
                  <td>
                    <div
                      className="d-flex align-items-center delete-link"
                      onClick={() => HandleDeleteRow(row.id)}
                    >
                      <i className="fa-solid fa-xmark fs-4"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChallanItemsTable;
