import { useState, useEffect } from 'react';
import CustomDropdownForTable from '../../CustomDropdownForTable';

const NarrationTable = ({
  narrationTableData,
  setNarrationTableData,
  productList,
  defaultData,
  setStateForDocStatus,
  setTotalHuidWeightOfHuidTable,
  readOnly,
}: any) => {
  console.log('product list', productList);
  const [totalAmountValue, setTotalAmountValue] = useState<any>({
    product: '',
    huid_pieces: 0,
    huid_weight: 0,
  });

  useEffect(() => {
    if (
      defaultData?.length > 0 &&
      defaultData !== undefined &&
      defaultData !== null
    ) {
      setNarrationTableData(
        defaultData.map((data: any, index: any) => ({ ...data, id: index + 1 }))
      );
    }
  }, [defaultData, setNarrationTableData]);

  useEffect(() => {
    setTotalHuidWeightOfHuidTable(totalAmountValue?.huid_weight);
  }, [totalAmountValue]);

  const HandleAddRow: any = () => {
    const newRow = {
      id: narrationTableData.length + 1,
      product: '',
      huid_pieces: 0,
      huid_weight: 0,
    };

    setNarrationTableData([...narrationTableData, newRow]);

    const newColumnTotals = narrationTableData.reduce(
      (totals: any, row: any) => {
        totals.product += row.product;
        totals.huid_pieces += row.huid_pieces;
        totals.huid_weight += row.huid_weight;
        return totals;
      },
      { product: 0, huid_pieces: 0, huid_weight: 0 }
    );

    // Add the values of the new row to the totals
    newColumnTotals.gross_weight += newRow.product;
    newColumnTotals.net_weight += newRow.huid_pieces;
    newColumnTotals.amount += newRow.huid_weight;

    // Update the total values

    setTotalAmountValue(newColumnTotals);
    setStateForDocStatus(true);
  };

  const HandleDeleteRow: any = (id: any) => {
    if (narrationTableData?.length > 1) {
      const updatedData = narrationTableData
        .filter((row: any) => row.id !== id)
        .map((row: any, index: number) => ({ ...row, id: index + 1 }));
      setNarrationTableData(updatedData);
      setStateForDocStatus(true);
    }
  };

  // Handle input Total

  useEffect(() => {
    // Calculate column totals whenever tableData changes
    const newColumnTotals = narrationTableData.reduce(
      (totals: any, row: any) => {
        totals.huid_pieces += row.huid_pieces;
        totals.huid_weight += row.huid_weight;

        return totals;
      },
      { huid_pieces: 0, huid_weight: 0 }
    );

    setTotalAmountValue(newColumnTotals);
  }, [narrationTableData]);

  const HandlePiecesAmount = (e: any, id: any) => {
    const updatedData = narrationTableData.map((row: any) =>
      row.id === id ? { ...row, huid_pieces: parseFloat(e.target.value) } : row
    );
    setNarrationTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleWeightAmount = (e: any, id: any) => {
    const updatedData = narrationTableData.map((row: any) =>
      row.id === id ? { ...row, huid_weight: parseFloat(e.target.value) } : row
    );
    setNarrationTableData(updatedData);
    setStateForDocStatus(true);
  };

  const handleKeyDown = (event: any, id: any) => {
    if (
      event.key === 'Tab' &&
      id === narrationTableData[narrationTableData.length - 1].id
    ) {
      HandleAddRow();
      setStateForDocStatus(true);
    }
  };

  const HandleCategory = (value: any, rowId: any) => {
    console.log('handlecategory', value, rowId);
    const updatedData = narrationTableData.map((row: any) =>
      row.id === rowId ? { ...row, product: value } : row
    );
    setNarrationTableData(updatedData);
    setStateForDocStatus(true);
  };

  return (
    <div className="container chitti-table-container mt-2 border rounded-3  mb-5">
      <div className="d-flex justify-content-between table-heading-row ">
        <caption>Narration- HUID</caption>
        <p className="cursor-pointer my-auto btn-link" onClick={HandleAddRow}>
          Add Row
        </p>
      </div>
      <table className="table table-striped caption-top table-hover my-0">
        <thead>
          <tr className="table-header-row">
            <th scope="col" className="px-1">
              No.
            </th>
            <th scope="col" className="narration-table-product">
              Product
            </th>
            <th scope="col">HUID Pieces</th>
            <th scope="col" className='huid_wt_header_col'>HUID Weight</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {narrationTableData.map((row: any) => (
            <tr key={row.id}>
              <td className="p-0">{row.id}</td>
              <td className="table-data-input">
                <div className="h-25 custom-select-huid-container">
                  <div className="dropdown-input-container">
                    <CustomDropdownForTable
                      drowpdownlist={
                        productList?.length > 0 &&
                        productList !== null &&
                        productList.map((huidProduct: any) => huidProduct.title)
                      }
                      data={row.product}
                      key={row.id}
                      rowId={row.id}
                      HandleData={HandleCategory}
                      placeholderValue="HUID Product"
                      selectedDropdownValue={row.sub_category}
                      setSelectedDropdownValue={(value: any) =>
                        HandleCategory(value, row.id)
                      }
                      defaultData={row.sub_category}
                      setStateForDocStatus={setStateForDocStatus}
                      readOnly={readOnly === true ? true : false}
                    />
                  </div>
                </div>
              </td>
              <td className="table-data-input">
                <input
                  type="number"
                  className="form-control custom-input-field text-end"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  // defaultValue={row.huid_pieces >= 0 ? row.huid_pieces : ''}
                  // value={row.huid_pieces > 0 ? row.huid_pieces : ''}
                  defaultValue={row.huid_pieces}
                  value={row.huid_pieces}
                  onChange={(e) => HandlePiecesAmount(e, row.id)}
                  readOnly={readOnly === true ? true : false}
                />
              </td>
              <td className="table-data-input">
                <input
                  type="number"
                  className="form-control custom-input-field text-end"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onKeyDown={(e) => handleKeyDown(e, row.id)}
                  // defaultValue={row.huid_weight >= 0 ? row.huid_weight : ''}
                  // value={row.huid_weight > 0 ? row.huid_weight : ''}
                  defaultValue={row.huid_weight}
                  value={row.huid_weight}
                  onChange={(e) => HandleWeightAmount(e, row.id)}
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
          ))}
          <tr>
            <td></td>
            <td className="py-1 px-2">
              <div className="custom-select-huid-container">
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
                value={totalAmountValue.huid_pieces?.toFixed(3)}
                readOnly
              />
            </td>
            <td className="py-1 px-2">
              <input
                type="number"
                className="form-control custom-input-field-t  p-0 text-end"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={totalAmountValue.huid_weight?.toFixed(3)}
                readOnly
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NarrationTable;
