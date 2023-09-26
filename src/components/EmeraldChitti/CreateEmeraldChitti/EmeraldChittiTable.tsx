import { useState } from 'react';

const EmeraldChittiTable = () => {
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

  return (
    <>
      <div className="table-responsive">
        <div className="container mt-2 border rounded-3 py-1">
          <div className="d-flex justify-content-between mb-1 table-heading-row">
            <caption>Emerald Chitti Table</caption>
            <p
              className="cursor-pointer my-auto btn-link"
              onClick={HandleAddRow}
            >
              Add Row
            </p>
          </div>
          <table className="table  table-striped caption-top table-hover">
            <thead>
              <tr className="table-header-row">
                <th scope="col">No.</th>
                <th scope="col" className="w-25">
                  Sub Category
                </th>
                <th scope="col" className="w-25">
                  Product
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
                      className="form-select py-0 custom-input-field"
                      aria-label=".form-select-sm example"
                    >
                      <option></option>
                      <option>BOM</option>
                      <option>Emerald</option>
                    </select>
                  </td>
                  <td>
                    <select
                      id="product"
                      name="product"
                      className="form-select py-0 custom-input-field"
                      aria-label=".form-select-sm example"
                    >
                      <option></option>
                      <option>ANT AHM</option>
                      <option>ANT TEMPLE</option>
                      <option>Antique</option>
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

export default EmeraldChittiTable;
