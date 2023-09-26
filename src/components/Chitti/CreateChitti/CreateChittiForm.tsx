import { Formik } from 'formik';

const CreateChittiForm = () => {
  const initialFormValues = {
    gold: '',
    date: '',
    client: '',
    remark: '',
  };
  return (
    <>
      <div className="container border rounded-3 px-2 py-1">
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
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
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.email}
                  />
                  {/* {errors.email && errors.email} */}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.email}
                  />
                </div>
                {/* <div className="col-lg-4 col-md-6">
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
                </div> */}
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
