import { useEffect, useRef } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const CreateChittiForm = ({
  currentDate,
  selectedDropdownValue,
  handleGoldRate,
  handleRemarks,
  setSelectedDropdownValue,
  clientNameList,
  clientGroupList,
  handleClientGroup,
  defaultData,
  handleDateChange,
  setStateForDocStatus,
  setRemarks,
  setGoldRate,
  goldRate,
  remarks,
  readOnly,
}: any) => {
  const bgColor = useRef(true);

  useEffect(() => {
    if (defaultData !== undefined && defaultData !== null) {
      setGoldRate(defaultData?.gold_rate);
      setRemarks(defaultData?.remarks);
    }
  }, []);

  const convertDateFormat = (dateStr: any) => {
    if (dateStr !== undefined) {
      const [day, month, year] = dateStr !== undefined && dateStr?.split('-');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
  };

  const newDateStr = convertDateFormat(defaultData?.date);

  return (
    <>
      <form className="d-flex flex-column">
        <div className="row ">
          <div className="col-lg-10"></div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Date
            </label>
            <div className="d-flex justify-content-between h-100">
              <input
                type="date"
                id="date"
                name="date"
                value={
                  defaultData === undefined
                    ? currentDate?.toISOString()?.split('T')[0]
                    : newDateStr
                }
                defaultValue={defaultData?.date}
                className="form-control custom-input-field py-0 px-2"
                onChange={handleDateChange}
                readOnly
                // readOnly={readOnlyField}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Client Name <span className="text-danger">*</span>
            </label>

            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              bgColor={bgColor}
              placeholderValue="Client Name"
              selectedDropdownValue={selectedDropdownValue}
              setSelectedDropdownValue={setSelectedDropdownValue}
              clientGroupList={clientGroupList}
              HandleClientGroup={handleClientGroup}
              defaultData={defaultData}
              setStateForDocStatus={setStateForDocStatus}
              readOnly={readOnly === true ? true : false}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Gold Rate
            </label>
            <input
              type="text"
              name="gold"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              defaultValue={defaultData?.gold_rate}
              value={goldRate}
              onChange={handleGoldRate}
              readOnly={readOnly === true ? true : false}
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Remarks
            </label>
            <input
              type="text"
              name="remark"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={remarks}
              defaultValue={defaultData?.remarks}
              onChange={handleRemarks}
              readOnly={readOnly === true ? true : false}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateChittiForm;
