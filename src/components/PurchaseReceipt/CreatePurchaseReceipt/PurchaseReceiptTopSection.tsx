import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const PurchaseReceiptTopSection = ({
  handlePRTopSectionData,
  clientNameList,
  topSectionInputData,
  readOnlyFields,
}: any) => {
  const clientData: any = {
    fieldname: 'client_name',
    fieldtype: 'Link',
    link_data: clientNameList,
  };

  const convertDateFormat = (dateStr: any) => {
    if (dateStr !== undefined) {
      const [day, month, year] = dateStr !== undefined && dateStr?.split('-');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
  };

  const newDateStr = convertDateFormat(topSectionInputData?.date);

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
                newDateStr === undefined
                  ? new Date()?.toISOString()?.split('T')[0]
                  : newDateStr
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
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value={topSectionInputData?.check_916}
                checked={topSectionInputData?.check_916 === 1}
                onChange={(e) =>
                  handlePRTopSectionData(e.target.checked, 'check_916')
                }
                disabled={readOnlyFields}
              />
              <label className="form-check-label">916</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value={topSectionInputData?.check_75}
                checked={topSectionInputData?.check_75 === 1}
                onChange={(e) =>
                  handlePRTopSectionData(e.target.checked, 'check_75')
                }
                disabled={readOnlyFields}
              />
              <label className="form-check-label">75</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PurchaseReceiptTopSection;
