import { useRef } from 'react';
import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const EmeraldCreateChitti = ({
  defaultData,
  handleClientGroup,
  clientGroupList,
  clientNameList,
  currentDate,
  setStateForDocStatus,
  readOnly,
  handleTopSectionData,
  topSectionInputData,
}: any) => {
  const clientData: any = {
    fieldname: 'client_name',
    fieldtype: 'Link',
    link_data: clientNameList,
  };

  return (
    <form className="">
      <div className="row justify-content-around">
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
              // onChange={handleDateChange}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <label className="form-Form.Label text-dark form-label-bold">
            Client Name
            <span className="text-danger">*</span>
          </label>
          <div className="h-25">
            <AutoCompleteInput
              data={clientData}
              handleSearchInput={(value: any, fieldName: any) =>
                handleTopSectionData(value, fieldName)
              }
              defaultValue={defaultData?.client_name}
              value={topSectionInputData?.client_name}
              readOnlyFields={readOnly}
              setStateForDocStatus={setStateForDocStatus}
            />
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <label className="form-Form.Label text-dark form-label-bold">
            Remarks
          </label>
          <div className="d-flex justify-content-between h-100">
            <input
              type="text"
              id="remarks"
              name="remarks"
              value={topSectionInputData?.remarks}
              defaultValue={defaultData?.remarks}
              onChange={(e) => handleTopSectionData(e.target.value, 'remarks')}
              className="form-control custom-input-field emerald-input-field"
              readOnly={readOnly}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmeraldCreateChitti;
