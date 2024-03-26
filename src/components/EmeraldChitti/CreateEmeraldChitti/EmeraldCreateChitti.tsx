import { useRef } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const EmeraldCreateChitti = ({
  selectedDropdownValue,
  defaultData,
  setSelectedDropdownValue,
  handleClientGroup,
  clientGroupList,
  clientNameList,
  currentDate,
  handleDateChange,
  setStateForDocStatus,
  readOnly,
}: any) => {
  const bgColor = useRef(true);
  return (
    <form
      //  onSubmit={handleSubmit}
      className=""
    >
      <div className="row justify-content-around">
        <div className="col-lg-3 col-6">
          <label className="form-Form.Label text-dark form-label-bold">
            Client Name
            <span className="text-danger">*</span>
          </label>
          <div className="h-25">
            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              bgColor={bgColor}
              placeholderValue="Client Name"
              selectedDropdownValue={selectedDropdownValue}
              setSelectedDropdownValue={setSelectedDropdownValue}
              clientGroupList={clientGroupList}
              handleClientGroup={handleClientGroup}
              defaultData={defaultData}
              setStateForDocStatus={setStateForDocStatus}
              readOnly={readOnly === true ? true : false}
            />
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <label className="form-Form.Label text-dark form-label-bold">
            Transaction Date
          </label>
          <div className="d-flex justify-content-between h-100">
            <input
              type="date"
              id="date"
              name="date"
              value={
                defaultData === undefined
                  ? currentDate?.toISOString()?.split('T')[0]
                  : defaultData?.date
              }
              defaultValue={defaultData?.date}
              className="form-control custom-input-field emerald-input-field"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={handleDateChange}
              readOnly
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmeraldCreateChitti;
