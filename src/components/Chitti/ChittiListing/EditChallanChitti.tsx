import React, { useState } from 'react';
import UseEditChallanChitti from '../../../hooks/Chitti/edit-challan-chitti-hook';
import CreateChittiForm from '../CreateChitti/CreateChittiForm';
import ChallanItemsTable from '../CreateChitti/ChallanItemsTable';
import NarrationTable from '../CreateChitti/NarrationTable';

const EditChallanChitti = () => {
  const {
    challanDetail,
    setNarrationTableData,
    subCategoryList,
    productList,
    selectedDropdownValue,
    drowpdownlist,
    setTableData,
    HandleDateChange,
    clientNameList,
    setSelectedDropdownValue,
    HandleUpdateChallanSubmit,
    HandleGoldRate,
    HandleRemarks,
    tableData,
    narrationTableData,
    clientGroupList
  }: any = UseEditChallanChitti();


  // console.log("editedData", tableData)
  return (
    <div className="container">
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
          {challanDetail?.length > 0 && challanDetail !== null
            ? challanDetail.map((data: any, index: any) => {
                return (
                  <>
                    <CreateChittiForm
                      defaultData={data}
                      HandleDateChange={HandleDateChange}
                      selectedDropdownValue={selectedDropdownValue}
                      clientNameList={clientNameList}
                      setSelectedDropdownValue={setSelectedDropdownValue}
                      HandleGoldRate={HandleGoldRate}
                      HandleRemarks={HandleRemarks}
                      clientGroupList={clientGroupList}
                    />
                    <ChallanItemsTable
                      defaultData={data?.challan_table}
                      tableData={tableData}
                      setTableData={setTableData}
                      subCategoryList={subCategoryList}
                    />
                    <NarrationTable
                      defaultData={data?.narrations}
                      narrationTableData={narrationTableData}
                      setNarrationTableData={setNarrationTableData}
                      productList={productList}
                    />
                  </>
                );
              })
            : ''}
        </div>
      </div>
    </div>
  );
};

export default EditChallanChitti;
