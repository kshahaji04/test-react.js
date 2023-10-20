import { useState, useEffect } from 'react';

const ChallanItemsTable = ({
  tableData,
  setTableData,
  subCategoryList,
  defaultData,
  setStateForDocStatus,
}: any) => {
  const [amountValue, setamountValue] = useState<any>({
    sub_category: '',
    gross_weight: 0,
    net_weight: 0,
    amount: 0,
  });

  console.log('initial table data', tableData);

  useEffect(() => {
    if (
      defaultData?.length > 0 &&
      defaultData !== undefined &&
      defaultData !== null
    ) {
      setTableData(
        defaultData.map((data: any, index: any) => ({ ...data, id: index + 1 }))
      );
    }
  }, [defaultData, setTableData]);

  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      sub_category: '',
      gross_weight: 0,
      net_weight: 0,
      amount: 0,
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);

    // Calculate the new total values, including the new row
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );

    // Add the values of the new row to the totals
    newColumnTotals.gross_weight += newRow.gross_weight;
    newColumnTotals.net_weight += newRow.net_weight;
    newColumnTotals.amount += newRow.amount;

    // Update the total values
    setamountValue(newColumnTotals);
  };

  const HandleDeleteRow: any = (id: any) => {
    if (tableData?.length > 1) {
      const updatedData = tableData
        .filter((row: any) => row.id !== id)
        .map((row: any, index: number) => ({ ...row, id: index + 1 }));
      setTableData(updatedData);
      setStateForDocStatus(true);
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

  const HandleSubCategory: any = (e: any, id: any) => {
    console.log('handlesubcategory', e.target.value, id);
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: e.target.value } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  console.log('handlecategory sub category', tableData);

  const HandleGrossWeightValue = (e: any, id: any) => {
    console.log('gross', e.target.value, id);
    const inputValue = parseFloat(e.target.value);
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, gross_weight: inputValue || 0 } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleNetWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, net_weight: parseFloat(e.target.value) || 0 }
        : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, amount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
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
          <table className="table table-striped caption-top table-hover my-0">
            <thead>
              <tr className="table-header-row">
                <th scope="col">No.</th>
                <th scope="col" className="w-50">
                  Sub Category
                  <span className="text-danger">*</span>
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
                    <td className="p-0">{row.id}</td>
                    <td className="table-data-input">
                      <select
                        id="subcategory"
                        name="subcategory"
                        className="form-select p-0 custom-input-field "
                        aria-label=".form-select-sm example"
                        value={row.sub_category}
                        onChange={(e) => HandleSubCategory(e, row.id)}
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
                        type="text"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={
                          row.gross_weight >= 0 ? row.gross_weight : ''
                        }
                        value={row.gross_weight > 0 ? row.gross_weight : ''}
                        onChange={(e) => HandleGrossWeightValue(e, row.id)}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="text"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.net_weight >= 0 ? row.net_weight : ''}
                        value={row.net_weight > 0 ? row.net_weight : ''}
                        onChange={(e) => HandleNetWeightValue(e, row.id)}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="text"
                        className="form-control custom-input-field-t"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.amount >= 0 ? row.amount : ''}
                        value={row.amount > 0 ? row.amount : ''}
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
