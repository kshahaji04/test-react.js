const TopSectionOfDataUploadTableDetails = ({ details }: any) => {
  return (
    <div className="row mb-4">
      <div className="col-lg-4 col-6">
        <div className="form-group">
          <label htmlFor="usr" className="text-secondary">
            Supplier
          </label>
          <input
            type="text"
            className="form-control w-50 p-1"
            value={details[0]?.supplier}
            readOnly
          />
        </div>
      </div>
      <div className="col-lg-4 col-6">
        <div className="form-group">
          <label htmlFor="usr" className="text-secondary">
            Total No of Rows
          </label>
          <input
            type="text"
            className="form-control w-50 p-1"
            value={details[0]?.total_no_of_rows}
            readOnly
          />
        </div>
      </div>

      <div className="col-lg-4 col-6">
        <div className="form-group ">
          <label htmlFor="usr " className="text-secondary">
            Total of Netwt
          </label>
          <input
            type="text"
            className="form-control w-50 p-1"
            value={details[0]?.total_of_netwt}
            readOnly
          />
        </div>
      </div>
      <div className="col-lg-4 col-6">
        {' '}
        <div className="form-group">
          <label htmlFor="usr" className="text-secondary">
            Date
          </label>
          <input
            type="text"
            className="form-control w-50  p-1"
            value={details[0]?.date}
            readOnly
          />
        </div>
      </div>
      <div className="col-lg-4 col-6">
        <div className="form-group">
          <label htmlFor="usr" className="text-secondary">
            Total of Grosswt
          </label>
          <input
            type="text"
            className="form-control w-50 p-1"
            value={details[0]?.total_of_grosswt}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default TopSectionOfDataUploadTableDetails;
