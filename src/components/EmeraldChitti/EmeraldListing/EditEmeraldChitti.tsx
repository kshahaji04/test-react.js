import React from 'react'
import CreateEmeraldChittiMaster from '../CreateEmeraldChitti/CreateEmeraldChittiMaster';
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import UseEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';
import EmeraldCreateChitti from '../CreateEmeraldChitti/EmeraldCreateChitti';
import EmeraldChittiTable from '../CreateEmeraldChitti/EmeraldChittiTable';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import UseEditEmeraldChittiHook from '../../../hooks/Emerald/edit-emerald-chitti-hook';

const EditEmeraldChitti = () => {
    // const { emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, productItemList, HandleClientGroup, HandleCreateEmeraldChittiSubmit, clientGroupList,
    //     clientNameList, currentDate, handleDateChange, transactionDate, tableData, setTableData, challanDetail }: any = UseEmeraldChittiHook();

    const { subCategoryList } = UseSubCategoryHook();
    const { emeraldChittiData, selectedDropdownValue, setSelectedDropdownValue, productItemList, HandleClientGroup, HandleCreateEmeraldChittiSubmit, clientGroupList,
        clientNameList, currentDate, handleDateChange, transactionDate, tableData, setTableData, challanDetail,HandleUpdateEmeraldChittiSubmit}: any = UseEditEmeraldChittiHook();

        return (
        <div className='container'>
            <div>
                <div className="d-flex justify-content-end ">
                    <button
                        type="submit"
                        onClick={HandleUpdateEmeraldChittiSubmit}
                        className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
                    >
                        Submit
                    </button>
                </div>
                <div>
                    {challanDetail?.length > 0 &&
                        challanDetail !== null &&
                        challanDetail.map((data: any, index: any) => {
                            console.log('valuess emerald', data);

                            return (
                                <>
                                    <EmeraldCreateChitti  defaultData={data} selectedDropdownValue={selectedDropdownValue} setSelectedDropdownValue={setSelectedDropdownValue}
                                        HandleClientGroup={HandleClientGroup} clientGroupList={clientGroupList}
                                        clientNameList={clientNameList} currentDate={currentDate} handleDateChange={handleDateChange} transactionDate={transactionDate} />

                                    <EmeraldChittiTable  defaultData={data?.challan_table} tableData={tableData} setTableData={setTableData}
                                     subCategoryList={subCategoryList} 
                                     productItemList={productItemList} />
                                </>
                            );
                        })}
                </div>

            </div>

        </div>
    )
}

export default EditEmeraldChitti