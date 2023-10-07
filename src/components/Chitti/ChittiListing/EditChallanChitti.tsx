import React from 'react'
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';

const EditChallanChitti = () => {

    const { challanDetail, setNarrationTableData, subCategoryList, setTableData, productList, selectedDropdownValue, drowpdownlist }: any = UseEditChallanChitti();

    console.log("challanDetail", challanDetail)
    return (
        <div className='container'>
            <div>
                <div className="d-flex justify-content-end ">
                    <button
                        type="submit"
                        // onClick={HandleCreateChittiSubmit}
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

                                    <CreateChittiForm defaultData={data} selectedDropdownValue={selectedDropdownValue} clientNameList={drowpdownlist} />
                                    <ChallanItemsTable
                                        tableData={data?.challan_table}
                                        setTableData={setTableData}
                                        subCategoryList={subCategoryList}
                                    />
                                    <NarrationTable
                                        narrationTableData={data?.narrations}
                                        setNarrationTableData={setNarrationTableData}
                                        productList={productList}

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