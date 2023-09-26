import { Formik } from 'formik';
import React from 'react';

const EmeraldCreateChitti = () => {
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
      <div className="container mt-2 border rounded-3 px-2 py-1">
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
            <form onSubmit={handleSubmit} className="">
              <div className="d-flex justify-content-sm-evenly flex-md-row flex-column">
                <div className="w-25 ">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    Client Name :
                  </label>
                  <select
                    id="supplier"
                    name="supplier"
                    className="form-select custom-input-field py-0"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label=".form-select-sm example"
                  >
                    <option onChange={handleChange} selected>
                      Select Client
                    </option>
                    <option>TBZ jewels</option>
                  </select>
                </div>
                <div className="w-25 ">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
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
                      className="form-control custom-input-field"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="w-25 d-flex align-items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" btn btn-outline-primary py-1 px-4 w-lg-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EmeraldCreateChitti;
