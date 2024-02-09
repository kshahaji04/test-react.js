import { useState, useEffect, useRef } from 'react';

import CustomDropdownForTable from '../../CustomDropdownForTable';

const ChallanItemsTable = ({
  tableData,
  setTableData,
  subCategoryList,
  defaultData,
  setStateForDocStatus,
  setTotalGrossWeightOfChallanTable,
  readOnly,
  setCheckGrossAndNetWeight,
}: any) => {
  const [amountValue, setamountValue] = useState<any>({
    sub_category: '',
    category: '',
    gross_weight: 0,
    less_wt: 0,
    net_weight: 0,
    amount: 0,
  });

  console.log('initial table data', tableData);

  const showCategoryDropdown: any = useRef<any>(true);
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

  useEffect(() => {
    setTotalGrossWeightOfChallanTable(amountValue?.gross_weight);
    setCheckGrossAndNetWeight({
      gross_weight: amountValue?.gross_weight,
      net_weight: amountValue?.net_weight,
    });
  }, [amountValue]);

  const HandleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      sub_category: '',
      gross_weight: 0,
      less_wt: 0,
      net_weight: 0,
      amount: 0,
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);

    // Calculate the new total values, including the new row
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight;
        totals.less_wt += row.less_wt;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );

    // Add the values of the new row to the totals
    newColumnTotals.gross_weight += newRow.gross_weight;
    newColumnTotals.less_wt += newRow.less_wt;
    newColumnTotals.net_weight += newRow.net_weight;
    newColumnTotals.amount += newRow.amount;

    // Update the total values

    setamountValue(newColumnTotals);
    setStateForDocStatus(true);
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
        totals.less_wt += row.less_wt;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, less_wt: 0, net_weight: 0, amount: 0 }
    );

    setamountValue(newColumnTotals);
  }, [tableData]);

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight;
        totals.less_wt += row.less_wt;
        totals.net_weight += row.net_weight;
        totals.amount += row.amount;
        return totals;
      },
      { gross_weight: 0, less_wt: 0, net_weight: 0, amount: 0 }
    );

    setamountValue(newColumnTotals);
  }, [tableData]);

  const HandleSubCategory: any = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: value } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleCategoryForNewSubcategory = (value: any, id: any) => {
    console.log('handlecategory', value);
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, category: value } : row
    );
    setTableData(updatedData);
  };

  const HandleGrossWeightValue = (e: any, id: any) => {
    const inputValue = parseFloat(e.target.value);
    const row = tableData.find((row: any) => row.id === id);

    if (row) {
      const lessWeight = row.less_wt;
      const netWeight = inputValue - lessWeight;

      const updatedData = tableData.map((row: any) =>
        row.id === id
          ? { ...row, gross_weight: inputValue, net_weight: netWeight }
          : row
      );

      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  const HandleLessWeightValue = (e: any, id: any) => {
    const inputValue = parseFloat(e.target.value);
    const row = tableData.find((row: any) => row.id === id);

    if (row) {
      const grossWeight = row.gross_weight;
      const netWeight = grossWeight - inputValue;
      // const grossWeightUpdated = inputValue + row.net_weight

      const updatedData = tableData.map((row: any) =>
        row.id === id
          ? { ...row, net_weight: netWeight, less_wt: inputValue }
          : row
      );
      // const updatedData = tableData.map((row: any) =>
      //   row.id === id ? { ...row, less_wt: inputValue } : row
      // );

      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  const HandleNetWeightValue = (e: any, id: any) => {
    const inputValue = parseFloat(e.target.value);
    const row = tableData.find((row: any) => row.id === id);

    if (row) {
      const grossWeight = row.gross_weight;
      const lessWeight = grossWeight - inputValue;
      // const grossWeightUpdated = row.less_wt + inputValue

      const updatedData = tableData.map((row: any) =>
        row.id === id
          ? { ...row, less_wt: lessWeight, net_weight: inputValue }
          : row
      );

      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  const HandleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, amount: parseFloat(e.target.value) } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  return (
    <>
      <div className="container mt-1 border rounded-3 chitti-table-container">
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
                <th scope="col" className="px-1">
                  No.
                </th>
                <th scope="col" className="challan_sub_cat_col">
                  Sub Category
                  <span className="text-danger">*</span>
                </th>
                <th scope="col" className='challan_gr_wt_col'>Gross Weight</th>
                <th scope="col">Less Weight</th>
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
                      <div className="h-25 custom-select-container">
                        <div className="dropdown-input-container">
                          <CustomDropdownForTable
                            drowpdownlist={subCategoryList}
                            data={row.sub_category}
                            key={row.id}
                            rowId={row.id}
                            HandleData={HandleSubCategory}
                            placeholderValue="Sub Category"
                            selectedDropdownValue={row.sub_category}
                            setSelectedDropdownValue={(value: any) =>
                              HandleSubCategory(value, row.id)
                            }
                            defaultData={row.sub_category}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly === true ? true : false}
                            HandleCategoryData={HandleCategoryForNewSubcategory}
                            setSelectedCategoryForSubcategory={(value: any) =>
                              HandleCategoryForNewSubcategory(value, row.id)
                            }
                            showCategoryDropdown={showCategoryDropdown}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.gross_weight}
                        value={row.gross_weight}
                        onChange={(e) => HandleGrossWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        defaultValue={row.less_wt}
                        value={row.less_wt}
                        onChange={(e) => HandleLessWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        // defaultValue={row.net_weight >= 0 ? row.net_weight : ''}
                        // value={row.net_weight > 0 ? row.net_weight : ''}
                        defaultValue={row.net_weight}
                        value={row.net_weight}
                        onChange={(e) => HandleNetWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        // defaultValue={row.amount >= 0 ? row.amount : ''}
                        // value={row.amount > 0 ? row.amount : ''}
                        defaultValue={row.amount}
                        value={row.amount}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        onChange={(e) => HandleAmountValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
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
                  <div className="custom-select-container">
                    <input
                      type="text"
                      className="form-control custom-input-field-t text-center p-0 "
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Total"
                      readOnly
                    />
                  </div>
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.gross_weight.toFixed(3)}
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.less_wt.toFixed(3)}
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.net_weight?.toFixed(3)}
                    readOnly
                  />
                </td>
                <td className="py-1 px-2">
                  <input
                    type="number"
                    className="form-control custom-input-field-t  p-0 text-end"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    value={amountValue.amount?.toFixed(2)}
                    readOnly
                  />
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChallanItemsTable;
