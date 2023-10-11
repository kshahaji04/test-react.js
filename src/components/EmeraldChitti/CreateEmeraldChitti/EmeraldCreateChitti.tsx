import react, { useState } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const EmeraldCreateChitti = ({
  selectedDropdownValue,
  defaultData,
  setSelectedDropdownValue,
  HandleClientGroup,
  clientGroupList,
  clientNameList,
  currentDate,
  handleDateChange,
  transactionDate,
}: any) => {
  const [bgColor, setBgColor] = useState<any>(true);
  return (
    <form
      //  onSubmit={handleSubmit}
      className=""
    >
      <div className="d-flex justify-content-sm-evenly flex-md-row flex-column">
        <div className="w-25 ">
          <label className="form-Form.Label text-dark form-label-bold">
            Client Name :
          </label>
          <div className="h-25">
            <SelectedInputDropdown
              drowpdownlist={clientNameList}
              bgColor={bgColor}
              placeholderValue="Client Name"
              selectedDropdownValue={selectedDropdownValue}
              setSelectedDropdownValue={setSelectedDropdownValue}
              clientGroupList={clientGroupList}
              HandleClientGroup={HandleClientGroup}
              defaultData={defaultData}
            />
          </div>
        </div>
        <div className="w-25 ">
          <label className="form-Form.Label text-dark form-label-bold">
            Transaction Date :
          </label>
          <div className="d-flex justify-content-between h-100">
            <input
              type="date"
              id="date"
              name="date"
              value={currentDate?.toISOString()?.split('T')[0]}
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
