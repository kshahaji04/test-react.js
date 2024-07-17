import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const CreateChittiForm = ({
  handleTopSectionData,
  topSectionInputData,
  clientNameList,
  defaultData,
  readOnly,
}: any) => {
  const convertDateFormat = (dateStr: any) => {
    if (dateStr !== undefined) {
      const [day, month, year] = dateStr !== undefined && dateStr?.split('-');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
  };

  const newDateStr = convertDateFormat(topSectionInputData?.date);
  const clientData: any = {
    fieldname: 'client_name',
    fieldtype: 'Link',
    link_data: clientNameList,
  };

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
                    ? new Date()?.toISOString()?.split('T')[0]
                    : newDateStr
                }
                defaultValue={defaultData?.date}
                className="form-control custom-input-field py-0 px-2"
                readOnly
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Client Name <span className="text-danger">*</span>
            </label>

            <AutoCompleteInput
              data={clientData}
              handleSearchInput={(value: any, fieldName: any) =>
                handleTopSectionData(value, fieldName)
              }
              defaultValue={topSectionInputData?.client_name}
              value={topSectionInputData?.client_name}
              readOnlyFields={readOnly === true ? true : false}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Gold Rate
            </label>
            <input
              type="text"
              name="gold_rate"
              className="form-control custom-input-field px-1"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              defaultValue={topSectionInputData?.gold_rate}
              value={topSectionInputData.gold_rate}
              onChange={(e) =>
                handleTopSectionData(e.target.value, 'gold_rate')
              }
              readOnly={readOnly === true ? true : false}
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Remarks
            </label>
            <input
              type="text"
              name="remarks"
              id="remarks"
              className="form-control custom-input-field px-1"
              value={topSectionInputData.remarks}
              defaultValue={topSectionInputData?.remarks}
              onChange={(e) => handleTopSectionData(e.target.value, 'remarks')}
              readOnly={readOnly === true ? true : false}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateChittiForm;
