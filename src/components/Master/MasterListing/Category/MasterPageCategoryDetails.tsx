import { useNavigate, useParams } from 'react-router-dom';

const MasterPageCategoryDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-header">
          <div className="d-flex justify-content-between ">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Back
            </button>
            {/* {showSubmitButton && (
              <button
                type="submit"
                onClick={HandleSubmit}
                className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              >
                Save
              </button>
            )} */}
          </div>
        </div>
        <div className="my-2 p-4">
          <label htmlFor="basic-url " className="fs-5">
            Category
            <span className="text-danger">*</span>
          </label>
          <div className="input-group my-2 w-25">
            <input
              type="text"
              className="form-control py-1 px-2"
              // value={inputValue}
              defaultValue={id}
              required
              id="basic-url"
              readOnly
            />
          </div>
          {/* <div className="">
            {' '}
            {error && <p className="text-danger">{error}</p>}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MasterPageCategoryDetails;
