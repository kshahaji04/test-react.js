import { useState, useEffect, useRef } from 'react';
import CustomDropdownForTable from '../../CustomDropdownForTable';
import TotalAmountRowForChitti from './TotalAmountRowForChitti';

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

  const handleAddRow: any = () => {
    const newRow = {
      id: tableData.length + 1,
      sub_category: '',
      gross_weight: '',
      less_wt: '',
      net_weight: '',
      amount: '',
    };

    // Add the new row to the tableData
    setTableData([...tableData, newRow]);

    // Calculate the new total values, including the new row
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight || 0;
        totals.less_wt += row.less_wt || 0;
        totals.net_weight += row.net_weight || 0;
        totals.amount += row.amount || 0;
        return totals;
      },
      { gross_weight: 0, net_weight: 0, amount: 0 }
    );

    // Add the values of the new row to the totals
    newColumnTotals.gross_weight += newRow.gross_weight || 0;
    newColumnTotals.less_wt += newRow.less_wt || 0;
    newColumnTotals.net_weight += newRow.net_weight || 0;
    newColumnTotals.amount += newRow.amount || 0;

    // Update the total values

    setamountValue(newColumnTotals);
    setStateForDocStatus(true);
  };

  const handleDeleteRow: any = (id: any) => {
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
      event.preventDefault(); // Prevent the default tab behavior
      handleAddRow();
      setTimeout(() => {
        const nextInput: any = document.querySelector(
          `.input-${tableData.length + 1}`
        );
        if (nextInput) {
          nextInput.focus();
        }
      }, 0);
    }
  };


  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = tableData.reduce(
      (totals: any, row: any) => {
        totals.gross_weight += row.gross_weight || 0;
        totals.less_wt += row.less_wt || 0;
        totals.net_weight += row.net_weight || 0;
        totals.amount += row.amount || 0;
        return totals;
      },
      { gross_weight: 0, less_wt: 0, net_weight: 0, amount: 0 }
    );

    setamountValue(newColumnTotals);
  }, [tableData]);

  const handleSubCategory: any = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: value } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const handleCategoryForNewSubcategory = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, category: value } : row
    );
    setTableData(updatedData);
  };

  const handleGrossWeightValue = (e: any, id: any) => {
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

  const handleLessWeightValue = (e: any, id: any) => {
    const inputValue = parseFloat(e.target.value);
    const row = tableData.find((row: any) => row.id === id);

    if (row) {
      const grossWeight = row.gross_weight;
      const netWeight = grossWeight - inputValue;

      const updatedData = tableData.map((row: any) =>
        row.id === id
          ? { ...row, net_weight: netWeight, less_wt: inputValue }
          : row
      );

      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  const handleNetWeightValue = (e: any, id: any) => {
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

  const handleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, amount: parseFloat(e.target.value) } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const handleBlur = (event: any, id: any) => {
    console.log(event)
    if (id === tableData[tableData.length - 1].id) {
      handleAddRow();
    }
  };

  return (
    <>
      <div className="container mt-1 border rounded-3 chitti-table-container">
        <div className="d-flex justify-content-between table-heading-row">
          <caption>Challan Items</caption>
          <p
            className="cursor-pointer my-auto btn-link"
            onClick={() => {
              if (!readOnly) {
                handleAddRow();
              }
            }}
          >
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
                <th scope="col" className="challan_gr_wt_col">
                  Gross Weight
                </th>
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
                            HandleData={handleSubCategory}
                            placeholderValue="Sub Category"
                            selectedDropdownValue={row.sub_category}
                            setSelectedDropdownValue={(value: any) =>
                              handleSubCategory(value, row.id)
                            }
                            defaultData={row.sub_category}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly === true ? true : false}
                            HandleCategoryData={handleCategoryForNewSubcategory}
                            setSelectedCategoryForSubcategory={(value: any) =>
                              handleCategoryForNewSubcategory(value, row.id)
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
                        defaultValue={row.gross_weight}
                        value={row.gross_weight || ''}
                        onChange={(e) => handleGrossWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.less_wt}
                        value={row.less_wt || ''}
                        onChange={(e) => handleLessWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.net_weight}
                        value={row.net_weight || ''}
                        onChange={(e) => handleNetWeightValue(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.amount}
                        value={row.amount || ''}
                        onKeyDown={(e) => handleKeyDown(e, row.id)}
                        onChange={(e) => handleAmountValue(e, row.id)}
                        onBlur={(e) => handleBlur(e, row.id)}
                        readOnly={readOnly === true ? true : false}
                      />
                    </td>
                    <td className="table-data-input">
                      <div
                        className="d-flex align-items-center delete-link cursor-pointer"
                        onClick={() => handleDeleteRow(row.id)}
                      >
                        <i className="fa-solid fa-xmark fs-5"></i>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
              <TotalAmountRowForChitti amountValue={amountValue} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChallanItemsTable;
