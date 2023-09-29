import { useState, useEffect } from 'react';

const NarrationTable = () => {
  const [tableData, setTableData] = useState([{ id: 1, name: '' }]);
  const [totalAmountValue, setTotalAmountValue] = useState<any>({ totalPiecesAmount: 0, totalWeightAmount: 0 })

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

  // Handle input Total

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.totalPiecesAmount += row.totalPiecesAmount;
        totals.totalWeightAmount += row.totalWeightAmount;

        return totals;
      },
      { totalPiecesAmount: 0, totalWeightAmount: 0 }
    );
    setTotalAmountValue(newColumnTotals);
  }, [tableData]);

  const HandlePiecesAmount = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, totalPiecesAmount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };

  const HandleWeightAmount = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, totalWeightAmount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };


  return (
    <div className="container mt-2 border rounded-3  mb-5">
      <div className="d-flex justify-content-between table-heading-row ">
        <caption>Narration- HUID</caption>
        <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
          Add Row
        </p>
      </div>
      <table className="table table-striped caption-top table-hover my-0">
        <thead>
          <tr className="table-header-row">
            <th scope="col">No.</th>
            <th scope="col" className="narration-table-product">
              Product
            </th>
            <th scope="col">HUID Pieces</th>
            <th scope="col">HUID Weight</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className='p-0'>{row.id}</td>
              <td className='table-data-input'>
                <select
                  id="category"
                  name="category"
                  className="form-select p-0 custom-input-field"
                  aria-label=".form-select-sm example"
                >
                  <option></option>
                  <option>product 1</option>
                  <option>product 2</option>
                  <option>product 3</option>
                </select>
              </td>
              <td className='table-data-input'>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => HandlePiecesAmount(e, row.id)}
                />
              </td>
              <td className='table-data-input'>
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={(e) => HandleWeightAmount(e, row.id)}

                />
              </td>
              <td className='table-data-input'>
                <div
                  className="d-flex align-items-center delete-link"
                  onClick={() => HandleDeleteRow(row.id)}
                >
                  <i className="fa-solid fa-xmark fs-5"></i>
                </div>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td className='py-1 px-2'>
              <input
                type="text"
                className="form-control custom-input-field-t text-center p-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder='Total'
                readOnly
              />
            </td>
            <td className='py-1 px-2'>
              <input
                type="number"
                className="form-control custom-input-field-t text-center p-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={totalAmountValue.totalPiecesAmount}
                readOnly
              />
            </td>
            <td className='py-1 px-2'>
              <input
                type="number"
                className="form-control custom-input-field-t text-center p-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={totalAmountValue.totalWeightAmount}
                readOnly
              />
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NarrationTable;
