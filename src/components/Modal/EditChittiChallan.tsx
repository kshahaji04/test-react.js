import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CreateChittiForm from '../Chitti/CreateChitti/CreateChittiForm';
import { useDispatch } from 'react-redux';
import {
  getSpecificChittiChallan,
  get_specific_chitti_challan,
} from '../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import ChallanItemsTable from '../Chitti/CreateChitti/ChallanItemsTable';
import NarrationTable from '../Chitti/CreateChitti/NarrationTable';

const EditChittiChallan = ({
  show,
  toHide,
  modalData,
  setTableData,
  subCategoryList,
  narrationTableData,
  setNarrationTableData,
  productList,
  selectedDropdownValue,
  drowpdownlist
}: any) => {
  const dispatch = useDispatch();
  console.log('modalData', modalData);
  const AccessToken: any = useSelector(get_access_token);
  const ChittiChallanDataFromStore: any = useSelector(
    get_specific_chitti_challan
  );

  const [chittiChallanData, setChittiChallanData] = useState<any>([]);
  console.log('ChittiChallanData spec', ChittiChallanDataFromStore);

  useEffect(() => {
    const params: any = {
      name: modalData,
      token: AccessToken?.token,
    };
    dispatch(getSpecificChittiChallan(params));
  }, []);

  useEffect(() => {
    if (
      ChittiChallanDataFromStore?.data?.length > 0 &&
      ChittiChallanDataFromStore?.data !== null
    ) {
      setChittiChallanData([ChittiChallanDataFromStore?.data]);
    } else {
      setChittiChallanData([]);
    }
  }, [ChittiChallanDataFromStore]);

  console.log('ChittiChallanData spec', chittiChallanData);

  return (
    <>
      <Modal show={show} onHide={toHide} size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="bold"></Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        {chittiChallanData?.length > 0 &&
            chittiChallanData !== null &&
            chittiChallanData.map((data: any, index: any) => {
              console.log('valuess da', data);

              return (
                <>
                  {data?.length > 0 &&
                    data !== null &&
                    data.map((values: any, i: any) => {
                      console.log('valuess', values);
                      return (
                        <>
                          <CreateChittiForm defaultData={values} selectedDropdownValue={selectedDropdownValue} clientNameList={drowpdownlist}/>
                          <ChallanItemsTable
                            tableData={values?.challan_table}
                            setTableData={setTableData}
                            subCategoryList={subCategoryList}
                          />
                          <NarrationTable
                            narrationTableData={values?.narrations}
                            setNarrationTableData={setNarrationTableData}
                            productList={productList}
                         
                          />
                        </>
                      );
                    })}
                </>
              );
            })}
        </div>
        
          </div>
        
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditChittiChallan;
