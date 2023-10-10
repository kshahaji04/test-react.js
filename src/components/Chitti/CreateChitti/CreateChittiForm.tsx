import { useEffect, useState } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';
import { get_specific_chitti_challan } from '../../../store/slices/Chitti/get-specific-chitti-listing-data-slice';
import { useSelector } from 'react-redux';
import CustomDropDown from '../../customDropdown';

const CreateChittiForm = ({
  currentDate,
  selectedDropdownValue,
  HandleGoldRate,
  HandleRemarks,
  setSelectedDropdownValue,
  clientNameList,
  clientGroupList,
  HandleClientGroup,
  defaultData,
  HandleDateChange,
  date,
}: any) => {
  console.log('defaultData', currentDate);

  const [bgColor, setBgColor] = useState<any>(true);
  const [readOnlyField, setReadOnlyField] = useState<any>(false);

  const docStatusFromStore: any = useSelector(get_specific_chitti_challan);
  console.log('docStatus in cre', docStatusFromStore?.docStatus);
  // useEffect(() => {
  //   if (docStatusFromStore?.docStatus > 0) {
  //     setReadOnlyField(true);
  //   } else {
  //     setReadOnlyField(false);
  //   }
  // }, []);

  return (
    <>
      <form className="d-flex flex-column">
        <div className="row ">
          <div className="col-lg-10"></div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Date :
            </label>
            <div className="d-flex justify-content-between h-100">
              <input
                type="date"
                id="date"
                name="date"
                defaultValue={defaultData?.date}
                value={currentDate?.toISOString()?.split('T')[0]}
                className="form-control custom-input-field py-0 px-2"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                onChange={HandleDateChange}
                // readOnly={readOnlyField}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Client Name :<span className="text-danger">*</span>
            </label>

            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              bgColor={bgColor}
              placeholderValue="Client Name"
              selectedDropdownValue={selectedDropdownValue}
              setSelectedDropdownValue={setSelectedDropdownValue}
              clientGroupList={clientGroupList}
              HandleClientGroup={HandleClientGroup}
              defaultData={defaultData}
              // readOnlyField={readOnlyField}
            />
            <CustomDropDown />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Gold Rate :
            </label>
            <input
              type="text"
              name="gold"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              // readOnly={readOnlyField}
              onChange={HandleGoldRate}
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Remarks:
            </label>
            <input
              type="text"
              name="remark"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={HandleRemarks}
              // readOnly={readOnlyField}
              // onBlur={handleBlur}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateChittiForm;
