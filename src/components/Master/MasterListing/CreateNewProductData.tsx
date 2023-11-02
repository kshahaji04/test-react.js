const CreateNewProductData = ({
  inputValue,
  HandleInputValue,
  error,
  HandleSubmit,
}: any) => {
  return (
    <div className="container mt-1">
      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Title
      </label>
      <span className="text-danger">*</span>
      <div className="input-group mb-1 w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
          required
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <div className="d-flex justify-content-start ">
        <button
          type="submit"
          onClick={HandleSubmit}
          //   onKeyDown={HandleKeyDownFun}
          className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNewProductData;
