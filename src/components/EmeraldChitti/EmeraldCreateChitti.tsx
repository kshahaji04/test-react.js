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
            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <div className="row ">
                <div className="col-lg-4 col-md-6 py-2">
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
                      className="form-control h-50"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {/* <span className="d-flex px-3">(dd/mm/yy)</span> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 py-2">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    Customer :{/* <span className="red">*</span> */}
                  </label>
                  <input
                    type="text"
                    name="customer"
                    className="form-control h-50"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.customer}
                  />
                  {/* {errors.email && errors.email} */}
                </div>
                <div className="col-lg-4 col-md-6 py-2">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    Detail :{/* <span className="red">*</span> */}
                  </label>
                  <input
                    type="text"
                    name="detail"
                    className="form-control h-50"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // value={values.email}
                  />
                  {/* {errors.email && errors.email} */}
                </div>
                <div className="col-lg-4 col-md-6 py-2">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    Cs category :{/* <span className="red">*</span> */}
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="form-select "
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

                  {/* {errors.email && errors.email} */}
                </div>
                <div className="col-lg-4 col-md-6 py-2">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    kun Category :
                  </label>
                  <select
                    id="category2"
                    name="category2"
                    className="form-select "
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

                  {/* {errors.email && errors.email} */}
                </div>
                <div className="col-lg-4 col-md-6 py-2 d-flex align-items-end justify-content-center">
                  <div className="d-flex flex-column w-100">
                    <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                      Barcode Scanning :
                    </label>
                    <input
                      className="form-check-input mx-4 fs-5"
                      type="checkbox"
                      value=""
                      id="barcode"
                      name="barcode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 py-2">
                  <label className="form-Form.Label fs-6 text-dark pb-1 form-label-bold">
                    Supplier :
                  </label>
                  <select
                    id="supplier"
                    name="supplier"
                    className="form-select "
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-label=".form-select-sm example"
                  >
                    <option onChange={handleChange} selected>
                      Select Supplier
                    </option>
                    <option>supplier 1</option>
                    <option>supplier 2</option>
                    <option>supplier 3</option>
                  </select>

                  {/* {errors.email && errors.email} */}
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" btn btn-outline-primary my-2 w-50"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EmeraldCreateChitti;
