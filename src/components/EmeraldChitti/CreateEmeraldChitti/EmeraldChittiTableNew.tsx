import { useEffect, useRef, useState } from 'react';
import InputFieldComponent from './InputFieldComponent';
import CustomDropdownForTable from '../../CustomDropdownForTable';
import EmeraldChittiTableReadOnlyRow from './EmeraldChittiTableReadOnlyRow';
import { toast } from 'react-toastify';

const EmeraldChittiTableNew = ({
  tableData,
  setTableData,
  subCategoryList,
  defaultData,
  handleAddRow,
  readOnly,
  setStateForDocStatus,
}: any) => {
  const ShowCategoryDropdown: any = useRef<any>(true);
  const inputRef: any = useRef<HTMLInputElement>(null);
  const [calculationRow, setCalculationRow] = useState({
    gross_weight: 0,
    stn_wt: 0,
    net_weight: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    amount: 0,
    custom_hm_pcs: 0,
  });

  setTimeout(() => {
    const allFieldsExceptExceptionsFilled = Object.keys(
      tableData[tableData.length - 1]
    )
      .filter((key) => key !== 'idx')
      .every((key) => tableData[tableData.length - 1][key] === '');

    if (
      inputRef.current &&
      allFieldsExceptExceptionsFilled &&
      document?.activeElement?.id !== 'exampleInputEmail1'
    ) {
      inputRef.current.focus();
    }
  }, 0);

  const addIdToRows = (rows: any) => {
    return rows.map((row: any, index: any) => ({
      ...row,
      id: index + 1,
    }));
  };
  useEffect(() => {
    if (
      defaultData?.length > 0 &&
      defaultData !== undefined &&
      defaultData !== null
    ) {
      const dataWithIds = addIdToRows(defaultData);
      setTableData(dataWithIds);
    }
  }, [defaultData, setTableData]);

  useEffect(() => {
    // Recalculate live calculations whenever tableData changes
    calculateLiveCalculations();
  }, [tableData, setTableData]);

  const calculateLiveCalculations = async () => {
    // Calculate live values based on tableData
    const liveCalculations = tableData.reduce(
      (accumulator: any, row: any) => {
        accumulator.gross_weight += parseFloat(row.gross_weight) || 0;
        accumulator.stn_wt += parseFloat(row.stn_wt) || 0;
        accumulator.net_weight += parseFloat(row.net_weight) || 0;
        accumulator.h += parseFloat(row.h) || 0;
        accumulator.i += parseFloat(row.i) || 0;
        accumulator.j += parseFloat(row.j) || 0;
        accumulator.k += parseFloat(row.k) || 0;
        accumulator.amount += parseFloat(row.amount) || 0;
        accumulator.custom_hm_pcs += parseFloat(row.custom_hm_pcs) || 0;
        return accumulator;
      },
      {
        gross_weight: 0,
        stn_wt: 0,
        net_weight: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        amount: 0,
        custom_hm_pcs: 0,
      }
    );

    // Update the calculation row state
    setCalculationRow(liveCalculations);
  };

  const handleInputChange: any = (id: any, field: string, newValue: any) => {
    setTableData((prevData: any) =>
      prevData.map((row: any, index: number) => {
        if (row.idx === id) {
          let updatedRow = { ...row, [field]: newValue };

          // Calculate amount when cz_amt or cs_amt changes
          if (field === 'i' || field === 'k') {
            updatedRow = {
              ...updatedRow,
              amount:
                (parseFloat(updatedRow.i) || 0) +
                (parseFloat(updatedRow.k) || 0),
            };
          }
          const isDuplicate = prevData.some((existingRow: any) => 
            existingRow !== row &&
            Object.keys(updatedRow).every(key => 
              key === 'idx' || updatedRow[key] === existingRow[key])
          );
          if (isDuplicate) {
            toast.error("Duplicate entry found. Please enter uniique values")
            handleDeleteRow(id)
            return row
          }
          // Check if the current row is the last row and all fields are filled
          
          setStateForDocStatus(true);
          return updatedRow;
        } else {
          return row;
        }
      })
    );
  };
  useEffect(() => {
    const lastRow = tableData[tableData.length - 1];
    const allFieldsFilledExceptExceptions = Object.keys(lastRow)
      .filter(
        key =>
          key !== 'custom_hm_pcs' &&
          key !== 'sub_category' &&
          key !== 'category' &&
          key !== 'stn_wt'
      )
      .every(key => lastRow[key] !== '');
  
    if (allFieldsFilledExceptExceptions) {
      handleAddRow();
    }
  }, [tableData]);
  const handleDropdownSelect = (rowId: any, selectedValue: any) => {
    setTableData((prevData: any) =>
      prevData.map((row: any) =>
        row.idx === rowId ? { ...row, sub_category: selectedValue } : row
      )
    );
    setStateForDocStatus(true);
  };

  const handleDeleteRow: any = (id: any) => {
    console.log('roww id', id);
    if (tableData?.length > 1) {
      const updatedData = tableData
        .filter((row: any) => row.idx !== id)
        .map((row: any, index: number) => ({ ...row, idx: index + 1 }));
      setTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  // console.log('updated tabled dataa', tableData);
  return (
    <div>
      <div className="table-responsive">
        <div className="container chitti-table-container mt-1 p-1 border rounded-3">
          <div className="d-flex justify-content-between table-heading-row">
            <caption>Emerald Chitti Table</caption>
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
                <tr className="table-header-row-emerald-chitti ">
                  <th scope="col" className="px-1">
                    No.
                  </th>
                  <th scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                  <th scope="col">E</th>
                  <th scope="col">Gross Weight</th>
                  <th scope="col">STN WT</th>
                  <th scope="col"> Stone Pcs</th>
                  <th scope="col">Stn Amt</th>
                  <th scope="col">OT Wt</th>
                  <th scope="col">Ot Amt</th>
                  <th scope="col">Net Weight</th>
                  <th scope="col">Project</th>
                  <th scope="col">Product</th>
                  <th scope="col">O</th>
                  <th scope="col">P</th>
                  <th scope="col">Q</th>
                  <th scope="col">R</th>
                  <th scope="col">Sub Category</th>
                  {/* <th scope="col">Category</th> */}
                  {/* <th scope="col">CZ Amt</th>
                  <th scope="col">Cs Amt</th> */}
                  <th scope="col">Amount</th>
                  <th scope="col">Hm Pcs</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {tableData?.length > 0 &&
                  tableData !== null &&
                  tableData.map((row: any) => (
                    <>
                      <tr key={row.idx}>
                        <td className="emerald_chitti_table_td px-0">
                          {row.idx}
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.a}
                            readOnly={readOnly}
                            id={`a-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'a', e.target.value)
                            }
                            inputRef={inputRef}
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.b}
                            readOnly={readOnly}
                            id={`b-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'b', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.c}
                            readOnly={readOnly}
                            id={`c-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'c', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.d}
                            readOnly={readOnly}
                            id={`d-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'd', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.e}
                            readOnly={readOnly}
                            id={`e-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'e', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="number"
                            value={row.gross_weight}
                            readOnly={readOnly}
                            id={`gross_weight-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'gross_weight',
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="number"
                            value={row.stn_wt}
                            readOnly={readOnly}
                            id={`stn_wt-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'stn_wt',
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.h}
                            readOnly={readOnly}
                            id={`h-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'h', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.i}
                            readOnly={readOnly}
                            id={`i-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'i', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.j}
                            readOnly={readOnly}
                            id={`j-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'j', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.k}
                            readOnly={readOnly}
                            id={`k-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'k', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="number"
                            value={row.net_weight}
                            readOnly={readOnly}
                            id={`net_weight-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'net_weight',
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.project}
                            readOnly={readOnly}
                            id={`project-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'project',
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.product}
                            readOnly={readOnly}
                            id={`product-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'product',
                                e.target.value
                              )
                            }
                          />
                        </td>

                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.o}
                            readOnly={readOnly}
                            id={`o-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'o', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.p}
                            readOnly={readOnly}
                            id={`p-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'p', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.q}
                            readOnly={readOnly}
                            id={`q-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'q', e.target.value)
                            }
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            type="text"
                            value={row.r}
                            id={`r-${row.idx}`}
                            readOnly={readOnly}
                            onChange={(e: any) =>
                              handleInputChange(row.idx, 'r', e.target.value)
                            }
                            handleAddRow={handleAddRow}
                          />
                        </td>
                        <td className="emerald_chitti_table_td position-relative">
                          <CustomDropdownForTable
                            drowpdownlist={subCategoryList}
                            readOnly={readOnly}
                            rowId={row.idx}
                            setSelectedDropdownValue={(selectedValue: any) =>
                              handleDropdownSelect(row.idx, selectedValue)
                            }
                            data={
                              tableData.find(
                                (rowData: any) => rowData.idx === row.idx
                              )?.sub_category
                            }
                            dropdownWidth={'true'}
                            showCategoryDropdown={ShowCategoryDropdown}
                          />
                        </td>
                        {/* <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            value={row.cz_amt}
                            readOnly={readOnly}
                            id={`cz_amt-${row.id}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.id,
                                'cz_amt',
                                e.target.value
                              )
                            }
                            type="number"
                            handleKeyDown={handleKeyDown}
                            handleOnFocus={handleOnFocus}
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            value={row.cs_amt}
                            readOnly={readOnly}
                            id={`cs_amt-${row.id}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.id,
                                'cs_amt',
                                e.target.value
                              )
                            }
                            type="number"
                            handleKeyDown={handleKeyDown}
                            handleOnFocus={handleOnFocus}
                          />
                        </td> */}
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            value={row.amount}
                            readOnly={true}
                            id={`amount-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'amount',
                                e.target.value
                              )
                            }
                            type="number"
                          />
                        </td>
                        <td className="emerald_chitti_table_td">
                          <InputFieldComponent
                            value={row.custom_hm_pcs}
                            readOnly={readOnly}
                            id={`custom_hm_pcs-${row.idx}`}
                            onChange={(e: any) =>
                              handleInputChange(
                                row.idx,
                                'custom_hm_pcs',
                                e.target.value
                              )
                            }
                            type="number"
                            handleAddRow={handleAddRow}
                          />
                        </td>
                        <td className="table-data-input">
                          <div
                            className="d-flex align-items-center delete-link cursor-pointer"
                            onClick={() => handleDeleteRow(row.idx)}
                          >
                            <i className="fa-solid fa-xmark fs-5"></i>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                <EmeraldChittiTableReadOnlyRow
                  calculationRow={calculationRow}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmeraldChittiTableNew;
