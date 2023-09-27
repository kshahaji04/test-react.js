const CreateChittiForm = () => {
  const handleSubmit: any = () => {};
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
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
                value="2018-07-22"
                min="2011-01-01"
                max="2028-12-31"
                className="form-control custom-input-field py-0"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Client Name :
            </label>
            <input
              type="text"
              name="client"
              className="form-control custom-input-field"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={values.email}
            />
            {/* {errors.email && errors.email} */}
          </div>
          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Gold Rate :
            </label>
            <input
              type="text"
              name="gold"
              className="form-control custom-input-field"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <label className="form-Form.Label fs-6 text-dark form-label-bold">
              Remarks:
            </label>
            <input
              type="text"
              name="remark"
              className="form-control custom-input-field"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              // onChange={handleChange}
              // onBlur={handleBlur}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateChittiForm;
