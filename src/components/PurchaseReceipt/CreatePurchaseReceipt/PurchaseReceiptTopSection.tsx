import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const PurchaseReceiptTopSection = ({
  handlePRTopSectionData,
  clientNameList,
  topSectionInputData,
  defaultData,
  readOnlyFields,
}: any) => {
  const clientData: any = {
    fieldname: 'client_name',
    fieldtype: 'Link',
    link_data: clientNameList,
  };

  return (
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
                  : defaultData?.date
              }
              defaultValue={topSectionInputData?.date}
              className="form-control custom-input-field py-0 px-2"
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <label className="form-Form.Label fs-6 text-dark form-label-bold">
            Karigar Name <span className="text-danger">*</span>
          </label>
          <AutoCompleteInput
            data={clientData}
            handleSearchInput={(value: any, fieldName: any) =>
              handlePRTopSectionData(value, fieldName)
            }
            defaultValue={topSectionInputData?.karigar_name}
            value={topSectionInputData?.karigar_name}
            readOnlyFields={readOnlyFields}
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
            defaultValue={topSectionInputData?.gold_rate}
            value={topSectionInputData?.gold_rate}
            onChange={(e) =>
              handlePRTopSectionData(e.target.value, 'gold_rate')
            }
            readOnly={readOnlyFields}
            autoComplete="off"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <label className="form-Form.Label fs-6 text-dark form-label-bold">
            Category
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="form-check-label">916</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
              <label className="form-check-label">75</label>
            </div>
          </div>


          {/* <input
            type="text"
            name="remarks"
            className="form-control custom-input-field px-1"
            value={topSectionInputData?.remarks}
            defaultValue={topSectionInputData?.remarks}
            onChange={(e) => handlePRTopSectionData(e.target.value, 'remarks')}
            readOnly={readOnlyFields}
            autoComplete="off"
          /> */}
        </div>
      </div>
    </form>
  );
};

export default PurchaseReceiptTopSection;
