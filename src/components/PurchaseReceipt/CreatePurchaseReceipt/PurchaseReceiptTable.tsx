import TotalAmountRowForChitti from '../../Chitti/CreateChitti/TotalAmountRowForChitti';
import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const PurchaseReceiptTable = ({
  purchaseReceiptTable,
  handlePurchaseTableFieldChange,
  handleDeleteRow,
  handleAddRow,
  subCategoryList,
  amountValue,
  handleKeyDown,
  readOnlyFields,
}: any) => {
  const subCategoryData: any = {
    fieldname: 'sub_category',
    fieldtype: 'Link',
    link_data: subCategoryList,
  };
  return (
    <div className="container mt-1 border rounded-3 chitti-table-container">
      <div className="d-flex justify-content-between table-heading-row">
        <caption>Challan Items</caption>
        <p
          className="cursor-pointer my-auto btn-link"
          onClick={() => {
            if (!readOnlyFields) {
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
                Gross Wt
              </th>
              <th scope="col">Less Wt</th>
              <th scope="col">Net Wt</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {purchaseReceiptTable?.length > 0 &&
              purchaseReceiptTable.map((row: any) => (
                <>
                  <tr key={row.idx}>
                    <td className="p-0">{row.idx}</td>
                    <td className="table-data-input">
                      <div className="h-25 custom-select-container">
                        {/* <div className="dropdown-input-container"> */}
                        <AutoCompleteInput
                          data={subCategoryData}
                          handleSearchInput={(value: any, fieldName: any) =>
                            handlePurchaseTableFieldChange(
                              value,
                              fieldName,
                              row.idx
                            )
                          }
                          defaultValue={row?.sub_category}
                          readOnlyFields={readOnlyFields}
                        />
                      </div>
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.gross_weight}
                        value={row.gross_weight}
                        onChange={(e) =>
                          handlePurchaseTableFieldChange(
                            e.target.value,
                            'gross_weight',
                            row.idx
                          )
                        }
                        readOnly={readOnlyFields}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.less_weight}
                        value={row.less_weight}
                        onChange={(e) =>
                          handlePurchaseTableFieldChange(
                            e.target.value,
                            'less_weight',
                            row.idx
                          )
                        }
                        readOnly={readOnlyFields}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.net_weight}
                        value={row.net_weight}
                        onChange={(e) =>
                          handlePurchaseTableFieldChange(
                            e.target.value,
                            'net_weight',
                            row.idx
                          )
                        }
                        readOnly={readOnlyFields}
                      />
                    </td>
                    <td className="table-data-input">
                      <input
                        type="number"
                        className="form-control custom-input-field-t text-end"
                        defaultValue={row.amount}
                        value={row.amount}
                        onKeyDown={(e) => handleKeyDown(e, row.idx)}
                        onChange={(e) =>
                          handlePurchaseTableFieldChange(
                            e.target.value,
                            'amount',
                            row.idx
                          )
                        }
                        //   onBlur={(e) => handleBlur(e, row.id)}
                        readOnly={readOnlyFields}
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
            <TotalAmountRowForChitti amountValue={amountValue} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseReceiptTable;
