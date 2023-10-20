import { useState, useEffect } from 'react';

const NarrationTable = ({
  narrationTableData,
  setNarrationTableData,
  productList,
  defaultData,
  setStateForDocStatus,
}: any) => {
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
      row.id === id
        ? { ...row, huid_pieces: parseFloat(e.target.value) || 0 }
        : row
    );
    setNarrationTableData(updatedData);
    setStateForDocStatus(true);
  };

  const HandleWeightAmount = (e: any, id: any) => {
    const updatedData = narrationTableData.map((row: any) =>
      row.id === id
        ? { ...row, huid_weight: parseFloat(e.target.value) || 0 }
        : row
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

  const HandleCategory = (e: any, id: any) => {
    console.log('handlecategory', e.target.value, id);
    const updatedData = narrationTableData.map((row: any) =>
      row.id === id ? { ...row, product: e.target.value } : row
    );
    setNarrationTableData(updatedData);
    setStateForDocStatus(true);
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
              <span className="text-danger">*</span>
            </th>
            <th scope="col">HUID Pieces</th>
            <th scope="col">HUID Weight</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {narrationTableData.map((row: any) => (
            <tr key={row.id}>
              <td className="p-0">{row.id}</td>
              <td className="table-data-input">
                <select
                  id="category"
                  name="category"
                  className="form-select p-0 custom-input-field"
                  aria-label=".form-select-sm example"
                  value={row.product}
                  onChange={(e) => HandleCategory(e, row.id)}
                >
                  <option></option>
                  {productList?.length > 0 && productList !== null ? (
                    <>
                      {productList.map((product: any, index: any) => {
                        return (
                          <option defaultValue={row.product} key={index}>
                            {product}
                          </option>
                        );
                      })}
                    </>
                  ) : (
                    ''
                  )}
                </select>
              </td>
              <td className="table-data-input">
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={row.huid_pieces >= 0 ? row.huid_pieces : ''}
                  value={row.huid_pieces > 0 ? row.huid_pieces : ''}
                  onChange={(e) => HandlePiecesAmount(e, row.id)}
                />
              </td>
              <td className="table-data-input">
                <input
                  type="text"
                  className="form-control custom-input-field"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  onKeyDown={(e) => handleKeyDown(e, row.id)}
                  defaultValue={row.huid_weight >= 0 ? row.huid_weight : ''}
                  value={row.huid_weight > 0 ? row.huid_weight : ''}
                  onChange={(e) => HandleWeightAmount(e, row.id)}
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
                value={totalAmountValue.huid_pieces}
                readOnly
              />
            </td>
            <td className="py-1 px-2">
              <input
                type="number"
                className="form-control custom-input-field-t text-center p-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={totalAmountValue.huid_weight}
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
