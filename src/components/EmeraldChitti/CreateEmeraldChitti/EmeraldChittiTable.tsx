import { useState, useEffect } from 'react';

const EmeraldChittiTable = ({
  tableData,
  setTableData,
  productItemList,
  subCategoryList,
  defaultData,
  setStateForDocStatus,
}: any) => {
  const [amountValue, setamountValue] = useState<any>({
    sub_category: '',
    product: '',
    gross_weight: 0,
    net_weight: 0,
    amount: 0,
  });

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
      product: '',
      gross_weight: 0,
      net_weight: 0,
      amount: 0,
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);
    setStateForDocStatus(true);

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
      const updatedData = tableData.filter((row: any) => row.id !== id);
      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  const handleKeyDown = (event: any, id: any) => {
    if (event.key === 'Tab' && id === tableData[tableData.length - 1].id) {
      HandleAddRow();
      setStateForDocStatus(true);
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

  const HandleGrossWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, gross_weight: parseFloat(e.target.value) || 0 }
        : row
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

  const HandleSubCategory = (e: any, id: any) => {
    console.log('handlecategory', e.target.value);
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: e.target.value } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleProductItem = (e: any, id: any) => {
    console.log('handlecategory', e.target.value);
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, product: e.target.value } : row
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
      <div className="table-responsive">
        <div className="container mt-1 border rounded-3">
          <div className="d-flex justify-content-between table-heading-row">
            <caption>Emerald Chitti Table</caption>
            <p
              className="cursor-pointer my-auto btn-link"
              onClick={HandleAddRow}
            >
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
                    <span className="text-danger">*</span>
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
                            subCategoryList !== null &&
                            subCategoryList.map((subCategoryList: any) => {
                              return (
                                <option defaultValue={row.sub_category}>
                                  {subCategoryList}
                                </option>
                              );
                            })}
                        </select>
                      </td>
                      <td className="table-data-input">
                        <select
                          id="category"
                          name="category"
                          className="form-select p-0 custom-input-field "
                          aria-label=".form-select-sm example"
                          value={row.product}
                          onChange={(e) => HandleProductItem(e, row.id)}
                        >
                          <option defaultValue={row.product}></option>
                          {productItemList?.length > 0 &&
                            productItemList !== null && (
                              <>
                                {productItemList.map(
                                  (product: any, index: any) => (
                                    <option key={index}>
                                      {Object?.values(product)}
                                    </option>
                                  )
                                )}
                              </>
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
                          defaultValue={
                            row.net_weight >= 0 ? row.net_weight : ''
                          }
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
                          onKeyDown={(e) => handleKeyDown(e, row.id)}
                          defaultValue={row.amount >= 0 ? row.amount : ''}
                          value={row.amount > 0 ? row.amount : ''}
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

                  <td className="py-1 px-2" colSpan={2}>
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
