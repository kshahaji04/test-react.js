import { useState, useEffect } from 'react';

const ChallanItemsTable = ({
  tableData,
  setTableData,
  subCategoryList,
  defaultData,
}: any) => {
  console.log('tableDataaa initial', tableData);
  // const [tableData, setTableData] = useState<any>([{ id: 1 }]);
  const [amountValue, setamountValue] = useState<any>({
    sub_category: '',
    gross_weight: 0,
    net_weight: 0,
    amount: 0,
  });
  console.log('defaultData', defaultData);
  useEffect(() => {
    if (
      defaultData?.length > 0 &&
      defaultData !== undefined &&
      defaultData !== null
    ) {
      setTableData(defaultData);
    }
  }, []);

  // const updateParentTableData = (newData:any) => {
  //   console.log("newdata",ne)
  //   setTableData(newData);
  // };

  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      // name: `Row ${tableData.length + 1}`,
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
        totals.gross_weight += row.gross_weight;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );
    setamountValue(newColumnTotals);
  }, [tableData]);

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );
    setamountValue(newColumnTotals);
  }, [tableData]);

  const HandleCategory = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: e.target.value } : row
    );
    setTableData([...updatedData]);
  };

  const HandleGrossWeightValue = (e: any, id: any) => {
    console.log('gross', e.target.value);
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, gross_weight: parseFloat(e.target.value) || 0 }
        : row
    );
    setTableData(updatedData);
  };

  const HandleNetWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, net_weight: parseFloat(e.target.value) || 0 }
        : row
    );
    setTableData(updatedData);
  };

  const HandleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, amount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
  };

  console.log('updated tabledata', tableData);

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
          <table className="table table-striped caption-top table-hover my-0">
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
              {tableData.map((row: any, index: any) => (
                <>
                  <tr key={row.id}>
                    <td className="p-0">{row.id}</td>
                    <td className="table-data-input">
                      <select
                        id="category"
                        name="category"
                        className="form-select p-0 custom-input-field "
                        aria-label=".form-select-sm example"
                        defaultValue={row.sub_category}
                        onChange={(e) => HandleCategory(e, row.id)}
                      >
                        <option defaultValue={row.sub_category}></option>
                        {subCategoryList?.length > 0 &&
                        subCategoryList !== null ? (
                          <>
                            {subCategoryList.map(
                              (category: any, index: any) => {
                                return (
                                  <option
                                    defaultValue={row.sub_category}
                                    key={index}
                                  >
                                    {category}
                                  </option>
                                );
                              }
                            )}
                          </>
                        ) : (
                          ''
                        )}
                      </select>
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.gross_weight}
                        onChange={(e) => HandleGrossWeightValue(e, row.id)}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.net_weight}
                        onChange={(e) => HandleNetWeightValue(e, row.id)}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.amount}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        onChange={(e) => HandleAmountValue(e, row.id)}
                      />
                    </td>
                    <td className="table-data-input">
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
                <td className="py-1 px-2">
                  <input
                    type="text"
                    className="form-control custom-input-field-t text-center p-0"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Total"
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t text-center p-0"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.gross_weight}
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t text-center p-0"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.net_weight}
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t text-center p-0"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.amount}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChallanItemsTable;
