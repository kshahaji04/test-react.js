import { useState, useEffect, useRef } from 'react';
import CustomDropdownForTable from '../../CustomDropdownForTable';

const EmeraldChittiTable = ({
  tableData,
  setTableData,
  productItemList,
  subCategoryList,
  defaultData,
  setStateForDocStatus,
  readOnly,
}: any) => {
  const [amountValue, setamountValue] = useState<any>({
    sub_category: '',
    category: '',
    product: '',
    gross_weight: 0,
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

  const handleAddRow: any = () => {
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
      handleAddRow();
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

  const handleGrossWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, gross_weight: parseFloat(e.target.value) || 0 }
        : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const handleNetWeightValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id
        ? { ...row, net_weight: parseFloat(e.target.value) || 0 }
        : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  const handleSubCategory = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, sub_category: value } : row
    );
    setTableData(updatedData);
    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }
  };
  const handleCategoryForNewSubcategory = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, category: value } : row
    );
    setTableData(updatedData);
  };

  const handleProductItem = (value: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, product: value } : row
    );
    setTableData(updatedData);
    if (setStateForDocStatus !== undefined) {
      setStateForDocStatus(true);
    }
  };

  const handleAmountValue = (e: any, id: any) => {
    const updatedData = tableData.map((row: any) =>
      row.id === id ? { ...row, amount: parseFloat(e.target.value) || 0 } : row
    );
    setTableData(updatedData);
    setStateForDocStatus(true);
  };

  return (
    <>
      <div className="table-responsive">
        <div className="container chitti-table-container mt-1 border rounded-3">
          <div className="d-flex justify-content-between table-heading-row">
            <caption>Emerald Chitti Table</caption>
            <p
              className="cursor-pointer my-auto btn-link"
              onClick={handleAddRow}
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
                        <div className="h-25 custom-select-emerald-category">
                          <CustomDropdownForTable
                            drowpdownlist={subCategoryList}
                            data={row.sub_category}
                            key={row.id}
                            rowId={row.id}
                            placeholderValue="Sub Category"
                            HandleData={handleSubCategory}
                            selectedDropdownValue={row.sub_category}
                            setSelectedDropdownValue={(value: any) =>
                              handleSubCategory(value, row.id)
                            }
                            defaultData={row.sub_category}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly === true ? true : false}
                            dropdownIndex={row.id}
                            HandleCategoryData={handleCategoryForNewSubcategory}
                            setSelectedCategoryForSubcategory={(value: any) =>
                              handleCategoryForNewSubcategory(value, row.id)
                            }
                            showCategoryDropdown={showCategoryDropdown}
                          />
                        </div>
                      </td>
                      <td className="table-data-input">
                        <div className="h-25 custom-select-emerald-category">
                          <CustomDropdownForTable
                            drowpdownlist={
                              productItemList?.length > 0 &&
                              productItemList !== null &&
                              productItemList.map((item: any) => item.name)
                            }
                            data={row.product}
                            key={row.id}
                            rowId={row.id}
                            HandleData={handleProductItem}
                            placeholderValue="Product"
                            selectedDropdownValue={row.product}
                            setSelectedDropdownValue={(value: any) =>
                              handleProductItem(value, row.id)
                            }
                            defaultData={row.product}
                            setStateForDocStatus={setStateForDocStatus}
                            readOnly={readOnly === true ? true : false}
                            dropdownIndex={row.id}
                          />
                        </div>
                      </td>
                      <td className="table-data-input">
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          defaultValue={
                            row.gross_weight >= 0 ? row.gross_weight : ''
                          }
                          value={row.gross_weight > 0 ? row.gross_weight : ''}
                          onChange={(e) => handleGrossWeightValue(e, row.id)}
                          readOnly={readOnly === true ? true : false}
                        />
                      </td>
                      <td className="table-data-input">
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          defaultValue={
                            row.net_weight >= 0 ? row.net_weight : ''
                          }
                          value={row.net_weight > 0 ? row.net_weight : ''}
                          onChange={(e) => handleNetWeightValue(e, row.id)}
                          readOnly={readOnly === true ? true : false}
                        />
                      </td>
                      <td className="table-data-input">
                        <input
                          type="number"
                          className="form-control custom-input-field-t"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-sm"
                          onKeyDown={(e) => handleKeyDown(e, row.id)}
                          defaultValue={row.amount >= 0 ? row.amount : ''}
                          value={row.amount > 0 ? row.amount : ''}
                          onChange={(e) => handleAmountValue(e, row.id)}
                          readOnly={readOnly === true ? true : false}
                        />
                      </td>
                      <td className="table-data-input">
                        <div
                          className="d-flex align-items-center delete-link"
                          onClick={() => handleDeleteRow(row.id)}
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
                      value={amountValue.gross_weight?.toFixed(3)}
                      readOnly
                    />
                  </td>
                  <td className="py-1 px-2">
                    <input
                      type="number"
                      className="form-control custom-input-field-t text-center p-0"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      value={amountValue.net_weight?.toFixed(3)}
                      readOnly
                    />
                  </td>
                  <td className="py-1 px-2">
                    <input
                      type="number"
                      className="form-control custom-input-field-t text-center p-0"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      value={amountValue.amount?.toFixed(3)}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmeraldChittiTable;
