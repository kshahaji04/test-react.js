import { useState, useEffect } from 'react';

const EmeraldChittiTable = () => {
  const [tableData, setTableData] = useState<any>([{ id: 1, name: '' }]);
  const [totalAmountValue, setTotalAmountValue] = useState<any>({ totalGrossWeight: 0, totalNetWeight: 0, totalAmount: 0 })


  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      name: `Row ${tableData.length + 1}`,
    };
    setTableData([...tableData, newRow]);
  };

  const HandleDeleteRow: any = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData = tableData.filter((row: any) => row.id !== id);
      setTableData(updatedData);
    }
  };

  const handleKeyDown = (event: any, id: any) => {
    if (event.key === 'Tab' && id === tableData[tableData.length - 1].id) {
      HandleAddRow();
    }
  };

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.totalGrossWeight += row.totalGrossWeight;
        totals.totalNetWeight += row.totalNetWeight;
        totals.totalAmount += row.totalAmount;
        return totals;
      },
      { totalGrossWeight: 0, totalNetWeight: 0, totalAmount: 0 }
    );
    setTotalAmountValue(newColumnTotals);
  }, [tableData]);

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.totalGrossWeight += row.totalGrossWeight;
        totals.totalNetWeight += row.totalNetWeight;
        totals.totalAmount += row.totalAmount;
        return totals;
      },
      { totalGrossWeight: 0, totalNetWeight: 0, totalAmount: 0 }
    );
    setTotalAmountValue(newColumnTotals);
  }, [tableData]);

  const HandleGrossWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, totalGrossWeight: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };

  const HandleNetWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, totalNetWeight: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };

  const HandleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, totalAmount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };

  return (
    <>
      <div className="table-responsive">
        <div className="container mt-1 border rounded-3">
          <div className="d-flex justify-content-between table-heading-row">
            <caption>Emerald Chitti Table</caption>
            <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
              Add Row
            </p>
          </div>
          <div className="table-responsive">
            <table className="table table-striped caption-top table-hover my-0">
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
                {tableData.map((row: any) => (
                  <>
                    <tr key={row.id}>
                      <td className='p-0'>{row.id}</td>
                      <td className='table-data-input' >
                        <select
                          id="category"
                          name="category"
                          className="form-select p-0 custom-input-field "
                          aria-label=".form-select-sm example"
                        >
                          <option></option>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                        </select>
                      </td>
                      <td className='table-data-input'>
                        <select
                          id="category"
                          name="category"
                          className="form-select p-0 custom-input-field "
                          aria-label=".form-select-sm example"
                        >
                          <option></option>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                        </select>
                      </td>
                      <td className='table-data-input'>
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={(e) => HandleGrossWeightValue(e, row.id)}
                        />
                      </td>
                      <td className='table-data-input'>
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          onChange={(e) => HandleNetWeightValue(e, row.id)}
                        />
                      </td>
                      <td className='table-data-input'>
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          onKeyDown={(e) => handleKeyDown(e, row.id)}
                          onChange={(e) => HandleAmountValue(e, row.id)}
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

                  </>
                ))}
                <tr>
                  <td></td>

                  <td className='py-1 px-2' colSpan={2}>
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
                      value={totalAmountValue.totalGrossWeight}
                      readOnly
                    />
                  </td>
                  <td className='py-1 px-2'>
                    <input
                      type="number"
                      className="form-control custom-input-field-t text-center p-0"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      value={totalAmountValue.totalNetWeight}

                      readOnly
                    />
                  </td>
                  <td className='py-1 px-2'>
                    <input
                      type="number"
                      className="form-control custom-input-field-t text-center p-0"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      value={totalAmountValue.totalAmount}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>




        {/* <div className="container border rounded-3 py-1">
          <div className="d-flex justify-content-between mb-1 table-heading-row">
            <caption>Emerald Chitti Table</caption>
            <p
              className="cursor-pointer my-auto btn-link"
              onClick={HandleAddRow}
            >
              Add Row
            </p>
          </div>
          <table className="table  table-striped caption-top table-hover my-1">
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
        </div> */}
      </div>
    </>
  );
};

export default EmeraldChittiTable;
