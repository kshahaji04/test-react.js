import { Formik } from 'formik';

const CreateChittiForm = () => {
  const initialFormValues = {
    date: '',
    customer: '',
    detail: '',
    category: '',
    category2: '',
    barcode: false,
  };
  return (
    <>
      <div className="container  border rounded-3 px-2 py-2">
        <Formik
          initialValues={initialFormValues}
          //  validate={values => {
          //    const errors = {};
          //    if (!values.email) {
          //      errors.email = 'Required';
          //    } else if (
          //      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //    ) {
          //      errors.email = 'Invalid email address';
          //    }
          //    return errors;
          //  }}
          onSubmit={(values, { setSubmitting }) => {
            console.log('submit values', values);
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <div className="row ">
                <div className="col-lg-4 col-md-6">
                  <label className="form-Form.Label fs-6 text-dark form-label-bold">
                    Transaction Date :
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {/* <span className="d-flex px-3">(dd/mm/yy)</span> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 ">
                  <label className="form-Form.Label fs-6 text-dark form-label-bold">
                    Customer :
                  </label>

                  <input
                    type="text"
                    name="customer"
                    className="form-control custom-input-field"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-lg-4 col-md-6">
                  <label className="form-Form.Label fs-6 text-dark form-label-bold">
                    Detail :
                  </label>
                  <input
                    type="text"
                    name="detail"
                    className="form-control custom-input-field"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.email}
                  />
                  {/* {errors.email && errors.email} */}
                </div>
                <div className="col-lg-4 col-md-6">
                  <label className="form-Form.Label fs-6 text-dark form-label-bold">
                    Cs category :
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="form-select custom-input-field py-0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label=".form-select-sm example"
                  >
                    <option onChange={handleChange} selected>
                      Select Cs Category
                    </option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-6">
                  <label className="form-Form.Label fs-6 text-dark form-label-bold">
                    kun Category :
                  </label>
                  <select
                    id="category2"
                    name="category2"
                    className="form-select custom-input-field py-0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label=".form-select-sm example"
                  >
                    <option onChange={handleChange} selected>
                      Select Kun Category
                    </option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-end justify-content-center">
                  <div className="d-flex flex-column w-100">
                    <label className="form-Form.Label fs-6 text-dark form-label-bold">
                      Barcode Scanning :
                    </label>
                    <input
                      className="form-check-input mx-4 fs-5 "
                      type="checkbox"
                      value=""
                      id="barcode"
                      name="barcode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              {/* <div className=" d-flex justify-content-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" btn btn-outline-primary mt-2 mx-5 py-1 form-submit-button"
                >
                  Submit
                </button>
              </div> */}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateChittiForm;
