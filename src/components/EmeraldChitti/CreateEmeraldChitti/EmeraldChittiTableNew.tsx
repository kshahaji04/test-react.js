import { useEffect, useRef } from 'react'
import InputFieldComponent from './InputFieldComponent'
import CustomDropdownForTable from '../../CustomDropdownForTable';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const EmeraldChittiTableNew = ({
    tableData,
    setTableData,
    // subCategoryList,
    defaultData,
    HandleAddRow,
}: any) => {

    const subCategoryList: any = ["Somit", 'BOM chain ', "Boom"]
    const dropdownWidth: any = useRef<any>(true)

    console.log("subcata")
    // useEffect(() => {
    //     console.log("default data", defaultData);
    //     if (
    //         defaultData?.length > 0 &&
    //         defaultData !== undefined &&
    //         defaultData !== null
    //     ) {
    //         defaultData.map((data: any) => {

    //             setTableData({ data });
    //         })

    //     }
    // }, [defaultData, setTableData]);


    const handleInputChange: any = (id: any, field: string, newValue: any) => {
        setTableData((prevData: any) =>
            prevData.map((row: any) => {
                if (row.id === id) {
                    let updatedRow = { ...row, [field]: newValue };

                    // Calculate cz_amt when stn_wt changes
                    if (field === 'stn_wt') {
                        const newCzAmt = parseFloat(newValue) * 10.0;
                        updatedRow = { ...updatedRow, stn_wt: newValue, cz_amt: newCzAmt, amount: newCzAmt + (parseFloat(updatedRow.cs_amt) || 0) };
                    }

                    // Calculate amount when cz_amt or cs_amt changes
                    if (field === 'cz_amt' || field === 'cs_amt') {
                        updatedRow = { ...updatedRow, amount: (parseFloat(updatedRow.cz_amt) || 0) + (parseFloat(updatedRow.cs_amt) || 0) };
                    }

                    return updatedRow;
                } else {
                    return row;
                }
            })
        );

    };

    const handleDropdownSelect = (rowId: any, selectedValue: any) => {
        setTableData((prevData: any) =>
            prevData.map((row: any) =>
                row.id === rowId ? { ...row, sub_category: selectedValue } : row
            )
        );
    };

    const HandleDeleteRow: any = (id: any) => {
        console.log("roww id", id)
        if (tableData?.length > 1) {
            const updatedData = tableData
                .filter((row: any) => row.id !== id)
                .map((row: any, index: number) => ({ ...row, id: index + 1 }));
            setTableData(updatedData);
            //   setStateForDocStatus(true);
        }
    };

    console.log("updated tabled dataa", tableData)
    return (
        <div>
            <div className="table-responsive">
                <div className="container chitti-table-container mt-1 p-1 border rounded-3">
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
                        <table className="table table-striped caption-top table-hover my-0 ">
                            <thead>
                                <tr className="table-header-row-emerald-chitti">
                                    <th scope="col">A</th>
                                    <th scope="col">B</th>
                                    <th scope="col">C</th>
                                    <th scope="col">D</th>
                                    <th scope="col">E</th>
                                    <th scope="col">Gross Weight</th>
                                    <th scope="col">STN WT</th>
                                    <th scope="col">H</th>
                                    <th scope="col">I</th>
                                    <th scope="col">J</th>
                                    <th scope="col">Net Weight</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">N</th>
                                    <th scope="col">O</th>
                                    <th scope="col">P</th>
                                    <th scope="col">Q</th>
                                    <th scope="col">R</th>
                                    <th scope="col">Sub Category</th>
                                    {/* <th scope="col">Category</th> */}
                                    <th scope="col">CZ Amt</th>
                                    <th scope="col">Cs Amt</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {tableData?.length > 0 && tableData !== null && tableData.map((row: any) => (
                                    <>
                                        <tr key={row.id}>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.a}
                                                    id={`a-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'a', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.b}
                                                    id={`b-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'b', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.c}
                                                    id={`c-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'c', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.d}
                                                    id={`d-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'd', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.b}
                                                    id={`b-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'e', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.gross_weight}
                                                    id={`gross_weight-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'gross_weight', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.stn_wt}
                                                    id={`stn_wt-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'stn_wt', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.h}
                                                    id={`h-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'h', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.i}
                                                    id={`i-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'i', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.j}
                                                    id={`j-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'j', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.net_weight}
                                                    id={`net_weight-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'net_weight', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.project}
                                                    id={`project-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'project', e.target.value)}
                                                    type="text" />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.product}
                                                    id={`product-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'product', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.n}
                                                    id={`n-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'n', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.o}
                                                    id={`o-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'o', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.p}
                                                    id={`p-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'p', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.q}
                                                    id={`q-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'q', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.r}
                                                    id={`r-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'r', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <CustomDropdownForTable
                                                    drowpdownlist={subCategoryList}
                                                    rowId={row.id}
                                                    setSelectedDropdownValue={(selectedValue: any) => handleDropdownSelect(row.id, selectedValue)}
                                                    data={tableData.find((rowData: any) => rowData.id === row.id)?.sub_category}
                                                    dropdownWidth={"true"}

                                                />

                                                {/* <InputFieldComponent value={row.sub_category}
                                                    id={`sub_category-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'sub_category', e.target.value)} /> */}
                                            </td>
                                            {/* <td className="p-0">
                                                <InputFieldComponent value={row.value}
                                                    id={`category-${row.id}`}

                                                    onChange={(e: any) => handleInputChange(row.id, 'category', e.target.value)} />
                                            </td> */}
                                            <td className="p-0">
                                                <InputFieldComponent value={row.cz_amt}
                                                    id={`cz_amt-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'cz_amt', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.cs_amt}
                                                    id={`cs_amt-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'cs_amt', e.target.value)} />
                                            </td>
                                            <td className="p-0">
                                                <InputFieldComponent value={row.amount}
                                                    id={`amount-${row.id}`}
                                                    onChange={(e: any) => handleInputChange(row.id, 'amount', e.target.value)} />
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
                                {/* <tr>
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
                                            //   value={amountValue.gross_weight?.toFixed(3)}
                                            readOnly
                                        />
                                    </td>
                                    <td className="py-1 px-2">
                                        <input
                                            type="number"
                                            className="form-control custom-input-field-t text-center p-0"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            //   value={amountValue.net_weight?.toFixed(3)}
                                            readOnly
                                        />
                                    </td>
                                    <td className="py-1 px-2">
                                        <input
                                            type="number"
                                            className="form-control custom-input-field-t text-center p-0"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            //   value={amountValue.amount?.toFixed(3)}
                                            readOnly
                                        />
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EmeraldChittiTableNew