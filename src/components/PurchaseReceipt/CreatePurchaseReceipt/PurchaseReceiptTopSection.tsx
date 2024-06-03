import React from 'react';
import AutoCompleteInput from '../../InputDropdown/AutoCompleteInput';

const PurchaseReceiptTopSection = ({
  handlePRTopSectionData,
  clientNameList,
  topSectionInputData,
  defaultData,
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
              defaultValue={defaultData?.date}
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
            defaultValue={defaultData?.karigar_name}
            value={topSectionInputData?.karigar_name}
            // readOnlyFields={readOnlyFields}
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
            defaultValue={defaultData?.gold_rate}
            value={topSectionInputData?.gold_rate}
            onChange={(e) =>
              handlePRTopSectionData(e.target.value, 'gold_rate')
            }
            //   readOnly={readOnly === true ? true : false}
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <label className="form-Form.Label fs-6 text-dark form-label-bold">
            Remarks
          </label>
          <input
            type="text"
            name="remarks"
            className="form-control custom-input-field px-1"
            value={topSectionInputData?.remarks}
            //   defaultValue={defaultData?.remarks}
            onChange={(e) => handlePRTopSectionData(e.target.value, 'remarks')}
            //   readOnly={readOnly === true ? true : false}
          />
        </div>
      </div>
    </form>
  );
};

export default PurchaseReceiptTopSection;
