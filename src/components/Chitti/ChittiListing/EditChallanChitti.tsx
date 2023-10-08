import React, { useState } from 'react'
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';

const EditChallanChitti = () => {

    const { challanDetail, setNarrationTableData, subCategoryList, productList, selectedDropdownValue, drowpdownlist, setTableData, HandleDateChange, clientNameList, setSelectedDropdownValue, HandleUpdateChallanSubmit, HandleGoldRate,
        HandleRemarks }: any = UseEditChallanChitti();

    const [isEditing, setIsEditing] = useState(true);
    const [editedData, setEditedData] = useState([]);


    // console.log("editedData", tableData)
    return (
        <div className='container'>
            <div>
                <div className="d-flex justify-content-end ">
                    <button
                        type="submit"
                        onClick={HandleUpdateChallanSubmit}
                        className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
                    >
                        Submit
                    </button>
                </div>
                <div>
                    {challanDetail?.length > 0 &&
                        challanDetail !== null &&
                        challanDetail.map((data: any, index: any) => {
                            console.log('valuess da', data);

                            return (
                                <>

                                    <CreateChittiForm defaultData={data} HandleDateChange={HandleDateChange} selectedDropdownValue={selectedDropdownValue} clientNameList={clientNameList} setSelectedDropdownValue={setSelectedDropdownValue} HandleGoldRate={HandleGoldRate}
                                        HandleRemarks={HandleRemarks} />
                                    <ChallanItemsTable
                                        tableData={data?.challan_table}
                                        setTableData={setTableData}
                                        subCategoryList={subCategoryList}
                                        isEditing={isEditing}
                                        editedData={editedData}
                                        setEditedData={setEditedData}
                                    />
                                    <NarrationTable
                                        narrationTableData={data?.narrations}
                                        setNarrationTableData={setNarrationTableData}
                                        productList={productList}
                                        isEditing={isEditing}
                                        setEditedData={setEditedData}

                                    />
                                </>
                            );
                        })}
                </div>

            </div>

        </div>
    )
}

export default EditChallanChitti