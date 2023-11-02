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
        </div>
      </div>
    </div>
  );
};

export default MasterPageCategoryDetails;
